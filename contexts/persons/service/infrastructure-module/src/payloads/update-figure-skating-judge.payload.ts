import type { UpdateFigureSkatingJudgeRequest } from '@persons/rpc/interfaces'

import { IsUUID }                               from 'class-validator'
import { IsEnum }                               from 'class-validator'
import { IsDate }                               from 'class-validator'

import { JudgeRank }                            from '@persons/domain-module'

export class UpdateFigureSkatingJudgePayload {
  constructor(private readonly request: UpdateFigureSkatingJudgeRequest) {}

  @IsUUID(4)
  get judgeId(): string {
    return this.request.judgeId
  }

  @IsEnum(JudgeRank)
  get rank(): JudgeRank {
    return this.request.rank
  }

  @IsDate()
  get rankOrderDate() {
    return this.request.rankOrderDate?.toDate()!
  }
}
