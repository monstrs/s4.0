import { entities as figureSkatingEntities } from '@figure-skating/infrastructure-module'
import { entities as personsEntities }       from '@persons/infrastructure-module'

export const entities = {
  ...personsEntities,
  ...figureSkatingEntities,
}
