import { getRepository } from 'typeorm';
import Categorie from '../entities/Categorie';
import { CategorieInterfaces } from '../interfaces/categorieInterfaces';

const getCategories = async (): Promise<CategorieInterfaces[] | null> => {
  try {
    const result = await getRepository(Categorie).find();
    return result;
  } catch (error) {
    return null;
  }
};

const categorieService = {
  getCategories,
};

export default categorieService;
