/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { CoachEntity }       from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { Coach }                  from '@persons/domain-module'

@Injectable()
export class CoachMapper {
  fromPersistence(entity: CoachEntity): Coach {
    const properties: Omit<ExtractProperties<Coach>, 'autoCommit'> = {
      id: entity.id,
      personId: entity.personId,
      isHonored: entity.isHonored,
      createdAt: entity.createdAt,
    }

    return Object.assign(new Coach(), properties)
  }

  toPersistence(aggregate: Coach, entity: CoachEntity): CoachEntity {
    entity.id = aggregate.id
    entity.personId = aggregate.personId
    entity.isHonored = aggregate.isHonored
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
