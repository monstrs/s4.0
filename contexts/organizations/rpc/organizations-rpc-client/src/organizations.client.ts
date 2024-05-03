import type { PromiseClient }   from '@connectrpc/connect'

import { createPromiseClient }  from '@connectrpc/connect'
import { createGrpcTransport }  from '@connectrpc/connect-node'

import { OrganizationsService } from '@organizations/rpc'

export const createClient = (options = {}): PromiseClient<typeof OrganizationsService> =>
  createPromiseClient(
    OrganizationsService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.ORGANIZATIONS_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
