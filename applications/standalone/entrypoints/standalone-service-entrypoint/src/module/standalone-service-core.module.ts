import type { DynamicModule }                from '@nestjs/common'

import { Module }                            from '@nestjs/common'

import { OrganizationsGatewayModule }        from '@organizations/gateway-module'
import { OrganizationsInfrastructureModule } from '@organizations/infrastructure-module'
import { PersonsInfrastructureModule }       from '@persons/infrastructure-module'

@Module({})
export class StandaloneServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: StandaloneServiceCoreModule,
      imports: [
        PersonsInfrastructureModule.register(),
        OrganizationsInfrastructureModule.register(),
        OrganizationsGatewayModule.register(),
      ],
    }
  }
}
