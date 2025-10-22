// Data extracted from Health Canada's Workforce Education, Training and Distribution Study (2025)

export const programCapacityData = [
  { profession: "Family Medicine Residency", capacity: 1557, institutions: 17, provinces: 8 },
  { profession: "Pharmacists", capacity: 1436, institutions: 10, provinces: 8 },
  { profession: "Occupational Therapists", capacity: 1339, institutions: 14, provinces: 7 },
  { profession: "Physiotherapists", capacity: 1302, institutions: 15, provinces: 7 },
  { profession: "MD Program", capacity: 3005, institutions: 17, provinces: 8 },
];

export const workforceGapsData = [
  { profession: "Family Physicians", currentGap: 22823, graduates: 1362, gapToGraduateRatio: 16.7 },
  { profession: "Registered Nurses", currentGap: 27608, graduates: 8992, gapToGraduateRatio: 3.1 },
  { profession: "Licensed Practical Nurses", currentGap: 13976, graduates: 6295, gapToGraduateRatio: 2.2 },
  { profession: "Nurse Practitioners", currentGap: 2646, graduates: 550, gapToGraduateRatio: 4.8 },
  { profession: "Occupational Therapists", currentGap: 1866, graduates: 873, gapToGraduateRatio: 2.1 },
  { profession: "Physiotherapists", currentGap: 2543, graduates: 770, gapToGraduateRatio: 3.3 },
  { profession: "Pharmacists", currentGap: 1614, graduates: 1217, gapToGraduateRatio: 1.3 },
];

export const growthRatesData = [
  { profession: "Nurse Practitioners", growthRate: 4.1 },
  { profession: "Physiotherapists", growthRate: 2.1 },
  { profession: "Licensed Practical Nurses", growthRate: 1.9 },
  { profession: "Family Physicians", growthRate: 1.8 },
  { profession: "Occupational Therapists", growthRate: 1.7 },
  { profession: "Registered Nurses", growthRate: 1.3 },
  { profession: "Pharmacists", growthRate: 1.1 },
];

export const trainingLocationData = [
  { profession: "Licensed Practical Nurses", urban: 62, rural: 97 },
  { profession: "Registered Nurses", urban: 87, rural: 39 },
  { profession: "Nurse Practitioners", urban: 27, rural: 3 },
  { profession: "Occupational Therapists", urban: 17, rural: 1 },
  { profession: "Physiotherapists", urban: 20, rural: 2 },
  { profession: "Pharmacists", urban: 10, rural: 0 },
  { profession: "MD Program", urban: 17, rural: 0 },
  { profession: "Family Medicine Residency", urban: 60, rural: 72 },
];

export const internationalComparisonData = [
  { country: "Canada", graduatesPer100k: 7.5, physiciansPer1000: 2.8 },
  { country: "Denmark", graduatesPer100k: 22.0, physiciansPer1000: 4.2 },
  { country: "OECD Average", graduatesPer100k: 14.2, physiciansPer1000: 3.7 },
  { country: "Norway", graduatesPer100k: 15.0, physiciansPer1000: 5.4 },
];
