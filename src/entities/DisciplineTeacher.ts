import {
  Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { DisciplineInterfaces } from '../interfaces/disciplineInterfaces';
import { TeacherInterfaces } from '../interfaces/teacherInterfaces';
import Discipline from './Discipline';
import Teacher from './Teacher';

@Entity('discipline_teacher')
export default class DisciplineTeacher {
  @PrimaryGeneratedColumn()
    id: number;

  @ManyToOne(() => Discipline, (dicipline: Discipline) => dicipline.id)
  @JoinColumn({ name: 'id_discipline' })
    discipline: DisciplineInterfaces[];

  @ManyToOne(() => Teacher, (teacher: Teacher) => teacher.id)
  @JoinColumn({ name: 'id_teacher' })
    teacher: TeacherInterfaces[];
}
