import type { IQueryHandler }                               from '@nestjs/cqrs'

import type { FindFigureSkatingOrganizationsByQueryResult } from '../repositories/index.js'

import { QueryHandler }                                     from '@nestjs/cqrs'

import { GetFigureSkatingOrganizationsQuery }               from '../queries/index.js'
import { FigureSkatingOrganizationRepository }              from '../repositories/index.js'

@QueryHandler(GetFigureSkatingOrganizationsQuery)
export class GetFigureSkatingOrganizationsQueryHandler
  implements IQueryHandler<GetFigureSkatingOrganizationsQuery>
{
  constructor(private readonly repository: FigureSkatingOrganizationRepository) {}

  async execute({
    pager,
    order,
    query,
    search,
  }: GetFigureSkatingOrganizationsQuery): Promise<FindFigureSkatingOrganizationsByQueryResult> {
    return this.repository.findByQuery({
      pager,
      order,
      query,
      search,
    })
  }
}
