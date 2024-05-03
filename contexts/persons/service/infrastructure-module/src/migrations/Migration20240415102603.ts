import { Migration } from '@mikro-orm/migrations'

export class Migration20240415102603 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "sportsmen" alter column "id" drop default;')
    this.addSql('alter table "sportsmen" alter column "id" type uuid using ("id"::text::uuid);')

    this.addSql('alter table "coaches" alter column "id" drop default;')
    this.addSql('alter table "coaches" alter column "id" type uuid using ("id"::text::uuid);')

    this.addSql('alter table "persons" alter column "id" drop default;')
    this.addSql('alter table "persons" alter column "id" type uuid using ("id"::text::uuid);')
  }

  override async down(): Promise<void> {
    this.addSql('alter table "sportsmen" alter column "id" type text using ("id"::text);')

    this.addSql('alter table "coaches" alter column "id" type text using ("id"::text);')

    this.addSql('alter table "persons" alter column "id" type text using ("id"::text);')

    this.addSql(
      'alter table "sportsmen" alter column "id" type varchar(255) using ("id"::varchar(255));'
    )

    this.addSql(
      'alter table "coaches" alter column "id" type varchar(255) using ("id"::varchar(255));'
    )

    this.addSql(
      'alter table "persons" alter column "id" type varchar(255) using ("id"::varchar(255));'
    )
  }
}
