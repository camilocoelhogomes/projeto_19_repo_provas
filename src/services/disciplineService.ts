import { getRepository } from 'typeorm';
import Discipline from '../entities/Discipline';
import { DisciplineInterfaces } from '../interfaces/disciplineInterfaces';

const getDiscipline = async (): Promise<DisciplineInterfaces[] | null> => {
  try {
    const result = await getRepository(Discipline).find({
      relations: ['teacher'],
    });
    return result;
  } catch (error) {
    return null;
  }
};

const disciplineService = {
  getDiscipline,
};

export default disciplineService;
