const fs = require("fs");

function main() {
  const data = fs.readFileSync("ip.txt", "utf8");
  let sum = 0;

  const lines = data.trim().split(/\r?\n/);

  let first = [];
  let second = [];

  for (let line of lines) {
    const [a, b] = line.trim().split(/\s+/).map(Number);
    first.push(a);
    second.push(b);
  }

  first.sort();
  second.sort();

  for (let i = 0; i < first.length; i++) {
    sum += Math.abs(first[i] - second[i]);
  }
  console.log(sum);
}
// main();

function part2() {
  const dick = {};
  const data = fs.readFileSync("ip.txt", "utf8");
  let sum = 0;

  const lines = data.trim().split(/\r?\n/);

  let first = [];
  let second = [];

  for (let line of lines) {
    const [a, b] = line.trim().split(/\s+/).map(Number);
    first.push(a);
    second.push(b);
  }

  for (let i = 0; i < first.length; i++) {
    dick[first[i]] = 0;
  }

  for (let i = 0; i < second.length; i++) {
    if (dick[second[i]] !== undefined) dick[second[i]] = dick[second[i]] + 1;
  }

  for (const [key, value] of Object.entries(dick)) {
    sum += key * value;
  }
  console.log(sum);
}
part2();
