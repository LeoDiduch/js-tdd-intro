function capitalizeFirstLetters(sentence) {
  if (sentence.length > 0) {
    return sentence
      .split(" ")
      .map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  } else {
    return "";
  }
}

module.exports = capitalizeFirstLetters;
