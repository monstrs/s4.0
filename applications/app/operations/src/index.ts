import { GraphQLClient } from 'graphql-request'
import { getDomain }     from 'tldjs'

import { getSdk }        from './sdk.js'

const getEndpoint = (): string => {
  return 'http://localhost:3000'
  
  if (typeof window === 'undefined') {
    return process.env.GATEWAY_URL || process.env.NEXT_PUBLIC_GATEWAY_URL!
  }

  const { hostname, protocol } = window.location

  const domain: string | null = getDomain(hostname)

  if (!domain) {
    // throw new Error('Unknown domain')
    return 'http://localhost:3000'
  }

  return `${protocol}//gateway.${domain}`
}

const client = new GraphQLClient(getEndpoint(), {
  credentials: 'include',
})

export default getSdk(client)

export * from './sdk.js'
