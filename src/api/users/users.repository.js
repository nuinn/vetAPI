import userModel from './users.model.js';

async function getById({ id }) {
  const user = await userModel.findById(id).lean();
  return user;
}

async function create({ username, password }) {
  const user = await userModel.create({ username, password });
  return user;
}

async function getByUsername({ username }) {
  const user = await userModel.findOne({ username }).lean();
  return user;
}

async function confirm({ username }) {
  const user = await userModel.findOneAndUpdate({ username }, { confirmed: true });
  return user;
}

export {
  getById,
  create,
  getByUsername,
  confirm,
};
