import type { IQueryHandler }                 from '@nestjs/cqrs'
import type { FigureSkatingSportsman }        from '@persons/domain-module'

import { QueryHandler }                       from '@nestjs/cqrs'

import { GetFigureSkatingSportsmanByIdQuery } from '../queries/index.js'
import { FigureSkatingSportsmanRepository }   from '../repositories/index.js'

@QueryHandler(GetFigureSkatingSportsmanByIdQuery)
export class GetFigureSkatingSportsmanByIdQueryHandler
  implements IQueryHandler<GetFigureSkatingSportsmanByIdQuery>
{
  constructor(private readonly userRepository: FigureSkatingSportsmanRepository) {}

  async execute(
    query: GetFigureSkatingSportsmanByIdQuery
  ): Promise<FigureSkatingSportsman | undefined> {
    return this.userRepository.findById(query.sportsmanId)
  }
}
