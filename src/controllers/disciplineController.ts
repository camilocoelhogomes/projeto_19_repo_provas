import { Request, Response } from 'express';
import disciplineService from '../services/disciplineService';

const getDisciplines = async (req: Request, res: Response) => {
  try {
    const result = await disciplineService.getDiscipline();
    return res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const disciplineController = {
  getDisciplines,
};

export default disciplineController;
