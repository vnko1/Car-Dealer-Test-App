import React, { Suspense } from "react";

import { CarSearch } from "@/types/searchParams";
import { getAllCars } from "@/api/api";
import { FilteredCars } from "@/components";
import { getYears } from "@/utils";

export async function generateStaticParams() {
  const res = await getAllCars();

  if (typeof res === "string" || res instanceof Blob || res instanceof Error)
    throw new Error();

  const paths = res.Results.flatMap((make) => {
    const years = getYears();
    return years.map((year) => ({
      params: { makeId: make.MakeId.toString(), year },
    }));
  });

  return paths;
}

async function Page({ params }: { params: Promise<CarSearch> }) {
  const filters = await params;

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredCars params={filters} />
      </Suspense>
    </main>
  );
}

export default Page;
