import React, { Suspense } from "react";
import { redirect } from "next/navigation";

import { CarSearch } from "@/types/searchParams";
import { startDate, getYears } from "@/utils";
import { getAllCars } from "@/api/api";
import { FilteredCars, Loader } from "@/components";

export async function generateStaticParams() {
  const res = await getAllCars();

  if (typeof res === "string" || res instanceof Blob || res instanceof Error)
    throw new Error();
  const years = getYears();

  return res.Results.slice(0, 5).flatMap((make) => {
    return years.map((year) => ({ makeId: make.MakeId.toString(), year }));
  });
}

async function Page({ params }: { params: Promise<CarSearch> }) {
  const filters = await params;

  if (
    filters.year > new Date().getFullYear().toString() ||
    filters.year < startDate.toString()
  ) {
    redirect(`/result/${filters.makeId}/${new Date().getFullYear()}`);
  }

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <FilteredCars params={filters} />
      </Suspense>
    </main>
  );
}

export default Page;
