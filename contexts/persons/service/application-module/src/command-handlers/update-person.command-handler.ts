import type { ICommandHandler } from '@nestjs/cqrs'

import assert                   from 'node:assert'

import { CommandHandler }       from '@nestjs/cqrs'

import { UpdatePersonCommand }  from '../commands/index.js'
import { PersonRepository }     from '../repositories/index.js'

@CommandHandler(UpdatePersonCommand)
export class UpdatePersonCommandHandler implements ICommandHandler<UpdatePersonCommand, void> {
  constructor(private readonly repository: PersonRepository) {}

  async execute(command: UpdatePersonCommand): Promise<void> {
    const person = await this.repository.findById(command.personId)

    assert.ok(person, 'Person not found')

    await this.repository.save(
      person.update(
        command.firstName,
        command.lastName,
        command.patronymic,
        command.birthday,
        command.gender
      )
    )
  }
}
