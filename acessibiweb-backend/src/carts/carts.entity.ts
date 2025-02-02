import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guideline {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  //   @Column()
  //   guidelines: ;

  @Column({ type: 'varchar' })
  projectName: string;

  //   @Column()
  //   user: ;
}
