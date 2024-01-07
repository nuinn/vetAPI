import { decimalToRoman, romanToDecimal } from './parseators.js';

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

describe('romanToDecimal params validity tests', () => {
  test('the arg is an invalid Roman numeral', () => {
    try {
      const params = {
        splittedNumber: ['E'],
        romanLetters,
      };
      romanToDecimal(params);
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(3);
      expect(parsedMessage.msg).toBe('The entered number is not valid');
    }
  });
  test('the arg is greater than possible Roman numeral', () => {
    try {
      const params = {
        splittedNumber: ['M', 'M', 'M', 'M'],
        romanLetters,
      };
      romanToDecimal(params);
    } catch (e) {
      const parsedMessage = JSON.parse(e.message);
      expect(parsedMessage.code).toBe(4);
      expect(parsedMessage.msg).toBe('The number entered is beyond the reach of Roman Numerals');
    }
  });
});

describe('romanToDecimal functionality', () => {
  test('"I" is passed and 1 is returned', () => {
    const decimal = romanToDecimal({ splittedNumber: ['I'], romanLetters });
    expect(decimal).toBe(1);
  });
  test('"CL" is passed and 150 is returned', () => {
    const decimal = romanToDecimal({ splittedNumber: ['C', 'L'], romanLetters });
    expect(decimal).toBe(150);
  });
});

describe('decimalToRoman functionality', () => {
  test('"1" is passed and "I" is returned', () => {
    const roman = decimalToRoman({ splittedNumber: ['1'], romanLetters });
    expect(roman).toBe('I');
  });
  test('"8" is passed and "VIII" is returned', () => {
    const roman = decimalToRoman({ splittedNumber: ['8'], romanLetters });
    expect(roman).toBe('VIII');
  });
  test('"9" is passed and "IX" is returned', () => {
    const roman = decimalToRoman({ splittedNumber: ['9'], romanLetters });
    expect(roman).toBe('IX');
  });
  test('"3999" is passed and "MMMCMXCIX" is returned', () => {
    const roman = decimalToRoman({ splittedNumber: ['3', '9', '9', '9'], romanLetters });
    expect(roman).toBe('MMMCMXCIX');
  });
});
