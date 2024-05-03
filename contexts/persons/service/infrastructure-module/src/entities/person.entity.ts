import { Entity }     from '@mikro-orm/core'
import { Property }   from '@mikro-orm/core'
import { PrimaryKey } from '@mikro-orm/core'
import { BaseEntity } from '@mikro-orm/core'
import { Enum }       from '@mikro-orm/core'

import { Gender }     from '@persons/domain-module'

@Entity({ tableName: 'persons' })
export class PersonEntity extends BaseEntity {
  @PrimaryKey({ type: 'uuid' })
  id!: string

  @Property()
  firstName!: string

  @Property()
  lastName!: string

  @Property()
  patronymic!: string

  @Property({ type: 'date' })
  birthday!: Date

  @Enum({ items: () => Gender, type: 'smallint', default: Gender.MALE })
  gender: Gender = Gender.MALE

  @Property()
  createdAt!: Date
}
