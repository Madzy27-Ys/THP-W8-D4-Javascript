let phrase = prompt("Parle au bot :");

if (!phrase) {
  console.log("t'es en PLS ?");
} else if (phrase.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (phrase === phrase.toUpperCase() && phrase.match(/[A-Z]/)) {
  console.log("Pwa, calme-toi...");
} else if (phrase.endsWith("?")) {
  console.log("Ouais Ouais...");
} else {
  console.log("balek.");
}
