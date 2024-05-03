import type { FigureSkatingJudge } from '@persons/domain-module'

import { Timestamp }               from '@bufbuild/protobuf'

import * as rpc                    from '@persons/rpc/abstractions'

export class FigureSkatingJudgeSerializer extends rpc.FigureSkatingJudge {
  constructor(private readonly serializable: FigureSkatingJudge) {
    super()
  }

  get id(): string {
    return this.serializable.id
  }

  get personId(): string {
    return this.serializable.personId
  }

  get rank(): rpc.JudgeRank {
    return this.serializable.rank
  }

  get rankOrderDate(): Timestamp {
    return Timestamp.fromDate(this.serializable.rankOrderDate)
  }

  get createdAt(): Timestamp {
    return Timestamp.fromDate(this.serializable.createdAt)
  }
}
