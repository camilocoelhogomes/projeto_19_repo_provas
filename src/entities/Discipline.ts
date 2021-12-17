import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('discipline')
export default class Discipline {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}
