import type { FindCoachesByQuery }                  from '@persons/application-module'
import type { FindCoachesByQueryResult }            from '@persons/application-module'
import type { Coach }                               from '@persons/domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                     from '@monstrs/mikro-orm-query-builder'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'
import { EventBus }                                 from '@nestjs/cqrs'

import { CoachRepository }                          from '@persons/application-module'

import { CoachEntity }                              from '../entities/index.js'
import { CoachMapper }                              from '../mappers/index.js'

@Injectable()
export class CoachRepositoryImpl extends CoachRepository {
  constructor(
    @InjectRepository(CoachEntity)
    private readonly repository: EntityRepository<CoachEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: CoachMapper,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(coach: Coach): Promise<Coach> {
    const exists = (await this.repository.findOne({ id: coach.id })) || new CoachEntity()

    await this.em.persist(this.mapper.toPersistence(coach, exists)).flush()

    if (coach.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(coach.getUncommittedEvents())
    }

    return coach
  }

  async findById(id: string): Promise<Coach | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({
    pager,
    order,
    query,
  }: FindCoachesByQuery): Promise<FindCoachesByQueryResult> {
    const [coachs, hasNextPage] = await new MikroORMQueryBuilder<CoachEntity>(
      this.em.createQueryBuilder(CoachEntity)
    )
      .id('id', query?.id)
      .order(order)
      .pager(pager)
      .execute()

    return {
      coaches: coachs.map((coach) => this.mapper.fromPersistence(coach)),
      hasNextPage,
    }
  }
}
