import type { FigureSkatingJudge }      from '@persons/domain-module'

import * as rpc                         from '@persons/rpc/abstractions'

import { FigureSkatingJudgeSerializer } from './figure-skating-judge.serializer.js'

export class CreateFigureSkatingJudgeSerializer extends rpc.CreateFigureSkatingJudgeResponse {
  constructor(private readonly serializable: FigureSkatingJudge) {
    super()
  }

  get judge(): FigureSkatingJudgeSerializer {
    return new FigureSkatingJudgeSerializer(this.serializable)
  }
}
