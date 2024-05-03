import type { UpdateCoachRequest } from '@persons/rpc/interfaces'

import { IsBoolean }               from 'class-validator'
import { IsUUID }                  from 'class-validator'

export class UpdateCoachPayload {
  constructor(private readonly request: UpdateCoachRequest) {}

  @IsUUID(4)
  get coachId(): string {
    return this.request.coachId
  }

  @IsBoolean()
  get isHonored(): boolean {
    return this.request.isHonored
  }
}
