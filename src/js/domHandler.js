import {database} from "./database.js";

export function domHandler() {

    const searchField = document.querySelector("#searchCountry");
    const divCards = document.querySelector(".firstRow");
    const filterContinent = document.querySelector("#continent");
    let filter = "all";

    let data = database();

    searchField.addEventListener("keydown", async (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            let text = searchField.value;
            await data.addCountryAsync(text);
            searchField.value = "";
            functionDisplay();
        }
    });

    filterContinent.addEventListener("change", (e) => {
        e.preventDefault();
        filter = filterContinent.value;
        functionDisplay();
    });



    const functionDisplay = function displayAllCountries() {
        let arrayCountries = data.getAllCountries(filter);
        divCards.innerHTML = ``;
        arrayCountries.forEach(item => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("countryPreview");
            newDiv.innerHTML = `
            <img src="${item[0].flags.png}" height="140px" width="100%" />
            <div class="countryInfo">
                <h2>${item[0].name.common}</h2>
                <ul class="overviewCountries">
                    <li><strong>Population:</strong> ${item[0].population.toLocaleString()}</li>
                    <li><strong>Region:</strong> ${item[0].region}</li>
                    <li><strong>Capital:</strong> ${item[0].capital[0]}</li>
                </ul>
            </div>
        `;
            divCards.appendChild(newDiv);
        });

    };

    return {functionDisplay};

}



