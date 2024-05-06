import React, { ReactElement } from 'react'

import { Column, Row, Layout } from '@ui/layout'
import { Text } from '@ui/text'

import { OrganizationCategoryView } from './organization-category.jsx'
import { OrganizationCategory } from '../enums/index.js'

export interface FigureSkatingOrganizationListItemCardProps {
    fullName: string
    category: OrganizationCategory
}

export const OrganizationListItemCard = ({ fullName, category }: FigureSkatingOrganizationListItemCardProps): ReactElement => (
  <Row p='1x'>
    <Layout width='8x' height='8x'>

    </Layout>
    <Layout flexGrow={1} pl='1x' alignItems='center'>
        <Column>
            <Layout>
                <Text color='sGray' fontSize='tiny'>{fullName}</Text>
            </Layout>
            <Layout mt='1x'>
              <Row flexDirection={['column', 'row', 'row']}>
                  <Layout mb='0.5x'>
                <Text color='mGray' fontSize='puny'><OrganizationCategoryView>{category}</OrganizationCategoryView></Text>
                </Layout>
                <Layout mx='1x' display={['none', 'flex', 'flex']}>
                  <Text color='sGray' fontSize='puny'>•</Text>
                </Layout>
                <Layout mb='0.5x'>
                <Text color='mGray' fontSize='puny'>Москва</Text>
                </Layout>
                <Layout mx='1x' display={['none', 'flex', 'flex']}>
                  <Text color='sGray' fontSize='puny'>•</Text>
                </Layout>
                <Layout mb='0.5x'>
                <Text color='mGray' fontSize='puny'>0 тренеров</Text>
                </Layout>
                <Layout mx='1x' display={['none', 'flex', 'flex']}>
                  <Text color='sGray' fontSize='puny'>•</Text>
                </Layout>
                <Layout mb='0.5x'>
                <Text color='mGray' fontSize='puny'>0 спортсменов</Text>
                </Layout>
              </Row>
            </Layout>
        </Column>
    </Layout>
  </Row>
)