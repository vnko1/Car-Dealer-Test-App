import ApiInstance from "@/services";
import { AllCarsResponse, FilteredCarsResponse } from "@/types/api";
import { CarSearch } from "@/types/searchParams";

const allCars = new ApiInstance(process.env.BASE_URL as string);

export const getAllCars = () =>
  allCars.get<AllCarsResponse>(
    "/api/vehicles/GetMakesForVehicleType/car?format=json"
  );

const filteredCars = new ApiInstance(process.env.BASE_URL as string);

export const getFilteredCars = ({ makeId, year }: CarSearch) => {
  return filteredCars.get<FilteredCarsResponse>(
    `api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
};
