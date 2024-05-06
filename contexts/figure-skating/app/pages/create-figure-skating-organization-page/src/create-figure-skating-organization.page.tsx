'use client'

import { ReactElement }                          from 'react'
import React                                     from 'react'

import { CreateFigureSkatingOrganizationWidget } from '@figure-skating/create-figure-skating-organization-widget'
import { Layout }                                from '@ui/layout'
import { Row }                                   from '@ui/layout'

export const CreateFigureSkatingOrganizationPage = (): ReactElement => (
  <Row>
    <Layout width={['100%', '80x', '80x']}>
      <CreateFigureSkatingOrganizationWidget />
    </Layout>
  </Row>
)
