import { Entity }     from '@mikro-orm/core'
import { Enum }       from '@mikro-orm/core'
import { PrimaryKey } from '@mikro-orm/core'
import { Property }   from '@mikro-orm/core'

@Entity({
  tableName: 'sportsmen',
  discriminatorColumn: 'kind',
  abstract: true,
})
export abstract class BaseSportsman {
  @PrimaryKey({ type: 'uuid' })
  id!: string

  @Enum()
  kind!: 'figure-skating'

  @Property({ type: 'uuid' })
  personId!: string

  @Property()
  createdAt!: Date
}
