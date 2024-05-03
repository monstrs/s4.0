import type { Coach }      from '@persons/domain-module'

import * as rpc            from '@persons/rpc/abstractions'

import { CoachSerializer } from './coach.serializer.js'

export class UpdateCoachSerializer extends rpc.UpdateCoachResponse {
  constructor(private readonly serializable: Coach) {
    super()
  }

  get coach(): CoachSerializer {
    return new CoachSerializer(this.serializable)
  }
}
