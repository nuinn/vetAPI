import * as service from './questions.service.js';

function getRandom(req, res) {
  const randomQuestion = service.getRandom();
  return res.json(randomQuestion);
}
function getByIndex(req, res) {
  const { index } = req.params;
  const indexAsInt = parseInt(index);
  if (Number.isNaN(indexAsInt)) {
    return res.json({ error: 'Índice no es un número.' });
  }
  const question = service.getByIndex({ index: indexAsInt });
  if (!question) {
    return res.json({ error: 'Índice superior a la cantidad de preguntas.' });
  }
  return res.json(question);
}
function post(req, res) {
  const { body } = req;
  if (!Object.keys(body).length) {
    return res.json({ error: 'El cuerpo está vacío' });
  }
  const questionToInsert = service.post({ question: body });
  return res.json(questionToInsert);
}

export {
  getRandom,
  getByIndex,
  post,
};
