import type { DynamicModule }                from '@nestjs/common'

import { Module }                            from '@nestjs/common'

import { FigureSkatingInfrastructureModule } from '@figure-skating/infrastructure-module'

@Module({})
export class FigureSkatingServiceCoreModule {
  static register(): DynamicModule {
    return {
      module: FigureSkatingServiceCoreModule,
      imports: [FigureSkatingInfrastructureModule.register()],
    }
  }
}
