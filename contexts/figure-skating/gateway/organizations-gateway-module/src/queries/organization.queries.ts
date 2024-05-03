import { Injectable }    from '@nestjs/common'
import { Query }         from '@nestjs/graphql'

import { Organizations } from '../types/index.js'

@Injectable()
export class OrganizationQueries {
  @Query(() => Organizations)
  organizations(): object {
    return {}
  }
}
