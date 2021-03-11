import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import routes from './routes';
import { globalExceptionHandler } from './erros/AppError';

const app = express();

app.use(express.json());

app.use(routes);

app.use(globalExceptionHandler);

app.listen(3333, () => {
  console.log('Server Node Ts Boilerplate started on port 3333');
});
