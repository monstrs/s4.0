import type { ReactElement }                  from 'react'

import { EffectorNext }                       from '@effector/next'
import { allSettled }                         from 'effector'
import { fork }                               from 'effector'
import { serialize }                          from 'effector'
import React                                  from 'react'

import { FigureSkatingOrganizationsListPage } from '@figure-skating/figure-skating-organizations-list-page'
import { loadFigureSkatingOrganizationsFx }   from '@figure-skating/load-figure-skating-organizations-feature'

export default async (): Promise<ReactElement> => {
  const scope = fork()

  await allSettled(loadFigureSkatingOrganizationsFx, { scope })

  return (
    <EffectorNext values={serialize(scope)}>
      <FigureSkatingOrganizationsListPage />
    </EffectorNext>
  )
}
