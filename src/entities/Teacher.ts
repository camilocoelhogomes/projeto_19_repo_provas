import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import DisciplineTeacher from './DisciplineTeacher';
import { TeacherDisciplineInterface } from '../interfaces/teacherDisciplineInterface';

@Entity('teacher')
export default class Teacher {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @OneToMany(() => DisciplineTeacher, (disciplineTeacher) => disciplineTeacher.teacher)
    teacherDiscipline: TeacherDisciplineInterface[];

  getTeacher() {
    return {
      id: this.id,
      name: this.name,
      discipline: this.teacherDiscipline.map((td) => td.discipline),
    };
  }
}
