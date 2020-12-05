const { readFile } = require('../helpers/read-file');
const data = readFile(`${__dirname}/day-four-data.txt`).trim().split('\n\n');
const validKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const solvePuzzlePartOne = () => {
  return data.filter(passport => {
    for (let i = 0; i < validKeys.length; i++) {
      if (!passport.includes(validKeys[i])) {
        return false;
      }
    }

    return true;
  }, 0);
};

const solvePuzzlePartTwo = () => {
  const passports = solvePuzzlePartOne().map(passport => {
    return passport.split(/\s+/).reduce((acc, value) => {
      value = value.split(':');
      return {...acc, [value[0]]: value[1]};
    }, {});
  });

  const validateYearLength = (year, length) => year.toString().length === length;
  const validateYear = (year, minYear, maxYear) => year >= minYear && year <= maxYear;
  const validateHeight = (height, minHeight, maxHeight) => height >= minHeight && height <= maxHeight;
  const validateHairColor = (color) => /^#[0-9A-F]{6}$/i.test(color);
  const validateEyeColor = (color, validColors) => validColors.includes(color);
  const validatePassportID = (passportID, length) => passportID.toString().length === length;

  return passports.reduce((acc, passport) => {
    let validFields = 0;

    if (validateYearLength(passport.byr, 4) && validateYear(passport.byr, 1920, 2002)) {
      validFields++;
    }

    if (validateYearLength(passport.iyr, 4) && validateYear(passport.iyr, 2010, 2020)) {
      validFields++;
    }

    if (validateYearLength(passport.eyr, 4) && validateYear(passport.eyr, 2020, 2030)) {
      validFields++;
    }

    const heightUnit = passport.hgt.slice(-2);
    const height = passport.hgt.slice(0, -2);

    if ((heightUnit === 'cm' && validateHeight(height, 150, 193)) || (heightUnit === 'in' && validateHeight(height, 59, 76))) {
      validFields++;
    }

    if (validateHairColor(passport.hcl)) {
      validFields++;
    }

    if (validateEyeColor(passport.ecl, ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'])) {
      validFields++;
    }

    if (validatePassportID(passport.pid, 9)) {
      validFields++;
    }

    return validFields === 7 ? acc + 1 : acc;
  }, 0);
};

console.log(solvePuzzlePartOne().length);
console.log(solvePuzzlePartTwo());

