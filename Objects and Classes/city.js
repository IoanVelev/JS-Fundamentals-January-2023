function city(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value}`);
  }
}

city(
  {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  },
  {
    name: "Plovdiv",
    area: 389,
    population: 11623558,
    country: "Bulgaria",
    postCode: "4000",
  }
);