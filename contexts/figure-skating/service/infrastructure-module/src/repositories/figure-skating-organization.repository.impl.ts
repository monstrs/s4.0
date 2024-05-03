import type { FindFigureSkatingOrganizationsByQuery }       from '@figure-skating/application-module'
import type { FindFigureSkatingOrganizationsByQueryResult } from '@figure-skating/application-module'
import type { FigureSkatingOrganization }                   from '@figure-skating/domain-module'

import { EntityRepository }                                 from '@mikro-orm/core'
import { EntityManager }                                    from '@mikro-orm/core'
import { InjectRepository }                                 from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager }         from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                             from '@monstrs/mikro-orm-query-builder'
import { Injectable }                                       from '@nestjs/common'
import { Inject }                                           from '@nestjs/common'
import { EventBus }                                         from '@nestjs/cqrs'

import { FigureSkatingOrganizationRepository }              from '@figure-skating/application-module'

import { FigureSkatingOrganizationEntity }                  from '../entities/index.js'
import { FigureSkatingOrganizationMapper }                  from '../mappers/index.js'

@Injectable()
export class FigureSkatingOrganizationRepositoryImpl extends FigureSkatingOrganizationRepository {
  constructor(
    @InjectRepository(FigureSkatingOrganizationEntity)
    private readonly repository: EntityRepository<FigureSkatingOrganizationEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: FigureSkatingOrganizationMapper,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(organization: FigureSkatingOrganization): Promise<FigureSkatingOrganization> {
    const exists =
      (await this.repository.findOne({ id: organization.id })) ||
      new FigureSkatingOrganizationEntity()

    await this.em.persist(this.mapper.toPersistence(organization, exists)).flush()

    if (organization.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(organization.getUncommittedEvents())
    }

    return organization
  }

  async findById(id: string): Promise<FigureSkatingOrganization | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({
    pager,
    order,
    query,
    search,
  }: FindFigureSkatingOrganizationsByQuery): Promise<FindFigureSkatingOrganizationsByQueryResult> {
    const [organizations, hasNextPage] =
      await new MikroORMQueryBuilder<FigureSkatingOrganizationEntity>(
        this.em.createQueryBuilder(FigureSkatingOrganizationEntity)
      )
        .id('id', query?.id)
        .search(search?.fields, search?.value)
        .order(order)
        .pager(pager)
        .execute()

    return {
      organizations: organizations.map((organization) => this.mapper.fromPersistence(organization)),
      hasNextPage,
    }
  }
}
