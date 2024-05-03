import type { DynamicModule }            from '@nestjs/common'

import { Module }                        from '@nestjs/common'

import * as dataloaders                  from '../dataloaders/index.js'
import { OrganizationsClient }           from '../client/index.js'
import { OrganizationsClientCoreModule } from './organizations-client.core.module.js'

@Module({})
export class OrganizationsClientModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      module: OrganizationsClientModule,
      imports: [OrganizationsClientCoreModule.register(options)],
    }
  }

  static attach(): DynamicModule {
    return {
      module: OrganizationsClientModule,
      providers: [OrganizationsClient, ...Object.values(dataloaders)],
      exports: [OrganizationsClient],
    }
  }
}
