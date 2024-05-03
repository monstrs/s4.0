import type { PartialMessage }                       from '@bufbuild/protobuf'
import type { ServiceImpl }                          from '@connectrpc/connect'
import type { Person }                               from '@persons/domain-module'
import type { Coach }                                from '@persons/domain-module'
import type { FigureSkatingJudge }                   from '@persons/domain-module'
import type { FigureSkatingSportsman }               from '@persons/domain-module'
import type { CreatePersonResponse }                 from '@persons/rpc'
import type { UpdatePersonResponse }                 from '@persons/rpc'
import type { CreateCoachResponse }                  from '@persons/rpc'
import type { UpdateCoachResponse }                  from '@persons/rpc'
import type { CreateFigureSkatingJudgeResponse }     from '@persons/rpc'
import type { UpdateFigureSkatingJudgeResponse }     from '@persons/rpc'
import type { CreateFigureSkatingSportsmanResponse } from '@persons/rpc'
import type { UpdateFigureSkatingSportsmanResponse } from '@persons/rpc'

import { CreateRequestContext }                      from '@mikro-orm/core'
import { MikroORM }                                  from '@mikro-orm/core'
import { ConnectRpcMethod }                          from '@monstrs/nestjs-connectrpc'
import { ConnectRpcService }                         from '@monstrs/nestjs-connectrpc'
import { Validator }                                 from '@monstrs/nestjs-validation'
import { Controller }                                from '@nestjs/common'
import { CommandBus }                                from '@nestjs/cqrs'
import { QueryBus }                                  from '@nestjs/cqrs'
import { v4 as uuid }                                from 'uuid'

import { CreatePersonCommand }                       from '@persons/application-module'
import { UpdatePersonCommand }                       from '@persons/application-module'
import { CreateCoachCommand }                        from '@persons/application-module'
import { UpdateCoachCommand }                        from '@persons/application-module'
import { CreateFigureSkatingJudgeCommand }           from '@persons/application-module'
import { UpdateFigureSkatingSportsmanCommand }       from '@persons/application-module'
import { CreateFigureSkatingSportsmanCommand }       from '@persons/application-module'
import { UpdateFigureSkatingJudgeCommand }           from '@persons/application-module'
import { GetPersonByIdQuery }                        from '@persons/application-module'
import { GetCoachByIdQuery }                         from '@persons/application-module'
import { GetFigureSkatingJudgeByIdQuery }            from '@persons/application-module'
import { GetFigureSkatingSportsmanByIdQuery }        from '@persons/application-module'
import { CreatePersonRequest }                       from '@persons/rpc'
import { UpdatePersonRequest }                       from '@persons/rpc'
import { CreateCoachRequest }                        from '@persons/rpc'
import { UpdateCoachRequest }                        from '@persons/rpc'
import { CreateFigureSkatingJudgeRequest }           from '@persons/rpc'
import { UpdateFigureSkatingJudgeRequest }           from '@persons/rpc'
import { CreateFigureSkatingSportsmanRequest }       from '@persons/rpc'
import { UpdateFigureSkatingSportsmanRequest }       from '@persons/rpc'
import { PersonsService }                            from '@persons/rpc'

import { CreatePersonPayload }                       from '../payloads/index.js'
import { UpdatePersonPayload }                       from '../payloads/index.js'
import { CreateCoachPayload }                        from '../payloads/index.js'
import { UpdateCoachPayload }                        from '../payloads/index.js'
import { CreateFigureSkatingJudgePayload }           from '../payloads/index.js'
import { UpdateFigureSkatingJudgePayload }           from '../payloads/index.js'
import { CreateFigureSkatingSportsmanPayload }       from '../payloads/index.js'
import { UpdateFigureSkatingSportsmanPayload }       from '../payloads/index.js'
import { CreatePersonSerializer }                    from '../serializers/index.js'
import { UpdateCoachSerializer }                     from '../serializers/index.js'
import { UpdateFigureSkatingJudgeSerializer }        from '../serializers/index.js'
import { UpdateFigureSkatingSportsmanSerializer }    from '../serializers/index.js'
import { UpdatePersonSerializer }                    from '../serializers/index.js'
import { CreateCoachSerializer }                     from '../serializers/index.js'
import { CreateFigureSkatingJudgeSerializer }        from '../serializers/index.js'
import { CreateFigureSkatingSportsmanSerializer }    from '../serializers/index.js'

