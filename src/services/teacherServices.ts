import { getRepository } from 'typeorm';
import Teacher from '../entities/Teacher';

const getTeacher = async (): Promise<any> => {
  try {
    const result = await getRepository(Teacher).find({
      relations: ['teacherDiscipline', 'teacherDiscipline.discipline'],
    });
    return result.map((res) => res.getTeacher());
  } catch (error) {
    console.log(error);
    return null;
  }
};

const teacherServices = {
  getTeacher,
};

export default teacherServices;
