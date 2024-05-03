/* eslint-disable no-param-reassign */

import type { ExtractProperties }            from '@monstrs/base-types'

import type { FigureSkatingSportsmanEntity } from '../entities/index.js'

import { Injectable }                        from '@nestjs/common'

import { FigureSkatingSportsman }            from '@persons/domain-module'

@Injectable()
export class FigureSkatingSportsmanMapper {
  fromPersistence(entity: FigureSkatingSportsmanEntity): FigureSkatingSportsman {
    const properties: Omit<ExtractProperties<FigureSkatingSportsman>, 'autoCommit'> = {
      id: entity.id,
      personId: entity.personId,
      rank: entity.rank,
      rankAssignDate: entity.rankAssignDate,
      createdAt: entity.createdAt,
    }

    return Object.assign(new FigureSkatingSportsman(), properties)
  }

  toPersistence(
    aggregate: FigureSkatingSportsman,
    entity: FigureSkatingSportsmanEntity
  ): FigureSkatingSportsmanEntity {
    entity.id = aggregate.id
    entity.personId = aggregate.personId
    entity.rank = aggregate.rank
    entity.rankAssignDate = aggregate.rankAssignDate
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
