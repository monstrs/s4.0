import type { PartialMessage }                         from '@bufbuild/protobuf'
import type { ServiceImpl }                            from '@connectrpc/connect'
import type { FigureSkatingOrganization }              from '@organizations/domain-module'
import { CreateFigureSkatingOrganizationRequest } from '@organizations/rpc'
import { UpdateFigureSkatingOrganizationRequest } from '@organizations/rpc'
import { ListFigureSkatingOrganizationsRequest }  from '@organizations/rpc'

import { CreateRequestContext }                        from '@mikro-orm/core'
import { MikroORM }                                    from '@mikro-orm/core'
import { ConnectRpcMethod }                            from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                           from '@monstrs/nestjs-connectrpc'
import { Validator }                                   from '@monstrs/nestjs-validation'
import { Controller, UseFilters }                                  from '@nestjs/common'
import { CommandBus }                                  from '@nestjs/cqrs'
import { QueryBus }                                    from '@nestjs/cqrs'
import { v4 as uuid }                                  from 'uuid'
import { ConnectRpcExceptionsFilter }              from '@monstrs/nestjs-connectrpc-errors'

import { UpdateFigureSkatingOrganizationCommand }      from '@organizations/application-module'
import { GetFigureSkatingOrganizationsQuery }          from '@organizations/application-module'
import type { FindFigureSkatingOrganizationsByQueryResult } from '@organizations/application-module'
import { CreateFigureSkatingOrganizationCommand }      from '@organizations/application-module'
import { GetFigureSkatingOrganizationByIdQuery }       from '@organizations/application-module'
import type { CreateFigureSkatingOrganizationResponse }     from '@organizations/rpc'
import type { UpdateFigureSkatingOrganizationResponse }     from '@organizations/rpc'
import type { ListFigureSkatingOrganizationsResponse }      from '@organizations/rpc'
import { OrganizationsService }                        from '@organizations/rpc'

import { CreateFigureSkatingOrganizationPayload }      from '../payloads/index.js'
import { ListFigureSkatingOrganizationsPayload }       from '../payloads/index.js'
import { UpdateFigureSkatingOrganizationPayload }      from '../payloads/index.js'
import { UpdateFigureSkatingOrganizationSerializer }   from '../serializers/index.js'
import { CreateFigureSkatingOrganizationSerializer }   from '../serializers/index.js'
import { ListFigureSkatingOrganizationsSerializer }    from '../serializers/index.js'

@Controller()
@ConnectRpcService(OrganizationsService)
@UseFilters(ConnectRpcExceptionsFilter)
export class OrganizationsServiceController implements ServiceImpl<typeof OrganizationsService> {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly validator: Validator,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createFigureSkatingOrganization(
    request: CreateFigureSkatingOrganizationRequest
  ): Promise<PartialMessage<CreateFigureSkatingOrganizationResponse>> {
    const payload = new CreateFigureSkatingOrganizationPayload(request)

    await this.validator.validate(payload)

    const command = new CreateFigureSkatingOrganizationCommand(
      uuid(),
      payload.fullName,
      payload.abbreviation,
      payload.websiteName,
      payload.listName,
      payload.foundingDate,
      payload.category,
      payload.curatorId,
      payload.cityId,
      payload.address,
      payload.phone,
      payload.inn,
      payload.additionalInformation,
      payload.applicantId,
      payload.applicantJobTitle,
      payload.applicantPhone,
      payload.contingent,
      payload.disciplines,
      payload.responsible,
      payload.charterId,
      payload.registrationCertificateId
    )

    await this.commandBus.execute(command)

    return new CreateFigureSkatingOrganizationSerializer(
      await this.queryBus.execute<GetFigureSkatingOrganizationByIdQuery, FigureSkatingOrganization>(
        new GetFigureSkatingOrganizationByIdQuery(command.organizationId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async updateFigureSkatingOrganization(
    request: UpdateFigureSkatingOrganizationRequest
  ): Promise<PartialMessage<UpdateFigureSkatingOrganizationResponse>> {
    const payload = new UpdateFigureSkatingOrganizationPayload(request)

    await this.validator.validate(payload)

    const command = new UpdateFigureSkatingOrganizationCommand(
      payload.organizationId,
      payload.fullName,
      payload.abbreviation,
      payload.websiteName,
      payload.listName,
      payload.foundingDate,
      payload.category,
      payload.curatorId,
      payload.cityId,
      payload.address,
      payload.phone,
      payload.inn,
      payload.additionalInformation,
      payload.applicantId,
      payload.applicantJobTitle,
      payload.applicantPhone,
      payload.contingent,
      payload.disciplines,
      payload.responsible,
      payload.charterId,
      payload.registrationCertificateId
    )

    await this.commandBus.execute(command)

    return new UpdateFigureSkatingOrganizationSerializer(
      await this.queryBus.execute<GetFigureSkatingOrganizationByIdQuery, FigureSkatingOrganization>(
        new GetFigureSkatingOrganizationByIdQuery(command.organizationId)
      )
    )
  }

  @ConnectRpcMethod()
  async listFigureSkatingOrganizations(
    request: ListFigureSkatingOrganizationsRequest
  ): Promise<PartialMessage<ListFigureSkatingOrganizationsResponse>> {
    const payload = new ListFigureSkatingOrganizationsPayload(request)

    await this.validator.validate(payload)

    return new ListFigureSkatingOrganizationsSerializer(
      await this.queryBus.execute<
        GetFigureSkatingOrganizationsQuery,
        FindFigureSkatingOrganizationsByQueryResult
      >(
        new GetFigureSkatingOrganizationsQuery(
          payload.pager,
          payload.order,
          payload.query,
          payload.search
        )
      )
    )
  }
}
