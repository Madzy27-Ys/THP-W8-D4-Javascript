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

// 1. Nés dans les années 70
console.log("Entrepreneurs nés dans les années 70 :");
console.log(entrepreneurs.filter(e => e.year >= 1970 && e.year < 1980));

// 2. Prénom + nom
console.log("Liste prénom + nom :");
console.log(entrepreneurs.map(e => `${e.first} ${e.last}`));

// 3. Âge aujourd’hui
console.log("Âge qu'ils auraient aujourd'hui :");
console.log(entrepreneurs.map(e => `${e.first} ${e.last} a ${2025 - e.year} ans`));

// 4. Tri alphabétique par nom
console.log("Triés par nom de famille :");
console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));
