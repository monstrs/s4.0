import type { FigureSkatingSportsman } from '@persons/domain-module'

import { Timestamp }                   from '@bufbuild/protobuf'

import * as rpc                        from '@persons/rpc/abstractions'

export class FigureSkatingSportsmanSerializer extends rpc.FigureSkatingSportsman {
  constructor(private readonly serializable: FigureSkatingSportsman) {
    super()
  }

  get id(): string {
    return this.serializable.id
  }

  get personId(): string {
    return this.serializable.personId
  }

  get rank(): rpc.SportsmanRank {
    return this.serializable.rank
  }

  get rankAssignDate(): Timestamp {
    return Timestamp.fromDate(this.serializable.rankAssignDate)
  }

  get createdAt(): Timestamp {
    return Timestamp.fromDate(this.serializable.createdAt)
  }
}
