import { Migration } from '@mikro-orm/migrations';

export class Migration20240504090446 extends Migration {

  override async up(): Promise<void> {
    this.addSql('alter table "organizations" alter column "additional_information" type varchar(255) using ("additional_information"::varchar(255));');
    this.addSql('alter table "organizations" alter column "additional_information" drop not null;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table "organizations" alter column "additional_information" type varchar(255) using ("additional_information"::varchar(255));');
    this.addSql('alter table "organizations" alter column "additional_information" set not null;');
  }

}
