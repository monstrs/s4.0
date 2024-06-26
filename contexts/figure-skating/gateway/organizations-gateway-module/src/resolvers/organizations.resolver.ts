import type { ListFigureSkatingOrganizationsResponse } from '@figure-skating/client-module'

import { ResolveField }                                from '@nestjs/graphql'
import { Resolver }                                    from '@nestjs/graphql'
import { Args }                                        from '@nestjs/graphql'

import { FigureSkatingClient }                         from '@figure-skating/client-module'

import { ListFigureSkatingOrganizationsPagerInput }    from '../inputs/index.js'
import { Organizations }                               from '../types/index.js'

@Resolver(() => Organizations)
export class OrganizationsResolver {
  constructor(private readonly figureSkatingClient: FigureSkatingClient) {}

  @ResolveField()
  async figureSkating(
    @Args({ name: 'pager', nullable: true, type: () => ListFigureSkatingOrganizationsPagerInput })
    pager: ListFigureSkatingOrganizationsPagerInput
  ): Promise<ListFigureSkatingOrganizationsResponse> {
    return this.figureSkatingClient.listFigureSkatingOrganizations({
      pager,
    })
  }
}
