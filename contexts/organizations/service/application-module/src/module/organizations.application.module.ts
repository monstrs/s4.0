import type { DynamicModule } from '@nestjs/common'

import { Module }             from '@nestjs/common'

import * as commandhandlers   from '../command-handlers/index.js'
import * as queryhandlers     from '../query-handlers/index.js'

@Module({})
export class OrganizationsApplicationModule {
  static register(): DynamicModule {
    return {
      module: OrganizationsApplicationModule,
      providers: [...Object.values(commandhandlers), ...Object.values(queryhandlers)],
      exports: [...Object.values(commandhandlers), ...Object.values(queryhandlers)],
    }
  }
}
