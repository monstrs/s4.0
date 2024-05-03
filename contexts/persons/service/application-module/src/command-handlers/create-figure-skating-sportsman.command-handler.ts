import type { ICommandHandler }                from '@nestjs/cqrs'

import { CommandHandler }                      from '@nestjs/cqrs'

import { FigureSkatingSportsman }              from '@persons/domain-module'

import { CreateFigureSkatingSportsmanCommand } from '../commands/index.js'
import { FigureSkatingSportsmanRepository }    from '../repositories/index.js'

@CommandHandler(CreateFigureSkatingSportsmanCommand)
export class CreateFigureSkatingSportsmanCommandHandler
  implements ICommandHandler<CreateFigureSkatingSportsmanCommand, void>
{
  constructor(private readonly repository: FigureSkatingSportsmanRepository) {}

  async execute(command: CreateFigureSkatingSportsmanCommand): Promise<void> {
    await this.repository.save(
      new FigureSkatingSportsman().create(
        command.sportsmanId,
        command.personId,
        command.rank,
        command.rankAssignDate
      )
    )
  }
}
