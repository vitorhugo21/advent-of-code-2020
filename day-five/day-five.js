const { readFile } = require('../helpers/read-file');
const data = readFile(`${__dirname}/day-five-data.txt`).trim().split('\n');

const solvePuzzlePartOne = () => {
  return data.map((seat) => {
    return seat.split('').reduce((acc, value) =>{
      return acc = (acc << 1) + (((value =='B')||(value =='R')) ? 1 : 0);
    }, 0);
  }).sort((a, b) => a - b);
};

const sortedSeats = solvePuzzlePartOne();

const solvePuzzlePartTwo = () => {
  for (let i = 0; i < sortedSeats.length - 1; i++) {
    if (sortedSeats[i + 1] - sortedSeats[i] === 2) {
      return sortedSeats[i] + 1;
    }
  }
}

console.log(sortedSeats[sortedSeats.length - 1]);
console.log(solvePuzzlePartTwo());
