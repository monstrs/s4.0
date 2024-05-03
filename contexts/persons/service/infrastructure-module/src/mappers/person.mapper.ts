/* eslint-disable no-param-reassign */

import type { ExtractProperties } from '@monstrs/base-types'

import type { PersonEntity }      from '../entities/index.js'

import { Injectable }             from '@nestjs/common'

import { Person }                 from '@persons/domain-module'

@Injectable()
export class PersonMapper {
  fromPersistence(entity: PersonEntity): Person {
    const properties: Omit<ExtractProperties<Person>, 'autoCommit'> = {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      patronymic: entity.patronymic,
      gender: entity.gender,
      birthday: entity.birthday,
      createdAt: entity.createdAt,
    }

    return Object.assign(new Person(), properties)
  }

  toPersistence(aggregate: Person, entity: PersonEntity): PersonEntity {
    entity.id = aggregate.id
    entity.firstName = aggregate.firstName
    entity.lastName = aggregate.lastName
    entity.patronymic = aggregate.patronymic
    entity.gender = aggregate.gender
    entity.birthday = aggregate.birthday
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
