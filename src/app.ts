import './setup';

import express, { Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';
import userController from './controllers/userConroller';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', (req: Request, res: Response) => res.status(200).send("I'm Alive"));
app.get('/users', userController.getUsers);

export async function init() {
  await connectDatabase();
}

export default app;
