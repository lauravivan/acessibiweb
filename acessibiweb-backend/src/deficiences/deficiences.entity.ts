import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guideline {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  //   @Column()
  //   guidelines: ;
}
