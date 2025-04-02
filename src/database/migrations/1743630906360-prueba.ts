import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba1743630906360 implements MigrationInterface {
    name = 'Prueba1743630906360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "brand" character varying(50) NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "UQ_730b1714ac572fdcc90016ec44f" UNIQUE ("brand"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "image" character varying NOT NULL, CONSTRAINT "UQ_5f468ae5696f07da025138e38f7" UNIQUE ("name"), CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "brand"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
