import { Suspense } from "react";
import { CarSearch } from "@/types/searchParams";
import { AllCars, Loader } from "@/components";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Partial<CarSearch>>;
}) {
  const filters = await searchParams;

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <AllCars filters={filters} />
      </Suspense>
    </main>
  );
}
