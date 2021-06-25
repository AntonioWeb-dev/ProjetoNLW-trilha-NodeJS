import {
  Entity,
  PrimaryColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';

import { Expose } from 'class-transformer';

import { v4 as uuid } from 'uuid';

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly tagId: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'nameCustom' })
  nameCustom(): string {
    return `#${this.name}`;
  }

  constructor() {
    if (!this.tagId) {
      this.tagId = uuid();
    }
  }
}

export { Tag }
