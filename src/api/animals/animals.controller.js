import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const { query } = req;
  const animals = await animalsService.getAll(query);
  res.json(animals);
}

async function getByClientDocumentNumber(req, res) {
  const clientDocumentNumber = req.params.number;
  const animals = await animalsService.getByClientDocumentNumber({ clientDocumentNumber });
  res.json(animals);
}

async function updateByClientDocumentNumber(req, res) {
  const clientDocumentNumber = req.params.number;
  const newProperties = req.body;
  const namedParams = { clientDocumentNumber, newProperties };
  const updatedAnimals = await animalsService.updateByClientDocumentNumber(namedParams);
  res.json(updatedAnimals);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getAll,
  getByClientDocumentNumber,
  updateByClientDocumentNumber,
};
