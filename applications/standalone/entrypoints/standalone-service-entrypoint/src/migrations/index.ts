import { migrations as organizationsMigrations } from '@organizations/infrastructure-module'
import { migrations as personsMigrations }       from '@persons/infrastructure-module'

export const migrations = {
  ...personsMigrations,
  ...organizationsMigrations,
}
