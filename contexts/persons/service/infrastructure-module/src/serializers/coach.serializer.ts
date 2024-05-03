import type { Coach } from '@persons/domain-module'

import { Timestamp }  from '@bufbuild/protobuf'

import * as rpc       from '@persons/rpc/abstractions'

export class CoachSerializer extends rpc.Coach {
  constructor(private readonly serializable: Coach) {
    super()
  }

  get id(): string {
    return this.serializable.id
  }

  get personId(): string {
    return this.serializable.personId
  }

  get isHonored(): boolean {
    return this.serializable.isHonored
  }

  get createdAt(): Timestamp {
    return Timestamp.fromDate(this.serializable.createdAt)
  }
}
