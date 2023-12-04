import * as animalsRepository from './animals.repository.js';
import * as clientsService from '../clients/clients.service.js';

async function getAll(query) {
  const allAnimals = await animalsRepository.getAll(query);
  return allAnimals;
}

async function getByClientDocumentNumber({ clientDocumentNumber }) {
  const client = await clientsService.getByDocumentNumber({ documentNumber: clientDocumentNumber });
  const animals = await animalsRepository.getByClientId({ clientId: client._id });
  return animals;
}

async function updateByClientDocumentNumber({ clientDocumentNumber, newProperties }) {
  const client = await clientsService.getByDocumentNumber({ documentNumber: clientDocumentNumber });
  const namedParams = { clientId: client._id, newProperties };
  const updatedAnimals = await animalsRepository.updateByClientId(namedParams);
  return updatedAnimals;
}

export {
  getAll,
  getByClientDocumentNumber,
  updateByClientDocumentNumber,
};
