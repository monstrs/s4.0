'use client'

import { ReactElement }                          from 'react'
import React                                     from 'react'

import { FigureSkatingOrganizationsListWidget } from '@figure-skating/figure-skating-organizations-list-widget'
import { Layout }                                from '@ui/layout'
import { Row }                                   from '@ui/layout'

export const FigureSkatingOrganizationsListPage = (): ReactElement => (
  <Row flexDirection={['column', 'row', 'row']}>
    <Layout width={['100%', '30x', '30x']} />
    <Layout width={['100%', '80x', '80x']}>
      <FigureSkatingOrganizationsListWidget />
    </Layout>
  </Row>
)
