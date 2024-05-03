import type * as rpc                               from '@figure-skating/client-module'
import type { ValidationError }                    from '@monstrs/protobuf-rpc'

import { Mutation }                                from '@nestjs/graphql'
import { Resolver }                                from '@nestjs/graphql'
import { Args }                                    from '@nestjs/graphql'
import { findValidationErrorDetails }              from '@monstrs/protobuf-rpc'

import { FigureSkatingClient }                     from '@figure-skating/client-module'
import { Timestamp }                               from '@figure-skating/client-module'

import { CreateFigureSkatingOrganizationInput }    from '../inputs/index.js'
import { CreateFigureSkatingOrganizationResponse } from '../responses/index.js'
import { FigureSkatingOrganization }               from '../types/index.js'

@Resolver(() => FigureSkatingOrganization)
export class FigureSkatingOrganizationMutations {
  constructor(private readonly client: FigureSkatingClient) {}

  @Mutation(() => CreateFigureSkatingOrganizationResponse)
  async createFigureSkatingOrganization(
    @Args('input')
    input: CreateFigureSkatingOrganizationInput
  ): Promise<
    CreateFigureSkatingOrganizationResponse | rpc.CreateFigureSkatingOrganizationResponse
  > {
    try {
      return await this.client.createFigureSkatingOrganization({
        ...input,
        applicantId: 'ce8157ce-e69c-4944-9aad-87aa73f1fc8b',
        foundingDate: input.foundingDate ? Timestamp.fromDate(input.foundingDate) : undefined,
        responsible: []
      })
    } catch (error) {
      const details: Array<ValidationError> = findValidationErrorDetails(error)

      if (details.length > 0) {
        return {
          errors: details.reduce(
            (result, detail) => ({
              ...result,
              [detail.id]: {
                id: detail.messages.at(0)!.id,
                message: detail.messages.at(0)!.constraint,
              },
            }),
            {}
          ),
        }
      }

      throw error
    }
  }
}
