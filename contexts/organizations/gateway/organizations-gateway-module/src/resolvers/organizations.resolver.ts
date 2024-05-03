import { ResolveField }                             from '@nestjs/graphql'
import { Resolver }                                 from '@nestjs/graphql'
import { Args }                                     from '@nestjs/graphql'

import type { ListFigureSkatingOrganizationsResponse }   from '@organizations/client-module'
import { OrganizationsClient }                      from '@organizations/client-module'

import { ListFigureSkatingOrganizationsPagerInput } from '../inputs/index.js'
import { Organizations }                            from '../types/index.js'

@Resolver(() => Organizations)
export class OrganizationsResolver {
  constructor(private readonly organizationsClient: OrganizationsClient) {}

  @ResolveField()
  async figureSkating(
    @Args({ name: 'pager', nullable: true, type: () => ListFigureSkatingOrganizationsPagerInput })
    pager: ListFigureSkatingOrganizationsPagerInput
  ): Promise<ListFigureSkatingOrganizationsResponse> {
    return this.organizationsClient.listFigureSkatingOrganizations({
      pager,
    })
  }
}
