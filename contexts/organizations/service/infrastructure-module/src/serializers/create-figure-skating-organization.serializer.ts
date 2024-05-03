import type { FigureSkatingOrganization }      from '@organizations/domain-module'

import * as rpc                                from '@organizations/rpc/abstractions'

import { FigureSkatingOrganizationSerializer } from './figure-skating-organization.serializer.js'

export class CreateFigureSkatingOrganizationSerializer extends rpc.CreateFigureSkatingOrganizationResponse {
  constructor(private readonly serializable: FigureSkatingOrganization) {
    super()
  }

  get organization(): FigureSkatingOrganizationSerializer {
    return new FigureSkatingOrganizationSerializer(this.serializable)
  }
}
