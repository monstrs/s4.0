import type { UpdateFigureSkatingSportsmanRequest } from '@persons/rpc/interfaces'

import { IsUUID }                                   from 'class-validator'
import { IsEnum }                                   from 'class-validator'
import { IsDate }                                   from 'class-validator'

import { SportsmanRank }                            from '@persons/domain-module'

export class UpdateFigureSkatingSportsmanPayload {
  constructor(private readonly request: UpdateFigureSkatingSportsmanRequest) {}

  @IsUUID(4)
  get sportsmanId(): string {
    return this.request.sportsmanId
  }

  @IsEnum(SportsmanRank)
  get rank(): SportsmanRank {
    return this.request.rank
  }

  @IsDate()
  get rankAssignDate() {
    return this.request.rankAssignDate?.toDate()!
  }
}
