function traduireARN(arn) {
  let codons = arn.match(/.{1,3}/g);
  let proteine = [];

  for (let codon of codons) {
    if (["UCU","UCC","UCA","UCG","AGU","AGC"].includes(codon))
      proteine.push("Sérine");
    else if (["CCU","CCC","CCA","CCG"].includes(codon))
      proteine.push("Proline");
    else if (["UUA","UUG"].includes(codon))
      proteine.push("Leucine");
    else if (["UUU","UUC"].includes(codon))
      proteine.push("Phénylalanine");
    else if (["CGU","CGC","CGA","CGG","AGA","AGG"].includes(codon))
      proteine.push("Arginine");
    else if (["UAU","UAC"].includes(codon))
      proteine.push("Tyrosine");
  }

  return proteine.join("-");
}

console.log(traduireARN("CCGUCGUUGCGCUACAGC"));
console.log(traduireARN("CCUCGCCGGUACUUCUCG"));
