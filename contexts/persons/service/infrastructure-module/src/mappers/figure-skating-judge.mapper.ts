/* eslint-disable no-param-reassign */

import type { ExtractProperties }        from '@monstrs/base-types'

import type { FigureSkatingJudgeEntity } from '../entities/index.js'

import { Injectable }                    from '@nestjs/common'

import { FigureSkatingJudge }            from '@persons/domain-module'

@Injectable()
export class FigureSkatingJudgeMapper {
  fromPersistence(entity: FigureSkatingJudgeEntity): FigureSkatingJudge {
    const properties: Omit<ExtractProperties<FigureSkatingJudge>, 'autoCommit'> = {
      id: entity.id,
      personId: entity.personId,
      rank: entity.rank,
      rankOrderDate: entity.rankOrderDate,
      createdAt: entity.createdAt,
    }

    return Object.assign(new FigureSkatingJudge(), properties)
  }

  toPersistence(
    aggregate: FigureSkatingJudge,
    entity: FigureSkatingJudgeEntity
  ): FigureSkatingJudgeEntity {
    entity.id = aggregate.id
    entity.personId = aggregate.personId
    entity.rank = aggregate.rank
    entity.rankOrderDate = aggregate.rankOrderDate
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
