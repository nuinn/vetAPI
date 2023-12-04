// import { restart } from 'nodemon';
import * as clientsService from './clients.service.js';

async function getAll(req, res) {
  const clients = await clientsService.getAll();
  res.json(clients);
  console.log(req.user);
}

// params is a required entry displayed with :number in the router
// query is an optional entry displayed with a ? (I think)
async function getByDocumentNumber(req, res) {
  const { number } = req.params;
  const requiredDocNumberLength = 9;
  if (number.length !== requiredDocNumberLength) {
    // console.log('number');
    res.status(400);
    res.json({ msg: 'Error: please enter a 9-digit document numbers' });
    return;
  }
  const client = await clientsService.getByDocumentNumber({ documentNumber: number });
  res.json(client);
}

async function getById(req, res) {
  const { id } = req.params;
  const client = await clientsService.getById({ _id: id });
  if (!client) {
    return res.json({ error: 'No such client exists.' });
  }
  return res.json(client);
}

async function getByFilter(req, res) {
  const { query } = req;
  if (!Object.keys(query).length) {
    const errorMsg = 'Please specify a value in order to filter the database.';
    res.json({ errorMsg });
    return;
  }
  const filteredClients = await clientsService.getByFilter({ query });
  res.json({ filteredClients });
}

async function post(req, res) {
  const { body } = req;
  if (!Object.keys(body).length) {
    res.status(400);
    res.json({ msg: 'Error: body cannot be empty' });
    return;
  }
  const insertedClient = await clientsService.post({ newClient: body });
  res.json(insertedClient);
}

async function put(req, res) {
  const { id } = req.params;
  const { body } = req;
  const replacedClient = await clientsService.put({ _id: id, newClient: body });
  res.json({ replacedClient });
}

async function edit(req, res) {
  const { id } = req.params;
  const { body } = req;
  const editedClient = await clientsService.edit(id, body);
  res.json(editedClient);
}

async function remove(req, res) {
  const { id } = req.params;
  const removedClient = await clientsService.remove(id);
  console.log('removed client: ', removedClient);
  res.json({ msg: 'Removed client', removedClient });
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
