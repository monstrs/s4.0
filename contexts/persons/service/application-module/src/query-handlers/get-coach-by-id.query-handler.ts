import type { IQueryHandler } from '@nestjs/cqrs'
import type { Coach }         from '@persons/domain-module'

import { QueryHandler }       from '@nestjs/cqrs'

import { GetCoachByIdQuery }  from '../queries/index.js'
import { CoachRepository }    from '../repositories/index.js'

@QueryHandler(GetCoachByIdQuery)
export class GetCoachByIdQueryHandler implements IQueryHandler<GetCoachByIdQuery> {
  constructor(private readonly userRepository: CoachRepository) {}

  async execute(query: GetCoachByIdQuery): Promise<Coach | undefined> {
    return this.userRepository.findById(query.coachId)
  }
}
