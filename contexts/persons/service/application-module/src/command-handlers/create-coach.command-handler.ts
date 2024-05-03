import type { ICommandHandler } from '@nestjs/cqrs'

import { CommandHandler }       from '@nestjs/cqrs'

import { Coach }                from '@persons/domain-module'

import { CreateCoachCommand }   from '../commands/index.js'
import { CoachRepository }      from '../repositories/index.js'

@CommandHandler(CreateCoachCommand)
export class CreateCoachCommandHandler implements ICommandHandler<CreateCoachCommand, void> {
  constructor(private readonly repository: CoachRepository) {}

  async execute(command: CreateCoachCommand): Promise<void> {
    await this.repository.save(
      new Coach().create(command.coachId, command.personId, command.isHonored)
    )
  }
}
