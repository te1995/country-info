import { apiInterface } from "../js/apiInterface.js";

let api = new apiInterface();

test("Get Countries info mocked", async () => {
  const mockResponse = [
    {
      name: { common: "Germany", official: "Federal Republic of Germany" },
      cca2: "DE",
      region: "Europe",
      subregion: "Western Europe",
      capital: ["Berlin"],
      population: 83240525,
      area: 357114,
      languages: { deu: "German" },
      flags: {
        png: "https://flagcdn.com/w320/de.png",
        svg: "https://flagcdn.com/de.svg",
      },
    },
  ];
  jest.spyOn(global, "fetch").mockReturnValueOnce({
    ok: true,
    json: jest.fn().mockResolvedValueOnce(mockResponse),
  });

  let country = await api.getCountryAsync("germany");

  expect(country[0].name.common).toBe("Germany");
});
