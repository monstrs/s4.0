import type { CreateFigureSkatingSportsmanRequest } from '@persons/rpc/interfaces'

import { IsUUID }                                   from 'class-validator'
import { IsEnum }                                   from 'class-validator'
import { IsDate }                                   from 'class-validator'

import { SportsmanRank }                            from '@persons/domain-module'

export class CreateFigureSkatingSportsmanPayload {
  constructor(private readonly request: CreateFigureSkatingSportsmanRequest) {}

  @IsUUID(4)
  get personId(): string {
    return this.request.personId
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
