import { getRepository } from "typeorm";

import User from "../../src/entities/Categorie";

export async function clearDatabase () {
  await getRepository(User).delete({});
}
