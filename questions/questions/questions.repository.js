import db from './questions.js';

function getByIndex({ index }) {
  return db[index];
}

function getLength() {
  return db.length;
}

function post({ question }) {
  const length = db.push(question);
  const lastIndex = length - 1;
  return db[lastIndex];
}

export { getByIndex, getLength, post };