@Controller()
@ConnectRpcService(PersonsService)
export class PersonsServiceController implements ServiceImpl<typeof PersonsService> {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly validator: Validator,
    // @ts-expect-error
    private readonly orm: MikroORM
  ) {}

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createPerson(request: CreatePersonRequest): Promise<PartialMessage<CreatePersonResponse>> {
    const payload = new CreatePersonPayload(request)

    await this.validator.validate(payload)

    const command = new CreatePersonCommand(
      uuid(),
      payload.firstName,
      payload.lastName,
      payload.patronymic,
      payload.gender,
      payload.birthday
    )

    await this.commandBus.execute(command)

    return new CreatePersonSerializer(
      await this.queryBus.execute<GetPersonByIdQuery, Person>(
        new GetPersonByIdQuery(command.personId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async updatePerson(request: UpdatePersonRequest): Promise<PartialMessage<UpdatePersonResponse>> {
    const payload = new UpdatePersonPayload(request)

    await this.validator.validate(payload)

    const command = new UpdatePersonCommand(
      payload.personId,
      payload.firstName,
      payload.lastName,
      payload.patronymic,
      payload.gender,
      payload.birthday
    )

    await this.commandBus.execute(command)

    return new UpdatePersonSerializer(
      await this.queryBus.execute<GetPersonByIdQuery, Person>(
        new GetPersonByIdQuery(command.personId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createCoach(request: CreateCoachRequest): Promise<PartialMessage<CreateCoachResponse>> {
    const payload = new CreateCoachPayload(request)

    await this.validator.validate(payload)

    const command = new CreateCoachCommand(uuid(), payload.personId, payload.isHonored)

    await this.commandBus.execute(command)

    return new CreateCoachSerializer(
      await this.queryBus.execute<GetCoachByIdQuery, Coach>(new GetCoachByIdQuery(command.coachId))
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async updateCoach(request: UpdateCoachRequest): Promise<PartialMessage<UpdateCoachResponse>> {
    const payload = new UpdateCoachPayload(request)

    await this.validator.validate(payload)

    const command = new UpdateCoachCommand(payload.coachId, payload.isHonored)

    await this.commandBus.execute(command)

    return new UpdateCoachSerializer(
      await this.queryBus.execute<GetCoachByIdQuery, Coach>(new GetCoachByIdQuery(command.coachId))
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createFigureSkatingSportsman(
    request: CreateFigureSkatingSportsmanRequest
  ): Promise<PartialMessage<CreateFigureSkatingSportsmanResponse>> {
    const payload = new CreateFigureSkatingSportsmanPayload(request)

    await this.validator.validate(payload)

    const command = new CreateFigureSkatingSportsmanCommand(
      uuid(),
      payload.personId,
      payload.rank,
      payload.rankAssignDate
    )

    await this.commandBus.execute(command)

    return new CreateFigureSkatingSportsmanSerializer(
      await this.queryBus.execute<GetFigureSkatingSportsmanByIdQuery, FigureSkatingSportsman>(
        new GetFigureSkatingSportsmanByIdQuery(command.sportsmanId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async updateFigureSkatingSportsman(
    request: UpdateFigureSkatingSportsmanRequest
  ): Promise<PartialMessage<UpdateFigureSkatingSportsmanResponse>> {
    const payload = new UpdateFigureSkatingSportsmanPayload(request)

    await this.validator.validate(payload)

    const command = new UpdateFigureSkatingSportsmanCommand(
      payload.sportsmanId,
      payload.rank,
      payload.rankAssignDate
    )

    await this.commandBus.execute(command)

    return new UpdateFigureSkatingSportsmanSerializer(
      await this.queryBus.execute<GetFigureSkatingSportsmanByIdQuery, FigureSkatingSportsman>(
        new GetFigureSkatingSportsmanByIdQuery(command.sportsmanId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async createFigureSkatingJudge(
    request: CreateFigureSkatingJudgeRequest
  ): Promise<PartialMessage<CreateFigureSkatingJudgeResponse>> {
    const payload = new CreateFigureSkatingJudgePayload(request)

    await this.validator.validate(payload)

    const command = new CreateFigureSkatingJudgeCommand(
      uuid(),
      payload.personId,
      payload.rank,
      payload.rankOrderDate
    )

    await this.commandBus.execute(command)

    return new CreateFigureSkatingJudgeSerializer(
      await this.queryBus.execute<GetFigureSkatingJudgeByIdQuery, FigureSkatingJudge>(
        new GetFigureSkatingJudgeByIdQuery(command.judgeId)
      )
    )
  }

  @ConnectRpcMethod()
  @CreateRequestContext()
  async updateFigureSkatingJudge(
    request: UpdateFigureSkatingJudgeRequest
  ): Promise<PartialMessage<UpdateFigureSkatingJudgeResponse>> {
    const payload = new UpdateFigureSkatingJudgePayload(request)

    await this.validator.validate(payload)

    const command = new UpdateFigureSkatingJudgeCommand(
      payload.judgeId,
      payload.rank,
      payload.rankOrderDate
    )

    await this.commandBus.execute(command)

    return new UpdateFigureSkatingJudgeSerializer(
      await this.queryBus.execute<GetFigureSkatingJudgeByIdQuery, FigureSkatingJudge>(
        new GetFigureSkatingJudgeByIdQuery(command.judgeId)
      )
    )
  }
}
