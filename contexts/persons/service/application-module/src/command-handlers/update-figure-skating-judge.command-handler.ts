import type { ICommandHandler }            from '@nestjs/cqrs'

import assert                              from 'node:assert'

import { CommandHandler }                  from '@nestjs/cqrs'

import { UpdateFigureSkatingJudgeCommand } from '../commands/index.js'
import { FigureSkatingJudgeRepository }    from '../repositories/index.js'

@CommandHandler(UpdateFigureSkatingJudgeCommand)
export class UpdateFigureSkatingJudgeCommandHandler
  implements ICommandHandler<UpdateFigureSkatingJudgeCommand, void>
{
  constructor(private readonly repository: FigureSkatingJudgeRepository) {}

  async execute(command: UpdateFigureSkatingJudgeCommand): Promise<void> {
    const judge = await this.repository.findById(command.judgeId)

    assert.ok(judge, 'Figure skating judge not found')

    await this.repository.save(judge.update(command.rank, command.rankOrderDate))
  }
}
