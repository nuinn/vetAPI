import { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as usersRepository from '../users/users.repository.js';

function getToken({ userId, timeout }) {
  const payload = {
    userId,
  };
  const { TOKEN_SECRET_WORD } = process.env;
  const options = {
    expiresIn: timeout,
  };
  const token = jwt.sign(payload, TOKEN_SECRET_WORD, options);
  return token;
}

async function register({ username, password }) {
  // SALT_OR_ROUNDS_HASH must be a number, .env data is string by default
  const SALT_OR_ROUNDS_HASH = parseInt(process.env.SALT_OR_ROUNDS_HASH);
  const hashedPassword = hashSync(password, SALT_OR_ROUNDS_HASH);
  await usersRepository.create({ username, password: hashedPassword });
  const { EMAIL_TIMEOUT } = process.env;
  const token = getToken({ userId: username, timeout: EMAIL_TIMEOUT });
  return token;
}

async function login({ username, password }) {
  const user = await usersRepository.getByUsername({ username });
  let token;
  if (user && compareSync(password, user.password)) {
    if (user.confirmed) {
      const { TOKEN_TIMEOUT } = process.env;
      token = getToken({ userId: user._id, timeout: TOKEN_TIMEOUT });
    } else {
      token = 'unconfirmed';
    }
  }
  return token;
}

async function confirm({ emailToken }) {
  const { TOKEN_SECRET_WORD } = process.env;
  const payload = jwt.verify(emailToken, TOKEN_SECRET_WORD);
  const user = await usersRepository.confirm({ username: payload.userId });
  return user;
}

export {
  register,
  login,
  confirm,
};
