import './setup';

import express, { Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';

import connectDatabase from './database';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/is-live', (req: Request, res: Response) => res.status(200).send("I'm Alive"));

export async function init() {
  await connectDatabase();
}

export default app;
