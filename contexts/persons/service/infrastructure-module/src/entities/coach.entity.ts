import { Entity }     from '@mikro-orm/core'
import { Property }   from '@mikro-orm/core'
import { PrimaryKey } from '@mikro-orm/core'
import { BaseEntity } from '@mikro-orm/core'

@Entity({ tableName: 'coaches' })
export class CoachEntity extends BaseEntity {
  @PrimaryKey({ type: 'uuid' })
  id!: string

  @Property({ type: 'uuid' })
  personId!: string

  @Property()
  isHonored!: boolean

  @Property()
  createdAt!: Date
}
