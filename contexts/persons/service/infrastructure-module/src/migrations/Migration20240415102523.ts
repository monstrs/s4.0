import { Migration } from '@mikro-orm/migrations'

export class Migration20240415102523 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "coaches" ("id" varchar(255) not null, "person_id" uuid not null, "is_honored" boolean not null, "created_at" timestamptz not null, constraint "coaches_pkey" primary key ("id"));'
    )
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "coaches" cascade;')
  }
}
