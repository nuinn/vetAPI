import animalsModel from './animals.model.js';

async function getAll(query) {
  const animals = await animalsModel
    .find(query)
    .populate({ path: 'clientId', select: 'firstName surname tel -_id' })
    // select: 'firstName surname -_id'
    .lean();
  return animals;
}

async function getByClientId({ clientId }) {
  const animals = await animalsModel.find({ clientId }).lean();
  return animals;
}

async function updateByClientId({ clientId, newProperties }) {
  await animalsModel.updateMany({ clientId }, newProperties);
  const clientIdForSearch = newProperties.clientId || clientId;
  const updatedAnimals = await animalsModel.find({ clientId: clientIdForSearch }).lean();
  return updatedAnimals;
}

export {
  getAll,
  getByClientId,
  updateByClientId,
};
