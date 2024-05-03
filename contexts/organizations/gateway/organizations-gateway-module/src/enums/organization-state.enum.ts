import { registerEnumType }  from '@nestjs/graphql'

import { OrganizationState } from '@organizations/client-module'

registerEnumType(OrganizationState, {
  name: 'OrganizationState',
})

export { OrganizationState }
