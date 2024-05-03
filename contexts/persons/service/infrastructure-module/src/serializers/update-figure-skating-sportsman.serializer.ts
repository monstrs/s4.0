import type { FigureSkatingSportsman }      from '@persons/domain-module'

import * as rpc                             from '@persons/rpc/abstractions'

import { FigureSkatingSportsmanSerializer } from './figure-skating-sportsman.serializer.js'

export class UpdateFigureSkatingSportsmanSerializer extends rpc.UpdateFigureSkatingSportsmanResponse {
  constructor(private readonly serializable: FigureSkatingSportsman) {
    super()
  }

  get sportsman(): FigureSkatingSportsmanSerializer {
    return new FigureSkatingSportsmanSerializer(this.serializable)
  }
}
