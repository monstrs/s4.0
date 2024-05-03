import type { DynamicModule }        from '@nestjs/common'

import { Module }                    from '@nestjs/common'

import { OrganizationsClientModule } from '@organizations/client-module'

import * as mutations                from '../mutations/index.js'
import * as queries                  from '../queries/index.js'
import * as resolvers                from '../resolvers/index.js'

@Module({})
export class OrganizationsGatewayModule {
  static register(): DynamicModule {
    return {
      module: OrganizationsGatewayModule,
      imports: [OrganizationsClientModule.attach()],
      providers: [
        ...Object.values(resolvers),
        ...Object.values(mutations),
        ...Object.values(queries),
      ],
    }
  }
}
