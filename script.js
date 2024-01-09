"use strict";
/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
Get all the countries from Asia continent /region using Filter function
Get all the countries with a population of less than 2 lakhs using Filter function
Print the following details name, capital, flag, using forEach function
Print the total population of countries using reduce function
Print the country that uses US dollars as currency.
*/

const getData = async function () {
  const fetchedData = await fetch("https://restcountries.com/v3.1/all");
  const readableData = await fetchedData.json();
  return readableData;
};

(async function () {
  const returnedData = await getData();
  console.log(returnedData);

  //////// Asia Countries
  const AsiaCountries = returnedData.filter((e) => {
    return e.continents[0] == "Asia";
  });
  console.log(AsiaCountries);

  ///////Population Below 2lakhs
  const below2Lakhs = returnedData.filter((e) => {
    return e.population < 200000;
  });
  console.log(below2Lakhs);

  ///////Print Name,Capital,Flag
  returnedData.forEach((element) => {
    console.log(
      `Country name is ${element.name.common} Flag : ${element.flag} Capital : ${element.capital?.[0]}`
    );
  });

  /////////Total Population
  const totalPopulation = returnedData
    .map((e) => {
      return e.population;
    })
    .reduce((acc, cur) => acc + cur);
  console.log(totalPopulation);
})();
