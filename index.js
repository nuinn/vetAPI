import express from 'express';
import cors from 'cors';
import './database.js';
import apiRouter from './src/api/router.js';
import isLogged from './src/middlewares/isLogged.js';

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors({ origin: true }));
server.use(isLogged);
server.use(apiRouter);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
