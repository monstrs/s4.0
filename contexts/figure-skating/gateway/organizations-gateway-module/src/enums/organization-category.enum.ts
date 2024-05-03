import { registerEnumType }     from '@nestjs/graphql'

import { OrganizationCategory } from '@figure-skating/client-module'

registerEnumType(OrganizationCategory, {
  name: 'OrganizationCategory',
})

export { OrganizationCategory }
