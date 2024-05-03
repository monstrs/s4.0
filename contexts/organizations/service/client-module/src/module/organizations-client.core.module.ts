import type { DynamicModule }         from '@nestjs/common'

import { Module }                     from '@nestjs/common'

import { createClient }               from '@organizations/rpc-client'

import { ORGANIZATIONS_CLIENT_TOKEN } from '../constants/index.js'

@Module({})
export class OrganizationsClientCoreModule {
  static register(
    options: { baseUrl?: string; idleConnectionTimeoutMs?: number } = {}
  ): DynamicModule {
    return {
      global: true,
      module: OrganizationsClientCoreModule,
      providers: [
        {
          provide: ORGANIZATIONS_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
      exports: [
        {
          provide: ORGANIZATIONS_CLIENT_TOKEN,
          useValue: createClient(options),
        },
      ],
    }
  }
}
