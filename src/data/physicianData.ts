// Data extracted from 2024 CMA survey on physician workload and EMR usage

export const emrWorkloadData = [
  { category: "Excessive", gp: 39.2, specialist: 25.1, total: 32.8 },
  { category: "Moderately high", gp: 32.4, specialist: 30.3, total: 31.5 },
  { category: "Satisfactory", gp: 12.4, specialist: 11.9, total: 12.2 },
  { category: "Modest", gp: 7.6, specialist: 10.5, total: 8.9 },
  { category: "Minimal/none", gp: 8.3, specialist: 22.2, total: 14.7 },
];

export const visitDeliveryData = [
  { method: "In-person visits", percentage: 80.7 },
  { method: "Virtual care (video)", percentage: 10.0 },
  { method: "Virtual care (telephone)", percentage: 9.3 },
];

export const physicianBurnoutStats = {
  excessiveEmrTime: 32.8,
  excessiveEmrTimeGP: 39.2,
  moderatelyHighEmrTime: 31.5,
  totalBurdenedByEmr: 64.3, // excessive + moderately high
  satisfiedWithEmrTime: 12.2,
};

export const practiceToolsData = [
  { tool: "Electronic ordering of tests", usage: 72.2 },
  { tool: "Clinical decision support", usage: 59.9 },
  { tool: "Medication reconciliation", usage: 40.4 },
  { tool: "Secure patient messaging", usage: 37.4 },
  { tool: "Patient list generation", usage: 26.9 },
  { tool: "Online appointment booking", usage: 25.0 },
  { tool: "AI/Machine Learning tools", usage: 6.6 },
];
