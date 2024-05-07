import { Migration } from '@mikro-orm/migrations'

export class Migration20240504085622 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "organizations" alter column "curator_id" drop default;')
    this.addSql(
      'alter table "organizations" alter column "curator_id" type uuid using ("curator_id"::text::uuid);'
    )
    this.addSql('alter table "organizations" alter column "curator_id" drop not null;')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "organizations" alter column "curator_id" drop default;')
    this.addSql(
      'alter table "organizations" alter column "curator_id" type uuid using ("curator_id"::text::uuid);'
    )
    this.addSql('alter table "organizations" alter column "curator_id" set not null;')
  }
}
