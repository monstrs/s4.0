import type { IQueryHandler } from '@nestjs/cqrs'
import type { Person }        from '@persons/domain-module'

import { QueryHandler }       from '@nestjs/cqrs'

import { GetPersonByIdQuery } from '../queries/index.js'
import { PersonRepository }   from '../repositories/index.js'

@QueryHandler(GetPersonByIdQuery)
export class GetPersonByIdQueryHandler implements IQueryHandler<GetPersonByIdQuery> {
  constructor(private readonly userRepository: PersonRepository) {}

  async execute(query: GetPersonByIdQuery): Promise<Person | undefined> {
    return this.userRepository.findById(query.personId)
  }
}
