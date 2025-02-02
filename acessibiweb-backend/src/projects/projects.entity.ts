import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  desc: string;

  @Column({ type: 'text' })
  feedback: string;

  // @Column()
  //   guidelines: ;

  // @Column()
  //   user: ;
}
