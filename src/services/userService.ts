import { getRepository } from 'typeorm';

import User from '../entities/User';

async function getUsers() {
  const users = await getRepository(User).find({
    select: ['id', 'email'],
  });

  return users;
}

const userService = {
  getUsers,
};

export default userService;
