import { Migration } from '@mikro-orm/migrations'

export class Migration20240423105646 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      'create table "organizations" ("id" uuid not null, "kind" text check ("kind" in (\'figure-skating\')) not null, "full_name" varchar(255) not null, "abbreviation" varchar(255) not null, "website_name" varchar(255) not null, "list_name" varchar(255) not null, "founding_date" date not null, "category" smallint not null default 3, "curator_id" uuid not null, "city_id" uuid not null, "address" varchar(255) not null, "phone" varchar(255) not null, "inn" varchar(255) not null, "additional_information" varchar(255) not null, "applicant_id" uuid not null, "applicant_job_title" varchar(255) not null, "applicant_phone" varchar(255) not null, "responsible" jsonb not null default \'[]\', "charter_id" uuid not null, "registration_certificate_id" uuid not null, "created_at" timestamptz not null, "contingent" jsonb null default \'[]\', "disciplines" jsonb null default \'[]\', "state" smallint null default 6, constraint "organizations_pkey" primary key ("id"));'
    )
    this.addSql('create index "organizations_kind_index" on "organizations" ("kind");')
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  override async down(): Promise<void> {}
}
