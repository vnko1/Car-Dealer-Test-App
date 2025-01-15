import React from "react";
import Link from "next/link";

import { CarSearch } from "@/types/searchParams";
import { getAllCars } from "@/api/api";
import { Container, Selectors } from "@/components";

interface AllCarsProps {
  filters: Partial<CarSearch>;
}

const AllCars: React.FC<AllCarsProps> = async ({ filters }) => {
  const res = await getAllCars();

  if (typeof res === "string" || res instanceof Blob || res instanceof Error)
    throw new Error();

  return (
    <Container containerClassNames="h-[80vh] flex flex-col items-center justify-between gap-3-md">
      <Selectors
        filters={filters}
        makes={res.Results}
        size="sm"
        labelPlacement="outside"
      />
      {filters.makeId && filters.year ? (
        <Link
          href={`result/${filters.makeId}/${filters.year}`}
          className="link text-xl"
        >
          Next
        </Link>
      ) : (
        <p className="text-xl text-grey-600">Next</p>
      )}
    </Container>
  );
};

export default AllCars;
