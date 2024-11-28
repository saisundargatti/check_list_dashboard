export const checklist_rules = [
  {
    id: 1,
    rule: "Valuation fee paid",
    status: (data) => data.isValuationFeePaid == true,
  },
  {
    id: 2,
    rule: "UK Resident",
    status: (data) => data.isUkResident == true,
  },
  {
    id: 3,
    rule: "Risk Rating Medium",
    status: (data) => data.riskRating == "Medium",
  },
  {
    id: 4,
    rule: "LTV",
    status: (data) => parseFloat(data.ltv.replace("%", "")) < 60,
  },
];
