import express from 'express';
import cors from 'cors';
import './database.js';
import swaggerUI from 'swagger-ui-express';
import docs from './docs/index.js';
import apiRouter from './src/api/router.js';
import isLogged from './src/middlewares/isLogged.js';

const server = express();
const { PORT } = process.env;

server.use(express.json());
server.use(cors({ origin: true }));
server.use(isLogged);
server.use(apiRouter);

server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
