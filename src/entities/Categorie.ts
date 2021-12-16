import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export default class Categorie {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

}
