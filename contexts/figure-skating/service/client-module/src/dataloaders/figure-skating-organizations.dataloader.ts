/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PromiseClient }             from '@connectrpc/connect'
import type { FigureSkatingOrganization } from '@figure-skating/rpc-client'
import type { FigureSkatingService }      from '@figure-skating/rpc-client'

import { Injectable }                     from '@nestjs/common'
import { Inject }                         from '@nestjs/common'
import DataLoader                         from 'dataloader'

import { FIGURE_SKATING_CLIENT_TOKEN }     from '../constants/index.js'

@Injectable()
export class FigureSkatingOrganizationsDataLoader {
  protected dataloader: DataLoader<string, FigureSkatingOrganization>

  constructor(
    @Inject(FIGURE_SKATING_CLIENT_TOKEN)
    protected readonly client: PromiseClient<typeof FigureSkatingService>
  ) {
    this.dataloader = new DataLoader<string, FigureSkatingOrganization>(async (figureSkatingOrganizationIds: ReadonlyArray<string>) =>
      this.getFigureSkatingOrganizations(figureSkatingOrganizationIds))
  }

  async load(query: string): Promise<FigureSkatingOrganization> {
    return this.dataloader.load(query)
  }

  async loadMany(queries: Array<string>): Promise<Array<Error | FigureSkatingOrganization>> {
    return this.dataloader.loadMany(queries)
  }

  protected async getFigureSkatingOrganizations(
    figureSkatingOrganizationIds: ReadonlyArray<string>
  ): Promise<Array<FigureSkatingOrganization>> {
    const { organizations } = await this.client.listFigureSkatingOrganizations({
      query: {
        id: {
          conditions: {
            in: {
              values: figureSkatingOrganizationIds.map(
                (figureSkatingOrganizationId) => figureSkatingOrganizationId
              ),
            },
          },
        },
      },
    })

    return organizations
  }
}
