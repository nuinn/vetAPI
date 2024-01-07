import * as usersService from './users.service.js';

async function getById(req, res) {
  const { id } = req.params;
  const user = await usersService.getById({ id });
  if (!user) {
    res.status(404);
    res.json({ error: 'No such user exists.' });
    return;
  }
  res.json({ msg: 'User successfully fetched', user });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getById,
};
