import React from "react";

import { FilteredCarParams } from "@/types/api";

interface CarProps extends FilteredCarParams {
  classNames?: string;
  year: string;
}
const Car: React.FC<CarProps> = ({
  classNames,
  Make_Name,
  Model_Name,
  year,
}) => {
  return (
    <div
      className={`w-1/4 h-[240px] flex flex-col gap-2-xs items-center justify-center rounded-sm border border-blue-400 p-5-xs ${classNames}`}
    >
      <h2 className="text-lg">{Make_Name}</h2>
      <h3 className="text-md">{Model_Name}</h3>
      <p className="text-sm">{year}</p>
    </div>
  );
};

export default Car;
