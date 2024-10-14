import { apiInterface } from "./apiInterface";

export function database() {
  let countries = new Map();
  let fetchModule = new apiInterface();

  async function addCountryAsync(name) {
    try {
        let newCountry = await fetchModule.getCountryAsync(name);
        let hashName = newCountry[0].name.common.toLowerCase();
        countries.set(hashName, newCountry);
    } catch(e) {
        console.log(e);

    }
  };

  async function getCountryByNameAsync(name) {
    let nameLower = name.toLowerCase();
    if(countries.has(nameLower)) {
        return countries.get(nameLower);
    } else {
      try {
        await addCountryAsync(nameLower);
        return countries.get(nameLower);
      } catch(e) {
        console.log(e);
      }
    }
  };

  function getAllCountries() {
    return Array.from(countries.values())
  }

  function clearDatabase() {
    countries.clear();
  }

  return {addCountryAsync, getCountryByNameAsync, clearDatabase, getAllCountries} // TODO: Integrate get Countries
}
