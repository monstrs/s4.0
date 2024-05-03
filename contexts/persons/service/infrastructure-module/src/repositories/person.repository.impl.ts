import type { FindPersonsByQuery }                  from '@persons/application-module'
import type { FindPersonsByQueryResult }            from '@persons/application-module'
import type { Person }                              from '@persons/domain-module'

import { EntityRepository }                         from '@mikro-orm/core'
import { EntityManager }                            from '@mikro-orm/core'
import { InjectRepository }                         from '@mikro-orm/nestjs'
import { EntityManager as PostgreSqlEntityManager } from '@mikro-orm/postgresql'
import { MikroORMQueryBuilder }                     from '@monstrs/mikro-orm-query-builder'
import { Injectable }                               from '@nestjs/common'
import { Inject }                                   from '@nestjs/common'
import { EventBus }                                 from '@nestjs/cqrs'

import { PersonRepository }                         from '@persons/application-module'

import { PersonEntity }                             from '../entities/index.js'
import { PersonMapper }                             from '../mappers/index.js'

@Injectable()
export class PersonRepositoryImpl extends PersonRepository {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly repository: EntityRepository<PersonEntity>,
    @Inject(EntityManager)
    private readonly em: PostgreSqlEntityManager,
    private readonly mapper: PersonMapper,
    private readonly eventBus: EventBus
  ) {
    super()
  }

  async save(person: Person): Promise<Person> {
    const exists = (await this.repository.findOne({ id: person.id })) || new PersonEntity()

    await this.em.persist(this.mapper.toPersistence(person, exists)).flush()

    if (person.getUncommittedEvents().length > 0) {
      this.eventBus.publishAll(person.getUncommittedEvents())
    }

    return person
  }

  async findById(id: string): Promise<Person | undefined> {
    const entity = await this.repository.findOne({
      id,
    })

    return entity ? this.mapper.fromPersistence(entity) : undefined
  }

  async findByQuery({
    pager,
    order,
    query,
  }: FindPersonsByQuery): Promise<FindPersonsByQueryResult> {
    const [persons, hasNextPage] = await new MikroORMQueryBuilder<PersonEntity>(
      this.em.createQueryBuilder(PersonEntity)
    )
      .id('id', query?.id)
      .order(order)
      .pager(pager)
      .execute()

    return {
      persons: persons.map((person) => this.mapper.fromPersistence(person)),
      hasNextPage,
    }
  }
}
