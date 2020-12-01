const { readFile } = require('./read-file');

const fileName = 'report-repair-data.txt';

const calcPuzzle =  () => {
  const data = readFile(fileName);

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      for (let k = j + 1; k < data.length; k++) {
        if (data[i] + data[j] + data[k] === 2020) {
          return [data[i], data[j], data[k]];
        }
      }
    }
  }

  return null;
}

const answer = () => {
  const numbers = calcPuzzle();

  if (numbers) {
    const sum = numbers.reduce((acc, value) => acc + value);
    const multiply = numbers.reduce((acc, value) => acc * value);

    console.log(sum);
    console.log(multiply);
  } else {
    console.error('Not Found');
  }
}

answer();
