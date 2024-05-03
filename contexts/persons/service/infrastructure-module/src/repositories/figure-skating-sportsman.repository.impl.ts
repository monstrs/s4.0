import type { FindFigureSkatingSportsmenByQuery }       from '@persons/application-module'
import type { FindFigureSkatingSportsmenByQueryResult } from '@persons/application-module'
import type { FigureSkatingSportsman }                  from '@persons/domain-module'

import { EntityRepository }                             from '@mikro-orm/core'
import { EntityManager }                                from '@mikro-orm/core'
import { InjectRepository }                             from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager }     from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                         from '@monstrs/mikro-orm-query-builder'
import { Injectable }                                   from '@nestjs/common'
import { Inject }                                       from '@nestjs/common'
import { EventBus }                                     from '@nestjs/cqrs'

import { FigureSkatingSportsmanRepository }             from '@persons/application-module'

import { FigureSkatingSportsmanEntity }                 from '../entities/index.js'
import { FigureSkatingSportsmanMapper }                 from '../mappers/index.js'

@Injectable()
export class FigureSkatingSportsmanRepositoryImpl extends FigureSkatingSportsmanRepository {
  constructor(
    @InjectRepository(FigureSkatingSportsmanEntity)
    private readonly repository: EntityRepository<FigureSkatingSportsmanEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: FigureSkatingSportsmanMapper,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(sportsman: FigureSkatingSportsman): Promise<FigureSkatingSportsman> {
    const exists =
      (await this.repository.findOne({ id: sportsman.id })) || new FigureSkatingSportsmanEntity()

    await this.em.persist(this.mapper.toPersistence(sportsman, exists)).flush()

    if (sportsman.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(sportsman.getUncommittedEvents())
    }

    return sportsman
  }

  async findById(id: string): Promise<FigureSkatingSportsman | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({
    pager,
    order,
    query,
  }: FindFigureSkatingSportsmenByQuery): Promise<FindFigureSkatingSportsmenByQueryResult> {
    const [sportsmen, hasNextPage] = await new MikroORMQueryBuilder<FigureSkatingSportsmanEntity>(
      this.em.createQueryBuilder(FigureSkatingSportsmanEntity)
    )
      .id('id', query?.id)
      .order(order)
      .pager(pager)
      .execute()

    return {
      sportsmen: sportsmen.map((sportsman) => this.mapper.fromPersistence(sportsman)),
      hasNextPage,
    }
  }
}
