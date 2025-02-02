import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guideline {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  desc: string;

  @Column({ type: 'text' })
  code: string;

  @Column({ type: 'varchar' })
  image: string;

  //   @Column()
  //   deficiences: ;

  // APPROVED | PENDING | REJECTED | DELETED
  @Column({ type: 'varchar' })
  statusCode: string;

  @Column({ type: 'varchar' })
  statusMsg: string;

  //   @Column()
  //   user: ;

  @Column({ type: 'boolean' })
  isRequest: boolean;
}
