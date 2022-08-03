import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserMigration1659435427817 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isNullable: false,
            type: 'int',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'int',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
