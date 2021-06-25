import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Tag } from './Tag';
import { User } from "./User";

@Entity('compliments')
class Compliment {
  @PrimaryColumn()
  readonly complimentsId: string;

  @Column()
  user_sender: string;

  @JoinColumn({name: 'user_sender'})
  @ManyToOne(() => User)
  userSender: string;

  @Column()
  user_receiver: string;

  @JoinColumn({name: 'user_receiver'})
  @ManyToOne(() => User)
  userReceiver: string;

  @Column()
  tag_id: string;

  @JoinColumn({name: 'tag_id'})
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.complimentsId) {
      this.complimentsId = uuid();
    }
  }
}

export { Compliment };
