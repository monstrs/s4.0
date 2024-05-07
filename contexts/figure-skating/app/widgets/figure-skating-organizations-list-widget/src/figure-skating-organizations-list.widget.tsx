import type { ReactElement }                       from 'react'

import { useEffect }                               from 'react'
import React                                       from 'react'

import { OrganizationListItemCard }                from '@figure-skating/organization-entity'
import { Card }                                    from '@ui/card'
import { CardDivider }                             from '@ui/card'
import { useFigureSkatingOrganizations }           from '@figure-skating/figure-skating-organization-entity'
import { useLoadFigureSkatingOrganizationsEvents } from '@figure-skating/load-figure-skating-organizations-feature'

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
