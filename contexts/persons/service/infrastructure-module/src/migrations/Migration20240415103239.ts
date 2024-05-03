import { Migration } from '@mikro-orm/migrations'

export class Migration20240415103239 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "judges" ("id" uuid not null, "kind" text check ("kind" in (\'figure-skating\')) not null, "person_id" uuid not null, "created_at" timestamptz not null, "rank" smallint null default 0, "rank_order_date" date null, constraint "judges_pkey" primary key ("id"));'
    )
    this.addSql('create index "judges_kind_index" on "judges" ("kind");')
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "judges" cascade;')
  }
}
