import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { TeacherInterfaces } from '../interfaces/teacherInterfaces';
import DisciplineTeacher from './DisciplineTeacher';

@Entity('discipline')
export default class Discipline {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @OneToMany(() => DisciplineTeacher, (disciplineTeacher) => disciplineTeacher.discipline)
    teacherDiscipline: TeacherInterfaces[];
}
