import type { Query }                  from '@monstrs/query-types'
import type { FigureSkatingSportsman } from '@persons/domain-module'

export interface FigureSkatingSportsmenQuery {
  id?: Query.IDType
}

export interface FindFigureSkatingSportsmenByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: FigureSkatingSportsmenQuery
}

export interface FindFigureSkatingSportsmenByQueryResult {
  sportsmen: Array<FigureSkatingSportsman>
  hasNextPage: boolean
}

export abstract class FigureSkatingSportsmanRepository {
  abstract save(sportsman: FigureSkatingSportsman): Promise<FigureSkatingSportsman>

  abstract findById(sportsmanId: string): Promise<FigureSkatingSportsman | undefined>

  abstract findByQuery(
    query: FindFigureSkatingSportsmenByQuery
  ): Promise<FindFigureSkatingSportsmenByQueryResult>
}
