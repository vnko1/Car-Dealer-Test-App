export function getYears(startYear = 2015) {
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
