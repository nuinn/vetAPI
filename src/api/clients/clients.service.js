import * as clientsRepository from './clients.repository.js';

async function getAll() {
  const allClients = await clientsRepository.getAll();
  return allClients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientsRepository.getByDocumentNumber({ documentNumber });
  return client;
}

async function post({ newClient }) {
  const insertedClient = await clientsRepository.post({ newClient });
  return insertedClient;
}

async function getById({ _id: id }) {
  const client = await clientsRepository.getById({ _id: id });
  return client;
}

async function getByFilter({ query }) {
  const filteredClients = await clientsRepository.getByFilter({ query });
  return filteredClients;
}

async function put({ _id, newClient }) {
  const replacedClient = await clientsRepository.put({ _id, newClient });
  return replacedClient;
}

async function edit(id, body) {
  const editedClient = await clientsRepository.edit(id, body);
  return editedClient;
}

async function remove(id) {
  const removedClient = await clientsRepository.remove(id);
  return removedClient;
}

export {
  getAll,
  getByDocumentNumber,
  post,
  getById,
  getByFilter,
  put,
  edit,
  remove,
};
