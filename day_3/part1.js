const fs = require("fs");

function readInput() {
  let data = fs.readFileSync("input.txt", "utf8");
  return data;
}

// Finds all occurences of a substring in a string. sub str is mul(x,y) where x and y can be any 1-3 digit number.
function scanString(str) {
  const matches = str.match(/mul\(\d{1,3},\d{1,3}\)/g);
  return matches;
}

// function to solve expression mul(x,y)
function solveMulExp(exp) {
  const matches = exp.match(/\d{1,3},\d{1,3}/g)[0].split(",").map(Number);
  return matches[0] * matches[1]
}

function main() {
  const input = readInput();
  let result = 0;

  const strArray = scanString(input);

  strArray.forEach((exp) => {
    result += solveMulExp(exp);
  });

  return result;
}
const answer = main();
console.log(answer);
