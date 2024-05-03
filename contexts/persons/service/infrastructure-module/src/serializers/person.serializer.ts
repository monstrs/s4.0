import type { Person } from '@persons/domain-module'

import { Timestamp }   from '@bufbuild/protobuf'

import * as rpc        from '@persons/rpc/abstractions'

export class PersonSerializer extends rpc.Person {
  constructor(private readonly serializable: Person) {
    super()
  }

  get id(): string {
    return this.serializable.id
  }

  get firstName(): string {
    return this.serializable.firstName
  }

  get lastName(): string {
    return this.serializable.lastName
  }

  get patronymic(): string {
    return this.serializable.patronymic
  }

  get gender(): rpc.Gender {
    return this.serializable.gender
  }

  get birthday(): Timestamp {
    return Timestamp.fromDate(this.serializable.birthday)
  }

  get createdAt(): Timestamp {
    return Timestamp.fromDate(this.serializable.createdAt)
  }
}
