import type { Person }      from '@persons/domain-module'

import * as rpc             from '@persons/rpc/abstractions'

import { PersonSerializer } from './person.serializer.js'

export class UpdatePersonSerializer extends rpc.UpdatePersonResponse {
  constructor(private readonly serializable: Person) {
    super()
  }

  get person(): PersonSerializer {
    return new PersonSerializer(this.serializable)
  }
}
