function sayMyName(name) {
  if (!name) {
    const myError = {
      code: 1,
      msg: 'Name is required',
    };
    throw new Error(JSON.stringify(myError));
  }
  console.log(name);
}

function sayMySurname(surname) {
  if (!surname) {
    throw new Error('Surname is required');
  }
  console.log(surname);
}

try {
  sayMyName();
  sayMySurname();
} catch (error) {
  console.log(error);
}
