import jwt from 'jsonwebtoken';
import * as userService from '../api/users/users.service.js';

function unauthorized(res) {
  res.status(401);
  res.json({ msg: 'Unauthorised' });
}

function isLogged(req, res, next) {
  const publicRoutes = [
    '/auth/login',
    '/auth/register',
  ];
  const isPublicRoute = publicRoutes.some((publicRoute) => req.url.startsWith(publicRoute));
  if (isPublicRoute) {
    next();
    return;
  }
  const token = req.headers.authorization;
  if (!token) {
    unauthorized(res);
    return;
  }
  const secretWord = 'isASecret';
  // .verify expects three parameters: the token, the secretWord and a callback with two parameters:
  // first the function in case of error and secondly the function in case of success.
  jwt.verify(token, secretWord, async (error, payload) => {
    if (error) {
      console.error('jwt error');
      unauthorized(res);
      return;
    }
    const user = await userService.getById({ id: payload.userId });
    req.user = user;
    next();
  });
}

export default isLogged;
