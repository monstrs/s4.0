/* eslint-disable max-classes-per-file */

import type { ListFigureSkatingOrganizationsRequest_FigureSkatingOrganizationsQuery } from '@organizations/rpc/interfaces'
import type { ListFigureSkatingOrganizationsRequest }                                 from '@organizations/rpc/interfaces'

import { IdQueryPayload }                                                             from '@monstrs/rpc-query-payloads'
import { OrderPayload }                                                               from '@monstrs/rpc-query-payloads'
import { PagerPayload }                                                               from '@monstrs/rpc-query-payloads'
import { SearchPayload }                                                              from '@monstrs/rpc-query-payloads'
import { IsOptional }                                                                 from 'class-validator'
import { ValidateNested }                                                             from 'class-validator'

export class ListFigureSkatingOrganizationsQueryPayload {
  constructor(
    private readonly query: ListFigureSkatingOrganizationsRequest_FigureSkatingOrganizationsQuery
  ) {}

  @IsOptional()
  @ValidateNested()
  get id(): IdQueryPayload {
    return new IdQueryPayload(this.query.id)
  }
}

export class ListFigureSkatingOrganizationsPayload {
  constructor(private readonly request: ListFigureSkatingOrganizationsRequest) {}

  @IsOptional()
  @ValidateNested()
  get pager(): PagerPayload | undefined {
    return this.request.pager ? new PagerPayload(this.request.pager) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get order(): OrderPayload | undefined {
    return this.request.order ? new OrderPayload(this.request.order) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get search(): SearchPayload | undefined {
    return this.request.search ? new SearchPayload(this.request.search) : undefined
  }

  @IsOptional()
  @ValidateNested()
  get query(): ListFigureSkatingOrganizationsQueryPayload | undefined {
    return this.request.query
      ? new ListFigureSkatingOrganizationsQueryPayload(this.request.query)
      : undefined
  }
}
