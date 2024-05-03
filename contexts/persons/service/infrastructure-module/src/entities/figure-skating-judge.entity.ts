import { Entity }    from '@mikro-orm/core'
import { Property }  from '@mikro-orm/core'
import { Enum }      from '@mikro-orm/core'

import { JudgeRank } from '@persons/domain-module'

import { BaseJudge } from './base-judge.entity.js'

@Entity({ discriminatorValue: 'figure-skating' })
export class FigureSkatingJudgeEntity extends BaseJudge {
  @Enum({
    items: () => JudgeRank,
    type: 'smallint',
    default: JudgeRank.SPORTS_JUDGE_THIRD_CATEGORY,
  })
  rank: JudgeRank = JudgeRank.SPORTS_JUDGE_THIRD_CATEGORY

  @Property({ type: 'date' })
  rankOrderDate!: Date
}
