import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { AppDataSource } from './database/data-source';
import { routes } from './routes';

import './shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

AppDataSource.initialize()
  .then(async () => {
    app.listen(3333, () => console.log("App está rodando!"));
  })
  .catch((error) => console.log(error));