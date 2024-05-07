import type { LoadFigureSkatingOrganizationsQuery } from '@app/operations'

import { createEffect }                             from 'effector'
import { sample }                                   from 'effector'

import { figureSkatingOrganizationsLoadedEvent }    from '@figure-skating/figure-skating-organization-entity'
import operations                                   from '@app/operations'

export const loadFigureSkatingOrganizationsFx = createEffect(async (): Promise<
  LoadFigureSkatingOrganizationsQuery['organizations']['figureSkating']
> => {
  const { organizations } = await operations.loadFigureSkatingOrganizations()

  return organizations.figureSkating
})

sample({
  // @ts-expect-error
  clock: loadFigureSkatingOrganizationsFx.doneData,
  target: figureSkatingOrganizationsLoadedEvent,
})
