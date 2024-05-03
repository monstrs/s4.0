import type { Query }                     from '@monstrs/query-types'
import type { FigureSkatingOrganization } from '@organizations/domain-module'

export interface FigureSkatingOrganizationsQuery {
  id?: Query.IDType
}

export interface FindFigureSkatingOrganizationsByQuery {
  pager?: Query.Pager
  order?: Query.Order
  search?: Query.Search
  query?: FigureSkatingOrganizationsQuery
}

export interface FindFigureSkatingOrganizationsByQueryResult {
  organizations: Array<FigureSkatingOrganization>
  hasNextPage: boolean
}

export abstract class FigureSkatingOrganizationRepository {
  abstract save(organization: FigureSkatingOrganization): Promise<FigureSkatingOrganization>

  abstract findById(organizationId: string): Promise<FigureSkatingOrganization | undefined>

  abstract findByQuery(
    query: FindFigureSkatingOrganizationsByQuery
  ): Promise<FindFigureSkatingOrganizationsByQueryResult>
}
