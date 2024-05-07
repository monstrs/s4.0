import type { CreateFigureSkatingJudgeRequest } from '@persons/rpc/interfaces'

import { IsUUID }                               from 'class-validator'
import { IsEnum }                               from 'class-validator'
import { IsDate }                               from 'class-validator'

import { JudgeRank }                            from '@persons/domain-module'

export class CreateFigureSkatingJudgePayload {
  constructor(private readonly request: CreateFigureSkatingJudgeRequest) {}

  @IsUUID(4)
  get personId(): string {
    return this.request.personId
  }

  @IsEnum(JudgeRank)
  get rank(): JudgeRank {
    return this.request.rank
  }

  @IsDate()
  get rankOrderDate(): Date {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    return this.request.rankOrderDate?.toDate()!
  }
}
