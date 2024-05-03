/* eslint-disable @typescript-eslint/consistent-type-imports */

import type { PromiseClient }             from '@connectrpc/connect'
import type { FigureSkatingOrganization } from '@organizations/rpc-client'
import type { OrganizationsService }      from '@organizations/rpc-client'

import { Injectable }                     from '@nestjs/common'
import { Inject }                         from '@nestjs/common'
import DataLoader                         from 'dataloader'

import { ORGANIZATIONS_CLIENT_TOKEN }     from '../constants/index.js'

@Injectable()
export class FigureSkatingOrganizationsDataLoader {
  protected dataloader: DataLoader<string, FigureSkatingOrganization>

  constructor(
    @Inject(ORGANIZATIONS_CLIENT_TOKEN)
    protected readonly client: PromiseClient<typeof OrganizationsService>
  ) {
    this.dataloader = new DataLoader<string, FigureSkatingOrganization>(async (queries) =>
      this.getQuestionaires(queries))
  }

  async load(query: string): Promise<FigureSkatingOrganization> {
    return this.dataloader.load(query)
  }

  async loadMany(queries: Array<string>): Promise<Array<Error | FigureSkatingOrganization>> {
    return this.dataloader.loadMany(queries)
  }

  protected async getQuestionaires(
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
