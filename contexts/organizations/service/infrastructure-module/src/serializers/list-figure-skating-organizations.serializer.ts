import type { FigureSkatingOrganization }      from '@organizations/domain-module'

import * as rpc                                from '@organizations/rpc/abstractions'

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
