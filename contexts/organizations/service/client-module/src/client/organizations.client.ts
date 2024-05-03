import type { PartialMessage }                          from '@bufbuild/protobuf'
import { PromiseClient }                           from '@connectrpc/connect'
import type { FigureSkatingOrganization }               from '@organizations/rpc-client'
import type { ListFigureSkatingOrganizationsRequest }   from '@organizations/rpc-client'
import type { ListFigureSkatingOrganizationsResponse }  from '@organizations/rpc-client'
import type { OrganizationsService }                    from '@organizations/rpc-client'
import type { CreateFigureSkatingOrganizationRequest }  from '@organizations/rpc-client'
import type { CreateFigureSkatingOrganizationResponse } from '@organizations/rpc-client'

import { Inject }                                       from '@nestjs/common'
import { Injectable }                                   from '@nestjs/common'

import { ORGANIZATIONS_CLIENT_TOKEN }                   from '../constants/index.js'
import { FigureSkatingOrganizationsDataLoader }         from '../dataloaders/index.js'

@Injectable()
export class OrganizationsClient {
  constructor(
    @Inject(ORGANIZATIONS_CLIENT_TOKEN)
    protected readonly client: PromiseClient<typeof OrganizationsService>,
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
