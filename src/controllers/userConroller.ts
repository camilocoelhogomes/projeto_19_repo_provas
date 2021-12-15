import { Request, Response } from 'express';
import userService from '../services/userService';

async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (err) {
    res.sendStatus(500);
  }
}

const userController = {
  getUsers,
};

export default userController;
