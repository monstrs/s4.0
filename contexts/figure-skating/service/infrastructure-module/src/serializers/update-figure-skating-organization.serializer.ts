import type { FigureSkatingOrganization }      from '@figure-skating/domain-module'

import * as rpc                                from '@figure-skating/rpc/abstractions'

import { FigureSkatingOrganizationSerializer } from './figure-skating-organization.serializer.js'

export class UpdateFigureSkatingOrganizationSerializer extends rpc.UpdateFigureSkatingOrganizationResponse {
  constructor(private readonly serializable: FigureSkatingOrganization) {
    super()
  }

  get organization(): FigureSkatingOrganizationSerializer {
    return new FigureSkatingOrganizationSerializer(this.serializable)
  }
}
