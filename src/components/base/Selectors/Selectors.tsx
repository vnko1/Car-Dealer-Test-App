"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectItem, SelectProps } from "@nextui-org/select";

import { CarSearch } from "@/types/searchParams";
import { CarParams } from "@/types/api";
import { getYears } from "@/utils/functions";

interface AnimalProps extends Partial<SelectProps> {
  className?: string;
  makes: CarParams[];
  filters: Partial<CarSearch>;
}
const Selectors: React.FC<AnimalProps> = ({
  className,
  makes,
  filters,
  ...props
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const createPageURL = (name: string, term?: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set(name, term);
    } else {
      params.delete(name);
    }

    replace(pathname + "?" + params.toString());
  };

  return (
    <div className={`w-full flex justify-center gap-3-xs ${className}`}>
      <Select
        className="max-w-xs"
        {...props}
        selectedKeys={[filters?.makeId || ""]}
        label="Makes name"
        onChange={(e) => {
          createPageURL("makeId", e.target.value);
        }}
      >
        {makes.map((make) => (
          <SelectItem key={make.MakeId}>{make.MakeName}</SelectItem>
        ))}
      </Select>
      <Select
        className={`max-w-xs ${className}`}
        {...props}
        label="Model years"
        selectedKeys={[filters?.year || ""]}
        onChange={(e) => {
          createPageURL("year", e.target.value);
        }}
      >
        {getYears().map((year) => (
          <SelectItem key={year}>{year}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Selectors;
