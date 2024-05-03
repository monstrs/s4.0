import type { ICommandHandler } from '@nestjs/cqrs'

import assert                   from 'node:assert'

import { CommandHandler }       from '@nestjs/cqrs'

import { UpdateCoachCommand }   from '../commands/index.js'
import { CoachRepository }      from '../repositories/index.js'

@CommandHandler(UpdateCoachCommand)
export class UpdateCoachCommandHandler implements ICommandHandler<UpdateCoachCommand, void> {
  constructor(private readonly repository: CoachRepository) {}

  async execute(command: UpdateCoachCommand): Promise<void> {
    const coach = await this.repository.findById(command.coachId)

    assert.ok(coach, 'Coach not found')

    await this.repository.save(coach.update(command.isHonored))
  }
}
