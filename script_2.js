function factorielle(n) {
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log("Le résultat est : " + factorielle(nombre));
