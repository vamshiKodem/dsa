// Input
const user = {
  name: "Rowdy Coders",
  address: {
    primary: {
      house: "109",
      street: {
        main: 21,
        cross: ["32", "1"],
      },
    },
  },
};

// Output

const output = {
  user_name: "Rowdy Coders",
  user_address_primary_house: "109",
  user_address_primary_street_main: 21,
  user_address_primary_street_cross: ["32", "1"],
};

const flat = (obj, prefix = "") => {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result = { ...result, ...flat(obj[key], `${prefix}_${key}`) };
    } else {
      result[`${prefix}_${key}`] = obj[key];
    }
  }

  return result;
};

flat(user, "user_");
