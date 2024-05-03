import type { PromiseClient }   from '@connectrpc/connect'

import { createPromiseClient }  from '@connectrpc/connect'
import { createGrpcTransport }  from '@connectrpc/connect-node'

import { FigureSkatingService } from '@figure-skating/rpc'

export const createClient = (options = {}): PromiseClient<typeof FigureSkatingService> =>
  createPromiseClient(
    FigureSkatingService,
    createGrpcTransport({
      httpVersion: '2',
      baseUrl: process.env.FIGURE_SKATING_SERVICE_URL || 'http://0.0.0.0:50051',
      ...options,
    })
  )

export const client = createClient()
