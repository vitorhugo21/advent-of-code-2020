const { readFile } = require('../helpers/read-file');

const solvePuzzlePartOne = () => {
  const data = readFile(`${__dirname}/day-two-data.txt`)
    .trim()
    .split('\n');

  return data.reduce((acc, value) => {
    const parts = value.split(' ');
    const min = +parts[0].split('-')[0];
    const max = +parts[0].split('-')[1];
    const character = parts[1].split('')[0];
    const password = parts[2];

    const times = [...password].reduce((accumulator, currentCharacter) => {
      return currentCharacter === character ? accumulator + 1 : accumulator;
    }, 0);

    return times >= min && times <= max ? acc + 1 : acc;
  }, 0);
};

const solvePuzzlePartTwo = () => {
  const data = readFile(`${__dirname}/day-two-data.txt`)
    .trim()
    .split('\n');

  return data.reduce((acc, value) => {
    const parts = value.split(' ');
    const firstPosition = +parts[0].split('-')[0];
    const secondPosition = +parts[0].split('-')[1];
    const character = parts[1].split('')[0];
    const password = parts[2];

    const passwordIsValid = ([...password][firstPosition - 1] === character ||
      [...password][secondPosition - 1] === character) &&
      [...password][firstPosition - 1] !== [...password][secondPosition - 1];

    return passwordIsValid ? acc + 1 : acc;
  }, 0);
};

console.log(solvePuzzlePartOne());
console.log(solvePuzzlePartTwo());
