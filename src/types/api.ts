interface Response {
  Count: number;
  Message: string;
  SearchCriteria: string;
}

export interface CarParams {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}
export interface FilteredCarParams {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface AllCarsResponse extends Response {
  Results: CarParams[];
}

export interface FilteredCarsResponse extends Response {
  Results: FilteredCarParams[];
}
