import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1643144234482 implements MigrationInterface {
    name = 'migration1643144234482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "login" integer NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "columns" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                "boardIdId" uuid,
                CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "task" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                "description" character varying NOT NULL,
                "userId" uuid NOT NULL,
                "columnId" uuid,
                "boardId" uuid NOT NULL,
                CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "board" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "columns" text array NOT NULL,
                CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "content" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "order" integer NOT NULL,
                CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "columns"
            ADD CONSTRAINT "FK_4e94104681a6311ee9c0fbc2865" FOREIGN KEY ("boardIdId") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD CONSTRAINT "FK_f56fe6f2d8ab0b970f764bd601b" FOREIGN KEY ("columnId") REFERENCES "columns"("id") ON DELETE
            SET NULL ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "task"
            ADD CONSTRAINT "FK_d88edac9d7990145ff6831a7bb3" FOREIGN KEY ("boardId") REFERENCES "board"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "task" DROP CONSTRAINT "FK_d88edac9d7990145ff6831a7bb3"
        `);
        await queryRunner.query(`
            ALTER TABLE "task" DROP CONSTRAINT "FK_f56fe6f2d8ab0b970f764bd601b"
        `);
        await queryRunner.query(`
            ALTER TABLE "task" DROP CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9"
        `);
        await queryRunner.query(`
            ALTER TABLE "columns" DROP CONSTRAINT "FK_4e94104681a6311ee9c0fbc2865"
        `);
        await queryRunner.query(`
            DROP TABLE "content"
        `);
        await queryRunner.query(`
            DROP TABLE "board"
        `);
        await queryRunner.query(`
            DROP TABLE "task"
        `);
        await queryRunner.query(`
            DROP TABLE "columns"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
