import type { DynamicModule }                from '@nestjs/common'

import { Module }                            from '@nestjs/common'

import { FigureSkatingGatewayModule }        from '@figure-skating/gateway-module'
import { FigureSkatingInfrastructureModule } from '@figure-skating/infrastructure-module'
import { PersonsInfrastructureModule }       from '@persons/infrastructure-module'

@Module({})
export class StandaloneServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: StandaloneServiceCoreModule,
      imports: [
        PersonsInfrastructureModule.register(),
        FigureSkatingInfrastructureModule.register(),
        FigureSkatingGatewayModule.register(),
      ],
    }
  }
}
