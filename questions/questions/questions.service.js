import * as repo from './questions.repository.js';

function getRandom() {
  const index = Math.floor(Math.random() * repo.getLength());
  const question = repo.getByIndex({ index });
  return question;
}

function getLength() {
  return repo.getLength();
}

function getByIndex({ index }) {
  return repo.getByIndex({ index });
}
// una función a la que se puede añadir

// const { getLength } = repo; // la función directamente

function post({ question }) {
  return repo.post({ question });
}

export {
  getRandom,
  getLength,
  getByIndex,
  post,
};
