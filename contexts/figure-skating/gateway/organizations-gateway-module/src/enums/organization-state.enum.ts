import { registerEnumType }  from '@nestjs/graphql'

import { OrganizationState } from '@figure-skating/client-module'

registerEnumType(OrganizationState, {
  name: 'OrganizationState',
})

export { OrganizationState }
