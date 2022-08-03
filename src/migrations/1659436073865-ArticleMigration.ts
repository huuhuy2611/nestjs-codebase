import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ArticleMigration1659436073865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'article',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            isNullable: false,
            type: 'int',
            isGenerated: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'content',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('article');
  }
}
