const fs = require('fs');

const readFile = (fileName) => {
  return fs.readFileSync(fileName, 'utf8')
    .trim()
    .split('\n')
    .map(number => Number(number));
}

module.exports = { readFile };
