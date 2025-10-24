const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

// Tous empruntés au moins une fois ?
console.log("Tous empruntés au moins une fois ?");
console.log(books.every((b) => b.rented > 0));

// Le plus emprunté
console.log("Le plus emprunté :");
console.log(books.reduce((a, b) => (a.rented > b.rented ? a : b)));

// Le moins emprunté
console.log("Le moins emprunté :");
console.log(books.reduce((a, b) => (a.rented < b.rented ? a : b)));

// Livre ID 873495
console.log("Livre avec ID 873495 :");
console.log(books.find((b) => b.id === 873495));

// Supprimer ID 133712
const booksSans133712 = books.filter((b) => b.id !== 133712);

// Trier par titre
console.log("Livres triés alphabétiquement :");
console.log(booksSans133712.sort((a, b) => a.title.localeCompare(b.title)));
