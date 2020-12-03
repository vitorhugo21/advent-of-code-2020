const { readFile } = require('../helpers/read-file');
const data = readFile(`${__dirname}/day-three-data.txt`).trim().split('\n');

const solvePuzzlePartOne = (stepsRight, stepsDown) => {
  let row = stepsDown;
  let col = stepsRight;
  let treeCount = 0;

  while (row < data.length) {
    if (col >= data[row].length) {
      col -= data[row].length;
    }

    if (data[row][col] === '#') {
      treeCount++;
    }

    row += stepsDown;
    col += stepsRight;
  }

  return treeCount;
}

const solvePuzzlePartTwo = () => {
  const slopeOne = solvePuzzlePartOne(1, 1);
  const slopeTwo = solvePuzzlePartOne(3, 1);
  const slopeThree = solvePuzzlePartOne(5, 1);
  const slopeFour = solvePuzzlePartOne(7, 1);
  const slopeFive = solvePuzzlePartOne(1, 2);

  return slopeOne * slopeTwo * slopeThree * slopeFour * slopeFive;
};

console.log(solvePuzzlePartOne(3, 1));
console.log(solvePuzzlePartTwo());
