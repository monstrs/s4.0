import { entities as organizationsEntities } from '@organizations/infrastructure-module'
import { entities as personsEntities }       from '@persons/infrastructure-module'

export const entities = {
  ...personsEntities,
  ...organizationsEntities,
}
