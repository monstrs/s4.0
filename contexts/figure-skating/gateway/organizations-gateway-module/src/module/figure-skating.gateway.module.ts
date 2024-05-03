import type { DynamicModule }        from '@nestjs/common'

import { Module }                    from '@nestjs/common'

import { FigureSkatingClientModule } from '@figure-skating/client-module'

import * as mutations                from '../mutations/index.js'
import * as queries                  from '../queries/index.js'
import * as resolvers                from '../resolvers/index.js'

@Module({})
export class FigureSkatingGatewayModule {
  static register(): DynamicModule {
    return {
      module: FigureSkatingGatewayModule,
      imports: [FigureSkatingClientModule.attach()],
      providers: [
        ...Object.values(resolvers),
        ...Object.values(mutations),
        ...Object.values(queries),
      ],
    }
  }
}
