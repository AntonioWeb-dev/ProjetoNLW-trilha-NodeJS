import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {
  @PrimaryColumn()
  readonly userId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Exclude()
  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.userId) {
      this.userId = uuid();
    }
  }
}

export { User };
