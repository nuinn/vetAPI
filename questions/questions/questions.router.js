import Router from 'express';
import db from './questions.js';
import * as controller from './questions.controller.js';

const router = Router();

router.use('/random', controller.getRandom);

router.get('/byIndex/:index', controller.getByIndex);

router.get('/byFilter', (req, res) => {
  const { query } = req;
  let dbCopy = [...db];
  const keys = Object.keys(query);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = query[key];
    dbCopy = dbCopy.filter((question) => question[key] === value);
  }
  res.json(dbCopy);
});

router.post('', controller.post);

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  const deleted = db.splice(index, 1);
  res.json(deleted);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  if (index === -1) {
    res.json({ message: 'Index not currently in database.' });
  }
  const { body } = req;
  const { _id } = db[index];
  db[index] = { ...body, _id };
  res.json(db[index]);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  if (index === -1) {
    res.json({ message: 'Index not currently in database.' });
  }
  const { body } = req;
  db[index] = { ...db[index], ...body, _id: db[index]._id };
  res.json(db[index]);
});

export default router;
