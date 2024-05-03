import { registerEnumType }     from '@nestjs/graphql'

import { OrganizationCategory } from '@organizations/client-module'

registerEnumType(OrganizationCategory, {
  name: 'OrganizationCategory',
})

export { OrganizationCategory }
