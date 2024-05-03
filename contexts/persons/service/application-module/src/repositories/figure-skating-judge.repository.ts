import type { Query }              from '@monstrs/query-types'
import type { FigureSkatingJudge } from '@persons/domain-module'

export interface FigureSkatingJudgesQuery {
  id?: Query.IDType
}

export interface FindFigureSkatingJudgesByQuery {
  pager?: Query.Pager
  order?: Query.Order
  query?: FigureSkatingJudgesQuery
}

export interface FindFigureSkatingJudgesByQueryResult {
  judges: Array<FigureSkatingJudge>
  hasNextPage: boolean
}

export abstract class FigureSkatingJudgeRepository {
  abstract save(judge: FigureSkatingJudge): Promise<FigureSkatingJudge>

  abstract findById(judgeId: string): Promise<FigureSkatingJudge | undefined>

  abstract findByQuery(
    query: FindFigureSkatingJudgesByQuery
  ): Promise<FindFigureSkatingJudgesByQueryResult>
}
