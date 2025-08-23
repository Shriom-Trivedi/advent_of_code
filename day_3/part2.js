const fs = require("fs");

function readInput() {
  let data = fs.readFileSync("input.txt", "utf8");
  return data;
}

// Finds all occurences of a substring in a string. sub str is mul(x,y) where x and y can be any 1-3 digit number.
// In part 2 Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.
function scanString(str) {
  let regex = /don't|do|mul\(\d{1,3},\d{1,3}\)/g;
  let active = true;
  let result = [];

  while ((match = regex.exec(str)) !== null) {
    if (match[0] === "don't") active = false;
    else if (match[0] === "do") active = true;
    else if (active && match[0].startsWith("mul")) result.push(match[0]);
  }

  return result;
}

// function to solve expression mul(x,y)
function solveMulExp(exp) {
  const matches = exp
    .match(/\d{1,3},\d{1,3}/g)[0]
    .split(",")
    .map(Number);
  return matches[0] * matches[1];
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
