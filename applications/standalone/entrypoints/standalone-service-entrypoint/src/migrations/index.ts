import { migrations as figureSkatingMigrations } from '@figure-skating/infrastructure-module'
import { migrations as personsMigrations }       from '@persons/infrastructure-module'

export const migrations = {
  ...personsMigrations,
  ...figureSkatingMigrations,
}
