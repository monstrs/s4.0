import { Entity }               from '@mikro-orm/core'
import { Enum }                 from '@mikro-orm/core'
import { PrimaryKey }           from '@mikro-orm/core'
import { Property }             from '@mikro-orm/core'
import { BaseEntity }           from '@mikro-orm/core'

import { OrganizationCategory } from '@figure-skating/domain-module'

@Entity({
  tableName: 'organizations',
  discriminatorColumn: 'kind',
  abstract: true,
})
export abstract class BaseOrganization extends BaseEntity {
  @PrimaryKey({ type: 'uuid' })
  id!: string

  @Enum()
  kind!: 'figure-skating'

  @Property()
  fullName!: string

  @Property()
  abbreviation!: string

  @Property()
  websiteName!: string

  @Property()
  listName!: string

  @Property({ type: 'date' })
  foundingDate!: Date

  @Enum({
    items: () => OrganizationCategory,
    type: 'smallint',
    default: OrganizationCategory.OTHER,
  })
  category: OrganizationCategory = OrganizationCategory.OTHER

  @Property({ type: 'uuid', nullable: true })
  curatorId?: string

  @Property({ type: 'uuid' })
  cityId!: string

  @Property()
  address!: string

  @Property()
  phone!: string

  @Property()
  inn!: string

  @Property({ nullable: true })
  additionalInformation?: string

  @Property({ type: 'uuid' })
  applicantId!: string

  @Property()
  applicantJobTitle!: string

  @Property()
  applicantPhone!: string

  @Property({ type: 'jsonb', default: '[]' })
  responsible!: Array<string>

  @Property({ type: 'uuid' })
  charterId!: string

  @Property({ type: 'uuid' })
  registrationCertificateId!: string

  @Property()
  createdAt!: Date
}
