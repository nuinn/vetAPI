import romanParseator from './RomanNumerals.js';

const tests = [];

function test1() {
  const response = romanParseator({ numberAsString: '26' });
  const expectedResponse = 'XXVI';
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test1();

function test2() {
  try {
    romanParseator(26);
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test2();

function test3() {
  const response = romanParseator({ numberAsString: 'MMX' });
  const expectedResponse = 2010;
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test3();

function test4() {
  try {
    romanParseator({ numberAsString: 267 });
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 2,
      msg: 'The numberAsString property must be a string',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test4();

function test5() {
  try {
    romanParseator({ numberAsString: 'XCE' });
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 3,
      msg: 'The entered number is not valid ',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test5();

function test6() {
  const response = romanParseator({ numberAsString: '3999' });
  const expectedResponse = 'MMMCMXCIX';
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test6();

function test7() {
  const response = romanParseator({ numberAsString: '0' });
  const expectedResponse = '';
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test7();

function test8() {
  try {
    romanParseator({ numberAsString: '' });
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 1,
      msg: 'The argument must be an object that contains the numberAsString property',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test8();

function test9() {
  const response = romanParseator({ numberAsString: 'III' });
  const expectedResponse = 3;
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test9();

function test10() {
  try {
    romanParseator({ numberAsString: 'iii' });
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 3,
      msg: 'The entered number is not valid ',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test10();

function test11() {
  const response = romanParseator({ numberAsString: 'IX' });
  const expectedResponse = 9;
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test11();

function test12() {
  const response = romanParseator({ numberAsString: 'MMMCMXLIX' });
  const expectedResponse = 3949;
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test12();

function test13() {
  const response = romanParseator({ numberAsString: '3333' });
  const expectedResponse = 'MMMCCCXXXIII';
  const isPass = response === expectedResponse;
  return tests.push(isPass);
}
test13();

function test14() {
  try {
    romanParseator({ numberAsString: 'X X' });
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 3,
      msg: 'The entered number is not valid ',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test14();

function test15() {
  try {
    romanParseator({ numberAsString: '4000' });
  } catch (e) {
    const response = JSON.parse(e.message);
    const expectedResponse = {
      code: 4,
      msg: 'The number entered is beyond the reach of Roman Numerals',
    };
    const isStatusPass = response.code === expectedResponse.code;
    const isMessagePass = response.msg === expectedResponse.msg;
    const isTestPass = isStatusPass && isMessagePass;
    tests.push(isTestPass);
  }
}
test15();

// ------------------------ SUMMARY ------------------------
const failedTests = tests.filter((test) => !test);
if (!failedTests.length) {
  console.log(`Congratulations! All ${tests.length} tests passed ✅`);
} else {
  console.log('Oooooh! Your code sucks 🤢');
  tests.forEach((test, index) => {
    if (!test) {
      console.log(`The test number ${index + 1} failed ❌`);
    }
  });
}
