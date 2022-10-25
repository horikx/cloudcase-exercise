export function calculateAnnualTax(income: number): number {
  if (income < 18200) return 0;
  if (income < 37000) return (income - 18200) * 0.19;
  if (income < 90000) return (income - 37000) * 0.325 + 3572;
  if (income < 180000) return (income - 90000) * 0.37 + 20797;
  return (income - 180000) * 0.45 + 54097;
}

export function calculateAnnualSuper(
  income: number,
  year: number = new Date().getFullYear()
) {
  // https://www.ato.gov.au/Rates/Key-superannuation-rates-and-thresholds/?anchor=Superguaranteepercentage#Superguaranteepercentage
  switch (year) {
    case 2022:
      return income * 0.1;
    case 2023:
      return income * 0.105;
    case 2024:
      return income * 0.11;
    case 2025:
      return income * 0.115;
    default:
      return income * 0.12;
  }
}
