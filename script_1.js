const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  const noms = [];
  const ages = [];

function Name() {
count = 0;
console.log("Voici le prénom et le NOM des entreprenneurs !")
while (count < entrepreneurs.length){
noms.push({first: entrepreneurs[count].first, last: entrepreneurs[count].last});
console.log(noms[count]);
count += 1;
}
  }

  function Age() {
    count = 0;
    console.log("Voici l'age des entreprenneurs aujourd'hui !")
    while (count < entrepreneurs.length){
    ages.push({firstName: entrepreneurs[count].first, lastName: entrepreneurs[count].last, age: (2020 - entrepreneurs[count].year)});
    console.log(ages[count]);
    count += 1;
    }
      }

