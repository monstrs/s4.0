import type { DynamicModule }            from '@nestjs/common'

import { Module }                        from '@nestjs/common'

import * as dataloaders                  from '../dataloaders/index.js'
import { FigureSkatingClient }           from '../client/index.js'
import { FigureSkatingClientCoreModule } from './figure-skating-client.core.module.js'

@Module({})
export class FigureSkatingClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: FigureSkatingClientModule,
      imports: [FigureSkatingClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: FigureSkatingClientModule,
      providers: [FigureSkatingClient, ...Object.values(dataloaders)],
      exports: [FigureSkatingClient],
    }
  }
}
