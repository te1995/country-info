export class apiInterface {
  constructor() {}

  async getCountryAsync(country) {
    try {
      let data = await fetch(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`);
      if(!data.ok) {
        if(data.status === 404) {
          throw new Error("Wrong name!")
        } else {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
      }
      let dataJson = await data.json();
      return dataJson;
    } catch(e) {
      console.log(e);
      throw e;
    }

    
  }
}
