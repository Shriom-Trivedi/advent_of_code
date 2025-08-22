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

// Solution with problem dampener i.e. if removing a single element from an unsafe report would make it safe, the report instead counts as safe.
function canArrayBeDampered(arr) {
  damperedCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let wannaBeArr = [...arr.slice(0, i), ...arr.slice(i + 1)]

    if (isOrderPresent(wannaBeArr)) {
      damperedCount += 1;
    }
  }

  return damperedCount > 0;
}

function main() {
  const input = readInput();

  let count = 0;

  input.forEach((item) => {
    let truth = isOrderPresent(item);
    if (truth) count += 1;

    if (!truth && canArrayBeDampered(item)) count += 1;
  });

  return count
}
const answer = main();
console.log(answer);
