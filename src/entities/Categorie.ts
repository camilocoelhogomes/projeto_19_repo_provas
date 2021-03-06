import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categorie')
export default class Categorie {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}
