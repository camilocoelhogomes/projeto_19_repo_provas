import { Request, Response } from 'express';
import categorieService from '../services/categorieService';

const getCategorie = async (req: Request, res: Response) => {
  try {
    const result = await categorieService.getCategories();
    return res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const categorieController = {
  getCategorie,
};

export default categorieController;
