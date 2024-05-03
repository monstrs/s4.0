import type { ICommandHandler } from '@nestjs/cqrs'

import { CommandHandler }       from '@nestjs/cqrs'

import { Person }               from '@persons/domain-module'

import { CreatePersonCommand }  from '../commands/index.js'
import { PersonRepository }     from '../repositories/index.js'

@CommandHandler(CreatePersonCommand)
export class CreatePersonCommandHandler implements ICommandHandler<CreatePersonCommand, void> {
  constructor(private readonly repository: PersonRepository) {}

  async execute(command: CreatePersonCommand): Promise<void> {
    await this.repository.save(
      new Person().create(
        command.personId,
        command.firstName,
        command.lastName,
        command.patronymic,
        command.birthday,
        command.gender
      )
    )
  }
}
