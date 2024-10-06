// data/schemes.js
const schemes = [
    {
      name: "MBC Community Scholarship",
      age: { min: 18, max: 40 },
      community: "MBC",
      employmentStatus: "Any",
      gender: "Any",
      income: { min: 0, max: 50000 },
      isGovEmployee: false,
      description: "Scholarship for individuals belonging to the MBC community with limited income."
    },
    {
      name: "Youth Empowerment Scheme",
      age: { min: 18, max: 30 },
      community: "MBC",
      employmentStatus: "unemployed",
      gender: "Any",
      income: { min: 0, max: 100000 },
      isGovEmployee: false,
      description: "A scheme to provide job opportunities for youth in the MBC community."
    },
    {
      name: "Government Employee Welfare Scheme",
      age: { min: 22, max: 60 },
      community: "Any",
      employmentStatus: "government",
      gender: "Any",
      income: { min: 0, max: 100000 },
      isGovEmployee: true,
      description: "A welfare scheme for government employees providing extra benefits."
    },
    {
      name: "Women Empowerment Scheme",
      age: { min: 18, max: 50 },
      community: "Any",
      employmentStatus: "Any",
      gender: "female",
      income: { min: 0, max: 80000 },
      isGovEmployee: false,
      description: "A scheme to empower women in need."
    },
    {
      name: "Lower-Income Housing Scheme",
      age: { min: 18, max: 65 },
      community: "Any",
      employmentStatus: "Any",
      gender: "Any",
      income: { min: 0, max: 30000 },
      isGovEmployee: false,
      description: "Housing scheme for individuals with lower income."
    }
  ];
  
  module.exports = schemes;
  