import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class tags1624477607171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'tags',
          columns: [
            {
              name: 'tagId',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            }
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('tags');
    }

}
