import clientModel from './clients.model.js';

async function getAll() {
  const allClients = await clientModel.find({}).lean();
  return allClients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientModel.findOne({ 'document.number': documentNumber }).lean();
  return client;
}

async function post({ newClient }) {
  const insertedClient = await clientModel.create(newClient);
  return insertedClient;
}

async function getById({ _id: id }) {
  const client = await clientModel.find({ _id: id }).lean();
  return client;
}

async function getByFilter({ query }) {
  const filteredClients = await clientModel.find(query).lean();
  return filteredClients;
}

async function put({ _id, newClient }) {
  const replacedClient = await clientModel.findOneAndReplace({ _id }, newClient);
  return replacedClient;
}

async function edit(_id, body) {
  const updatedClient = await clientModel.findByIdAndUpdate(_id, body, {
    new: true,
  });
  return updatedClient;
}

async function remove(id) {
  const removedClient = await clientModel.findByIdAndDelete(id);
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
