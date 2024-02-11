// Kata: https://www.codewars.com/kata/57a6633153ba33189e000074

const orderedCount = function (text) {
  const arr = [...new Set(text)];
  return arr.map((char) => [char, text.split(char).length - 1]);
};

orderedCount("abracadabra");
