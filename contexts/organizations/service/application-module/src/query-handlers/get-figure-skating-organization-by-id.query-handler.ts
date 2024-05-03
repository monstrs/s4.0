import type { IQueryHandler }                    from '@nestjs/cqrs'
import type { FigureSkatingOrganization }        from '@organizations/domain-module'

import { QueryHandler }                          from '@nestjs/cqrs'

import { GetFigureSkatingOrganizationByIdQuery } from '../queries/index.js'
import { FigureSkatingOrganizationRepository }   from '../repositories/index.js'

@QueryHandler(GetFigureSkatingOrganizationByIdQuery)
export class GetFigureSkatingOrganizationByIdQueryHandler
  implements IQueryHandler<GetFigureSkatingOrganizationByIdQuery>
{
  constructor(private readonly userRepository: FigureSkatingOrganizationRepository) {}

  async execute(
    query: GetFigureSkatingOrganizationByIdQuery
  ): Promise<FigureSkatingOrganization | undefined> {
    return this.userRepository.findById(query.organizationId)
  }
}
