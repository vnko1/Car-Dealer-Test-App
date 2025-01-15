import { startDate } from "../constants";

export function getYears(startYear = startDate) {
  const currentYear = new Date().getFullYear();

  const dates = [];

  for (let year = startYear; year <= currentYear; year++) {
    dates.push(
      new Date(`${year}-01-01`).toLocaleDateString(undefined, {
        year: "numeric",
      })
    );
  }

  return dates;
}
