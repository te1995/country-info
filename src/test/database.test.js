import { database } from "../js/database.js";

let data = database();

beforeEach(async () => {
    await data.addCountryAsync("Germany");
    await data.addCountryAsync("Poland");
    await data.addCountryAsync("France");
});

afterEach(() => {
    data.clearDatabase();
});

test("Get country", async () => {
  let country = await data.getCountryByNameAsync("Germany");
  expect(country[0].name.common).toBe("Germany");
});

test("Get country not initialized", async () => {
    let country = await data.getCountryByNameAsync("Thailand");
    expect(country[0].name.common).toBe("Thailand");
});

test("Get country wrong name", async () => {
    await expect(data.getCountryByNameAsync("hello world")).rejects.toThrow();
  });