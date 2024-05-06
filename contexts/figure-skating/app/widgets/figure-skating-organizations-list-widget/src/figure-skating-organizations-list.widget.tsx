import type { ReactElement }                          from 'react'

import React, { useEffect }                                          from 'react'

import { useLoadFigureSkatingOrganizationsEvents }         from '@figure-skating/load-figure-skating-organizations-feature'
import { useFigureSkatingOrganizations }         from '@figure-skating/figure-skating-organization-entity'
import { OrganizationListItemCard }         from '@figure-skating/organization-entity'
import { Card, CardDivider } from '@ui/card'

export const FigureSkatingOrganizationsListWidget = (): ReactElement => {
  const { organizations } = useFigureSkatingOrganizations()
  const loadFigureSkatingOrganizations = useLoadFigureSkatingOrganizationsEvents()

  useEffect(() => {
    if (organizations.length === 0) {
      loadFigureSkatingOrganizations()
    }
  }, [organizations, loadFigureSkatingOrganizations])

  return (
    <Card>
      {organizations.map((organization) => (
        <>
          <OrganizationListItemCard key={organization.id} {...organization} />
          <CardDivider />
        </>
      ))}
    </Card>
  )
}
