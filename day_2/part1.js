const fs = require("fs");

function readInput() {
  let data = fs.readFileSync("input.txt", "utf8");

  // convert data to array of arrays.
  data = data.trim().split(/\r\n/);

  let result = [];
  for (let i = 0; i < data.length; i++) {
    const tempArr = data[i].split(" ");
    let tempRes = [];

    for (let j = 0; j < tempArr.length; j++) {
      tempRes.push(parseInt(tempArr[j]));
    }

    result.push(tempRes);
  }

  return result;
}

function isOrderPresent(arr) {
  if (arr[0] === arr[1]) return false;

  const sign = arr[0] < arr[1] ? "asc" : "desc";

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];

    if (sign === "asc") {
      if (diff <= 0 || diff > 3) return false;
    } else {
      if (diff >= 0 || diff < -3) return false;
    }
  }

  return true;
}

function main() {
  const input = readInput();

  let count = 0;

  input.forEach((item) => {
    let truth = isOrderPresent(item);
    if (truth) count += 1;
  });

  return count;
}
const answer = main();
console.log(answer);
