const { readFile } = require("../helpers/read-file");
const data = readFile(`${__dirname}/day-six-data.txt`).trim().split("\n\n");

const solvePuzzlePartOne = () => {
  return data
    .map((personAnswers) => personAnswers.split("\n"))
    .reduce((acc, value) => {
      if (value.length > 1) {
        value = value
          .reduce((accumulator, currentValue) => {
            return [...new Set([...accumulator, ...currentValue])];
          }, [])
          .join("");
      }

      acc.push(Array.isArray(value) ? value[0].toString() : value);

      return acc;
    }, []);
};

const solvePuzzlePartTwo = () => {
  return data
    .map((personAnswers) => personAnswers.split("\n"))
    .map((personAnswers) => {
      if (personAnswers.length === 1) return personAnswers.toString().length;

      const length = personAnswers.length;
      const splittedAnswers = personAnswers
        .map((answers) => answers.split(""))
        .reduce((acc, value) => [...acc, ...value], [])
        .join("");

      let letters = {};

      for (let c of splittedAnswers) {
        if (letters[c]) {
          letters[c]++;
        } else {
          letters[c] = 1;
        }
      }

      return Object.keys(letters).filter((key) => letters[key] === length)
        .length;
    });
};

console.log(solvePuzzlePartOne().reduce((acc, value) => acc + value.length, 0));
console.log(solvePuzzlePartTwo().reduce((acc, value) => acc + value, 0));
