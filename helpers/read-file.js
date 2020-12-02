const fs = require('fs');

exports.readFile = (filename) => {
  return fs.readFileSync(filename, 'utf8');
};
