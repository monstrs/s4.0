import type { PromiseClient }  from '@connectrpc/connect'

import { createPromiseClient } from '@connectrpc/connect'
import { createGrpcTransport } from '@connectrpc/connect-node'

import { PersonsService }      from '@persons/rpc'

export const createClient = (options = {}): PromiseClient<typeof PersonsService> =>
  createPromiseClient(
    PersonsService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.PERSONS_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
