import type { FindFigureSkatingJudgesByQuery }       from '@persons/application-module'
import type { FindFigureSkatingJudgesByQueryResult } from '@persons/application-module'
import type { FigureSkatingJudge }                   from '@persons/domain-module'

import { EntityRepository }                          from '@mikro-orm/core'
import { EntityManager }                             from '@mikro-orm/core'
import { InjectRepository }                          from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager }  from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                      from '@monstrs/mikro-orm-query-builder'
import { Injectable }                                from '@nestjs/common'
import { Inject }                                    from '@nestjs/common'
import { EventBus }                                  from '@nestjs/cqrs'

import { FigureSkatingJudgeRepository }              from '@persons/application-module'

import { FigureSkatingJudgeEntity }                  from '../entities/index.js'
import { FigureSkatingJudgeMapper }                  from '../mappers/index.js'

@Injectable()
export class FigureSkatingJudgeRepositoryImpl extends FigureSkatingJudgeRepository {
  constructor(
    @InjectRepository(FigureSkatingJudgeEntity)
    private readonly repository: EntityRepository<FigureSkatingJudgeEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: FigureSkatingJudgeMapper,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(judge: FigureSkatingJudge): Promise<FigureSkatingJudge> {
    const exists =
      (await this.repository.findOne({ id: judge.id })) || new FigureSkatingJudgeEntity()

    await this.em.persist(this.mapper.toPersistence(judge, exists)).flush()

    if (judge.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(judge.getUncommittedEvents())
    }

    return judge
  }

  async findById(id: string): Promise<FigureSkatingJudge | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({
    pager,
    order,
    query,
  }: FindFigureSkatingJudgesByQuery): Promise<FindFigureSkatingJudgesByQueryResult> {
    const [judges, hasNextPage] = await new MikroORMQueryBuilder<FigureSkatingJudgeEntity>(
      this.em.createQueryBuilder(FigureSkatingJudgeEntity)
    )
      .id('id', query?.id)
      .order(order)
      .pager(pager)
      .execute()

    return {
      judges: judges.map((judge) => this.mapper.fromPersistence(judge)),
      hasNextPage,
    }
  }
}
