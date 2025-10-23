function traduireARN(arn) {
  let codons = arn.match(/.{1,3}/g);
  let proteine = codons.map(codon => {
    switch (codon) {
      case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC":
        return "Sérine";
      case "CCU": case "CCC": case "CCA": case "CCG":
        return "Proline";
      case "UUA": case "UUG":
        return "Leucine";
      case "UUU": case "UUC":
        return "Phénylalanine";
      case "CGU": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
        return "Arginine";
      case "UAU": case "UAC":
        return "Tyrosine";
      default:
        return "";
    }
  });
  return proteine.join("-");
}

console.log(traduireARN("CCGUCGUUGCGCUACAGC"));
console.log(traduireARN("CCUCGCCGGUACUUCUCG"));
