import { Migration } from '@mikro-orm/migrations'

export class Migration20240415101235 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "sportsmen" ("id" varchar(255) not null, "kind" text check ("kind" in (\'figure-skating\')) not null, "person_id" uuid not null, "created_at" timestamptz not null, "rank" smallint null default 0, "rank_assign_date" date null, constraint "sportsmen_pkey" primary key ("id"));'
    )
    this.addSql('create index "sportsmen_kind_index" on "sportsmen" ("kind");')

    this.addSql(
      'create table "persons" ("id" varchar(255) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "patronymic" varchar(255) not null, "birthday" date not null, "gender" smallint not null default 0, "created_at" timestamptz not null, constraint "persons_pkey" primary key ("id"));'
    )
  }

  override async down(): Promise<void> {}
}
