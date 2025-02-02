import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

abstract class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar' })
  login: string;

  @Column({ type: 'varchar' })
  password: string;
}

@Entity()
export class UserAdmin extends User {}

@Entity()
export class UserCommon extends User {
  @Column({ type: 'varchar' })
  username: string;

  //   @Column()
  //   projects: ;

  // @Column()
  //   guidelines: ;

  // @Column()
  //   cart: ;
}
