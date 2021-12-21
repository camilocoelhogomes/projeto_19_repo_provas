import { DisciplineInterfaces } from './disciplineInterfaces';
import { TeacherInterfaces } from './teacherInterfaces';

export interface TeacherDisciplineInterface {
  id: number,
  disciplineId?: number,
  teacherId?: number,
  discipline?: DisciplineInterfaces[],
  teacher?: TeacherInterfaces[]
}
