import { decimalToRoman, romanToDecimal } from './parseators.js';

function romanParseator(params) {
  if (!params) {
    const myError = {
      code: 0,
      msg: 'The argument must be an object that contains the numberAsString property',
    };

    throw new Error(JSON.stringify(myError));
  }
  const { numberAsString } = params;

  if (!numberAsString) {
    const myError = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };

    throw new Error(JSON.stringify(myError));
  }

  if (typeof numberAsString !== 'string') {
    const myError = {
      code: 2,
      msg: 'The numberAsString property must be a string',
    };

    throw new Error(JSON.stringify(myError));
  }

  const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  const numberAsInteger = parseInt(numberAsString, 10);
  // if (numberAsInteger > 3999) {
  //   const myError = {
  //     code: 4,
  //     msg: 'The number entered is beyond the reach of Roman Numerals',
  //   };

  //   throw new Error(JSON.stringify(myError));
  // }
  const isRomanString = Number.isNaN(numberAsInteger);

  const splittedNumber = numberAsString.split('');

  if (isRomanString) {
    const decimalNumber = romanToDecimal({ splittedNumber, romanLetters });
    return decimalNumber;
  }

  const romanNumber = decimalToRoman({ splittedNumber, romanLetters });
  return romanNumber;
}

// console.log(romanParseator({ numberAsString: 'MMMM' }));

export default romanParseator;
