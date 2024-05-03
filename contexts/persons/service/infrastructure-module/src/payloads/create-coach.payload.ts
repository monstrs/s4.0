import type { CreateCoachRequest } from '@persons/rpc/interfaces'

import { IsBoolean }               from 'class-validator'
import { IsUUID }                  from 'class-validator'

export class CreateCoachPayload {
  constructor(private readonly request: CreateCoachRequest) {}

  @IsUUID(4)
  get personId(): string {
    return this.request.personId
  }

  @IsBoolean()
  get isHonored(): boolean {
    return this.request.isHonored
  }
}
