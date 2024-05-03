import type { FigureSkatingOrganization }      from '@figure-skating/domain-module'

import * as rpc                                from '@figure-skating/rpc/abstractions'

import { FigureSkatingOrganizationSerializer } from './figure-skating-organization.serializer.js'

export class ListFigureSkatingOrganizationsSerializer extends rpc.ListFigureSkatingOrganizationsResponse {
  constructor(
    private readonly serializable: {
      organizations: Array<FigureSkatingOrganization>
      hasNextPage: boolean
    }
  ) {
    super()
  }

  get organizations(): Array<FigureSkatingOrganizationSerializer> {
    return this.serializable.organizations.map(
      (organization) => new FigureSkatingOrganizationSerializer(organization)
    )
  }

  get hasNextPage(): boolean {
    return this.serializable.hasNextPage
  }
}
