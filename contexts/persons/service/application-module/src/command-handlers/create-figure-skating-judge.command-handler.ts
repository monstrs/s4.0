import type { ICommandHandler }            from '@nestjs/cqrs'

import { CommandHandler }                  from '@nestjs/cqrs'

import { FigureSkatingJudge }              from '@persons/domain-module'

import { CreateFigureSkatingJudgeCommand } from '../commands/index.js'
import { FigureSkatingJudgeRepository }    from '../repositories/index.js'

@CommandHandler(CreateFigureSkatingJudgeCommand)
export class CreateFigureSkatingJudgeCommandHandler
  implements ICommandHandler<CreateFigureSkatingJudgeCommand, void>
{
  constructor(private readonly repository: FigureSkatingJudgeRepository) {}

  async execute(command: CreateFigureSkatingJudgeCommand): Promise<void> {
    await this.repository.save(
      new FigureSkatingJudge().create(
        command.judgeId,
        command.personId,
        command.rank,
        command.rankOrderDate
      )
    )
  }
}
