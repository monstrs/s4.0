import type { Query }  from '@monstrs/query-types'
import type { Person } from '@persons/domain-module'

export interface PersonsQuery {
  id?: Query.IDType
}

export interface FindPersonsByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: PersonsQuery
}

export interface FindPersonsByQueryResult {
  persons: Array<Person>
  hasNextPage: boolean
}

export abstract class PersonRepository {
  abstract save(person: Person): Promise<Person>

  abstract findById(personId: string): Promise<Person | undefined>

  abstract findByQuery(query: FindPersonsByQuery): Promise<FindPersonsByQueryResult>
}
