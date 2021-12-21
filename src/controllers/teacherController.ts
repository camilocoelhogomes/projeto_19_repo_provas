import { Request, Response } from 'express';
import teacherServices from '../services/teacherServices';

const getTeacher = async (req: Request, res: Response) => {
  try {
    const result = await teacherServices.getTeacher();
    return res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const teacherController = {
  getTeacher,
};

export default teacherController;
