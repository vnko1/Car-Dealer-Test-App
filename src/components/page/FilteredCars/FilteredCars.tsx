import React from "react";
import { notFound } from "next/navigation";
import { CarSearch } from "@/types/searchParams";
import { getFilteredCars } from "@/api/api";
import { Car, Container } from "@/components";

interface FilteredCarsProps {
  params: CarSearch;
}
const FilteredCars: React.FC<FilteredCarsProps> = async ({ params }) => {
  const res = await getFilteredCars(params);

  if (typeof res === "string" || res instanceof Blob || res instanceof Error)
    throw new Error();

  if (!res.Results.length) notFound();

  return (
    <Container containerClassNames="flex justify-center flex-wrap gap-4-xs">
      {res.Results.map((car) => (
        <Car key={car.Model_ID} {...car} year={params.year} />
      ))}
    </Container>
  );
};

export default FilteredCars;
