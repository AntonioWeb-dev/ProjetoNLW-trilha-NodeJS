import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addColumnPasswordAtUsers1624492108659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'users',
        new TableColumn({
          name: 'password',
          type: 'varchar',
          isNullable: true,
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users', 'password');
    }

}
