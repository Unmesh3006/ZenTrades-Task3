export const isEmail = (value: string): boolean => {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const validatePassword = (password: string): string => {
  // Password should contain at least one uppercase letter
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
    return "Password should contain at least one uppercase letter";
  }

  // Password should contain at least one number
  const numberRegex = /[0-9]/;
  if (!numberRegex.test(password)) {
    return "Password should contain at least one number";
  }

  // If all conditions pass, the password is valid
  return "true";
};


export const cardData = [
  {
    title: "Total Revenue",
    value: "$406,411.29",
  },

  {
    title: "Total Jobs Avg",
    value: "$620",
  },

  {
    title: "Tickets Created",
    value: "655",
  },

  {
    title: "Tickets Scheduled",
    value: "735",
  },

  {
    title: "Outstanding Amount",
    value: "$110,448.8",
  },

  {
    title: "Memberships Sold",
    value: "105",
  },

  {
    title: "Jobs Completed",
    value: "436",
  },

  {
    title: "Total Canceled",
    value: "65",
  },
];

export const graph_1_data = [
  {
    title: "Everett",
    value: "80000",
  },

  {
    title: "Seattle",
    value: "75000",
  },

  {
    title: "Lynnwood",
    value: "50000",
  },

  {
    title: "Bothell",
    value: "48000",
  },

  {
    title: "Mukilteo",
    value: "46000",
  },

  {
    title: "Edmonds",
    value: "35000",
  },
];

const graph_2_data = [
  {
    title: "Service Plumbing",
    value: "180000",
  },

  {
    title: "Bid Work HVAC",
    value: "135000",
  },

  {
    title: "Service HVAC",
    value: "80000",
  },

  {
    title: "Bid Work Plumbing",
    value: "75000",
  },

  {
    title: "HWT Replacement",
    value: "46000",
  },

  {
    title: "Maintenance",
    value: "43000",
  },

  {
    title: "Maiterial Sales",
    value: "2000",
  },
];