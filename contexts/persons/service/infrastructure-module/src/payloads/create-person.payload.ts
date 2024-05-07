import type { CreatePersonRequest } from '@persons/rpc/interfaces'

import { IsDate }                   from 'class-validator'
import { IsNotEmpty }               from 'class-validator'
import { IsString }                 from 'class-validator'
import { IsEnum }                   from 'class-validator'

import { Gender }                   from '@persons/rpc/interfaces'

export class CreatePersonPayload {
  constructor(private readonly request: CreatePersonRequest) {}

  @IsString()
  @IsNotEmpty()
  get firstName(): string {
    return this.request.firstName
  }

  @IsString()
  @IsNotEmpty()
  get lastName(): string {
    return this.request.lastName
  }

  @IsString()
  @IsNotEmpty()
  get patronymic(): string {
    return this.request.patronymic
  }

  @IsEnum(Gender)
  get gender(): Gender {
    return this.request.gender
  }

  @IsDate()
  get birthday(): Date {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    return this.request.birthday?.toDate()!
  }
}
