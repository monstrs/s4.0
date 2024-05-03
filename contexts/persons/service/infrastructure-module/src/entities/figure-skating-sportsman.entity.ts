import { Entity }        from '@mikro-orm/core'
import { Property }      from '@mikro-orm/core'
import { Enum }          from '@mikro-orm/core'

import { SportsmanRank } from '@persons/domain-module'

import { BaseSportsman } from './base-sportsman.entity.js'

@Entity({ discriminatorValue: 'figure-skating' })
export class FigureSkatingSportsmanEntity extends BaseSportsman {
  @Enum({ items: () => SportsmanRank, type: 'smallint', default: SportsmanRank.NOT_SPECIFIED })
  rank: SportsmanRank = SportsmanRank.NOT_SPECIFIED

  @Property({ type: 'date' })
  rankAssignDate!: Date
}
