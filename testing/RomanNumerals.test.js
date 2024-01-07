/* eslint-disable no-import-assign */
import romanParseator from './RomanNumerals.js';
import * as parseators from './parseators.js';

// describe('description describe', () => {
//   test('description test', () => {
//     expect(2 + 3).toBe(5);
//   });
// });

function decimalToRomanMock({ splittedNumber }) {
  if (splittedNumber[0] === '1') {
    return 'I';
  }

  if (splittedNumber[0] === '2') {
    return 'II';
  }

  return '?';
}

function romanToDecimalMock({ splittedNumber }) {
  if (splittedNumber[0] === 'I') {
    return 1;
  }

  return '?';
}

beforeAll(() => {
  parseators.decimalToRoman = jest.fn().mockImplementation(decimalToRomanMock);
  parseators.romanToDecimal = jest.fn().mockImplementation(romanToDecimalMock);
});

describe('validation params tests', () => {
  test('The arg is undefined', () => {
    try {
      romanParseator();
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(0);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });

  test('The arg is an empty object', () => {
    try {
      romanParseator({});
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(1);
      expect(parsedMessage.msg).toBe('The argument must be an object that contains the numberAsString property');
    }
  });

  test('The arg is not a string', () => {
    try {
      romanParseator({ numberAsString: 1 });
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(2);
      expect(parsedMessage.msg).toBe('The numberAsString property must be a string');
    }
  });
});

describe('roman to decimal functionality', () => {
  test('"I" is passed and 1 is returned', () => {
    const decimal = romanParseator({ numberAsString: 'I' });
    expect(decimal).toBe(1);
  });
});

describe('decimal to roman functionality', () => {
  test('1 is passed and "I" is returned', () => {
    const roman = romanParseator({ numberAsString: '1' });
    expect(roman).toBe('I');
  });

  test('2 is passed and "II" is returned', () => {
    const roman = romanParseator({ numberAsString: '2' });
    expect(roman).toBe('II');
  });
});
