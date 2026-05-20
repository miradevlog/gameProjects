const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide a phrase!");
  process.exit(1);
}

const vowels = ["a", "e", "i", "o", "u"];

const toPigLatin = (word) => {
  const lowerWord = word.toLowerCase();

  // starts with vowel
  if (vowels.includes(lowerWord[0])) {
    return word + "way";
  }

  // starts with two consonants
  if (
    word.length > 1 &&
    !vowels.includes(lowerWord[0]) &&
    !vowels.includes(lowerWord[1])
  ) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  }

  // starts with one consonant
  return word.slice(1) + word[0] + "ay";
};

const result = input
  .split(" ")
  .map(toPigLatin)
  .join(" ");

console.log(result);