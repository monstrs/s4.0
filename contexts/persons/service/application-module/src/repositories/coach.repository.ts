import type { Query } from '@monstrs/query-types'
import type { Coach } from '@persons/domain-module'

export interface CoachesQuery {
  id?: Query.IDType
}

export interface FindCoachesByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: CoachesQuery
}

export interface FindCoachesByQueryResult {
  coaches: Array<Coach>
  hasNextPage: boolean
}

export abstract class CoachRepository {
  abstract save(coach: Coach): Promise<Coach>

  abstract findById(coachId: string): Promise<Coach | undefined>

  abstract findByQuery(query: FindCoachesByQuery): Promise<FindCoachesByQueryResult>
}
