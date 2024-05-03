import type { ICommandHandler }                from '@nestjs/cqrs'

import assert                                  from 'node:assert'

import { CommandHandler }                      from '@nestjs/cqrs'

import { UpdateFigureSkatingSportsmanCommand } from '../commands/index.js'
import { FigureSkatingSportsmanRepository }    from '../repositories/index.js'

@CommandHandler(UpdateFigureSkatingSportsmanCommand)
export class UpdateFigureSkatingSportsmanCommandHandler
  implements ICommandHandler<UpdateFigureSkatingSportsmanCommand, void>
{
  constructor(private readonly repository: FigureSkatingSportsmanRepository) {}

  async execute(command: UpdateFigureSkatingSportsmanCommand): Promise<void> {
    const sportsman = await this.repository.findById(command.sportsmanId)

    assert.ok(sportsman, 'Figure skating sportsman not found')

    await this.repository.save(sportsman.update(command.rank, command.rankAssignDate))
  }
}
