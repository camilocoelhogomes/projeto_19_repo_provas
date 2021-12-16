import './setup';

import express, { Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import categorieController from './controllers/categorieController';
import disciplineController from './controllers/disciplineController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', (req: Request, res: Response) => res.status(200).send("I'm Alive"));
app.get('/categorie', categorieController.getCategorie);
app.get('/discipline', disciplineController.getDisciplines);
export async function init() {
  await connectDatabase();
}

export default app;
