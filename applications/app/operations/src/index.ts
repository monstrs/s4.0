import { GraphQLClient } from 'graphql-request'

import { getSdk }        from './sdk.js'

const getEndpoint = (): string => {
  if (typeof window === 'undefined') {
    return process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:3000'
  }

  return 'http://localhost:3000'
}

const client = new GraphQLClient(getEndpoint(), {
  credentials: 'include',
})

export default getSdk(client)

export * from './sdk.js'
