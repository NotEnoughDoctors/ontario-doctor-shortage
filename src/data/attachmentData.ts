export const overallStats = {
  totalPopulation: 15717487,
  attached: 13195861,
  attachedPercent: 84.0,
  uncertainlyAttached: 2521626,
  uncertainlyAttachedPercent: 16.0,
  receivingPrimaryCare: 735461,
  receivingPrimaryCarePercent: 4.7,
  notReceivingPrimaryCare: 1786165,
  notReceivingPrimaryCarePercent: 11.4,
};

export const ageGroupData = [
  { age: "Under 5", attached: 668153, uncertainly: 58211, total: 726364 },
  { age: "5-9", attached: 711927, uncertainly: 102214, total: 814141 },
  { age: "10-14", attached: 718603, uncertainly: 130535, total: 849138 },
  { age: "15-17", attached: 456168, uncertainly: 64195, total: 520363 },
  { age: "18-34", attached: 2728316, uncertainly: 877586, total: 3605902 },
  { age: "35-49", attached: 2592350, uncertainly: 590801, total: 3183151 },
  { age: "50-64", attached: 2697750, uncertainly: 410163, total: 3107913 },
  { age: "65-79", attached: 1987696, uncertainly: 217668, total: 2205364 },
  { age: "80+", attached: 634898, uncertainly: 70253, total: 705151 },
];

export const incomeQuintileData = [
  { 
    quintile: "Lowest income (Q1)", 
    attached: 2413610, 
    uncertainly: 636064,
    notReceiving: 450740,
    total: 3049674 
  },
  { 
    quintile: "Q2", 
    attached: 2561953, 
    uncertainly: 548065,
    notReceiving: 389430,
    total: 3110018 
  },
  { 
    quintile: "Q3", 
    attached: 2698135, 
    uncertainly: 494586,
    notReceiving: 349993,
    total: 3192721 
  },
  { 
    quintile: "Q4", 
    attached: 2754248, 
    uncertainly: 436848,
    notReceiving: 308790,
    total: 3191096 
  },
  { 
    quintile: "Highest income (Q5)", 
    attached: 2740202, 
    uncertainly: 393702,
    notReceiving: 278608,
    total: 3133904 
  },
];

export const ruralityData = [
  { 
    location: "Urban", 
    attached: 9539744, 
    uncertainly: 1893014,
    notReceiving: 1313093,
    total: 11432758,
    uncertainlyPercent: 16.5
  },
  { 
    location: "Small town", 
    attached: 2631321, 
    uncertainly: 392001,
    notReceiving: 291912,
    total: 3023322,
    uncertainlyPercent: 13.0
  },
  { 
    location: "Rural", 
    attached: 920616, 
    uncertainly: 175239,
    notReceiving: 136942,
    total: 1095855,
    uncertainlyPercent: 16.0
  },
];

export const newcomerData = [
  {
    status: "Not New to Ontario",
    attached: 10438172,
    uncertainly: 1642610,
    notReceiving: 1097548,
    total: 12080782,
    uncertainlyPercent: 13.6,
  },
  {
    status: "New Arrival to Ontario",
    attached: 1236028,
    uncertainly: 691705,
    notReceiving: 505330,
    total: 1927733,
    uncertainlyPercent: 35.9,
  },
];

export const genderData = [
  {
    gender: "Male",
    attached: 6335325,
    uncertainly: 1446989,
    notReceiving: 1068570,
    total: 7782314,
    uncertainlyPercent: 18.6,
  },
  {
    gender: "Female",
    attached: 6860536,
    uncertainly: 1074637,
    notReceiving: 717595,
    total: 7935173,
    uncertainlyPercent: 13.5,
  },
];
