import type { DynamicModule }               from '@nestjs/common'

import { Module }                           from '@nestjs/common'

import { FigureSkatingServiceConfigModule } from './figure-skating-service-config.module.js'
import { FigureSkatingServiceCoreModule }   from './figure-skating-service-core.module.js'

@Module({})
export class FigureSkatingServiceEntrypointModule {
  static build(): DynamicModule {
    return {
      module: FigureSkatingServiceEntrypointModule,
      imports: [
        FigureSkatingServiceConfigModule.register(),
        FigureSkatingServiceCoreModule.register(),
      ],
    }
  }
}
