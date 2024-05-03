import type { FigureSkatingContingent }  from '@common/domain-module'
import type { FigureSkatingDisciplines } from '@common/domain-module'

import { Entity }                        from '@mikro-orm/core'
import { Property }                      from '@mikro-orm/core'
import { Enum }                          from '@mikro-orm/core'

import { OrganizationState }             from '@figure-skating/domain-module'

import { BaseOrganization }              from './base-organization.entity.js'

@Entity({ discriminatorValue: 'figure-skating' })
export class FigureSkatingOrganizationEntity extends BaseOrganization {
  @Property({ type: 'jsonb', default: '[]' })
  contingent!: Array<FigureSkatingContingent>

  @Property({ type: 'jsonb', default: '[]' })
  disciplines!: Array<FigureSkatingDisciplines>

  @Enum({
    items: () => OrganizationState,
    type: 'smallint',
    default: OrganizationState.DOES_NOT_EXIST,
  })
  state: OrganizationState = OrganizationState.DOES_NOT_EXIST
}
