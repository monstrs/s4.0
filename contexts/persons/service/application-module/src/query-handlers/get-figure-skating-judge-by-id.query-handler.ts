import type { IQueryHandler }             from '@nestjs/cqrs'
import type { FigureSkatingJudge }        from '@persons/domain-module'

import { QueryHandler }                   from '@nestjs/cqrs'

import { GetFigureSkatingJudgeByIdQuery } from '../queries/index.js'
import { FigureSkatingJudgeRepository }   from '../repositories/index.js'

@QueryHandler(GetFigureSkatingJudgeByIdQuery)
export class GetFigureSkatingJudgeByIdQueryHandler
  implements IQueryHandler<GetFigureSkatingJudgeByIdQuery>
{
  constructor(private readonly userRepository: FigureSkatingJudgeRepository) {}

  async execute(query: GetFigureSkatingJudgeByIdQuery): Promise<FigureSkatingJudge | undefined> {
    return this.userRepository.findById(query.judgeId)
  }
}
