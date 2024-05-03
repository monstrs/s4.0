import type { DynamicModule }          from '@nestjs/common'

import { Module }                      from '@nestjs/common'

import { createClient }                from '@figure-skating/rpc-client'

import { FIGURE_SKATING_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class FigureSkatingClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: FigureSkatingClientCoreModule,
      providers: [
        {
          provide: FIGURE_SKATING_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: FIGURE_SKATING_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
