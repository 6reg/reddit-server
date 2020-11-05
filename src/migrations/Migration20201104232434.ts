import { Migration } from '@mikro-orm/migrations';

export class Migration20201104232434 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" drop column "created_at";');
    this.addSql('alter table "post" drop column "updated_at";');
    this.addSql(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now())`);
  }

}
