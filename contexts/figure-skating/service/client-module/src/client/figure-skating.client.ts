/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PartialMessage }                          from '@bufbuild/protobuf'
import type { PromiseClient }                           from '@connectrpc/connect'
import type { FigureSkatingOrganization }               from '@figure-skating/rpc-client'
import type { ListFigureSkatingOrganizationsRequest }   from '@figure-skating/rpc-client'
import type { ListFigureSkatingOrganizationsResponse }  from '@figure-skating/rpc-client'
import type { FigureSkatingService }                    from '@figure-skating/rpc-client'
import type { CreateFigureSkatingOrganizationRequest }  from '@figure-skating/rpc-client'
import type { CreateFigureSkatingOrganizationResponse } from '@figure-skating/rpc-client'

import { Inject }                                       from '@nestjs/common'
import { Injectable }                                   from '@nestjs/common'

import { FIGURE_SKATING_CLIENT_TOKEN }                  from '../constants/index.js'
import { FigureSkatingOrganizationsDataLoader }         from '../dataloaders/index.js'

@Injectable()
export class FigureSkatingClient {
  constructor(
    @Inject(FIGURE_SKATING_CLIENT_TOKEN)
    protected readonly client: PromiseClient<typeof FigureSkatingService>,
    private readonly figureSkatingOrganizationDataLoader: FigureSkatingOrganizationsDataLoader
  ) {}

  async createFigureSkatingOrganization(
    request: PartialMessage<CreateFigureSkatingOrganizationRequest>
  ): Promise<CreateFigureSkatingOrganizationResponse> {
    return this.client.createFigureSkatingOrganization(request)
  }

  async listFigureSkatingOrganizations(
    request: PartialMessage<ListFigureSkatingOrganizationsRequest> = {}
  ): Promise<ListFigureSkatingOrganizationsResponse> {
    return this.client.listFigureSkatingOrganizations(request)
  }

  async loadFigureSkatingOrganizations(
    figureSkatingOrganizationIds: string
  ): Promise<FigureSkatingOrganization> {
    return this.figureSkatingOrganizationDataLoader.load(figureSkatingOrganizationIds)
  }
}
