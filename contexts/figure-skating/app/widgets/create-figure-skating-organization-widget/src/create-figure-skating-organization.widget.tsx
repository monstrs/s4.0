import type { ReactElement }                          from 'react'

import React                                          from 'react'

import { FigureSkatingOrganizationInformationEditor } from '@organizations/figure-skating-organization-entity'
import { OrganizationEditor }                         from '@organizations/organization-entity'
import { Button }                                     from '@ui/button'
import { Card }                                       from '@ui/card'
import { Column }                                     from '@ui/layout'
import { Row }                                        from '@ui/layout'
import { Layout }                                     from '@ui/layout'
import { Tabs }                                       from '@ui/tabs'
import { useCreateFigureSkatingOrganization }         from '@organizations/edit-organization-feature'
import { useFigureSkatingOrganizationFields }         from '@organizations/figure-skating-organization-entity'
import { useChangeFigureSkatingOrganizationFields }   from '@organizations/figure-skating-organization-entity'
import { useFigureSkatingOrganizationErrors }         from '@organizations/figure-skating-organization-entity'
import { useOrganizationFields }                      from '@organizations/organization-entity'
import { useChangeOrganizationFields }                from '@organizations/organization-entity'
import { useOrganizationErrors }                      from '@organizations/organization-entity'

export const CreateFigureSkatingOrganizationWidget = (): ReactElement => {
  const organizationfields = useOrganizationFields()
  const figureSkatingOrganizationFields = useFigureSkatingOrganizationFields()
  const organizationCallbacks = useChangeOrganizationFields()
  const figureSkatingOrganizationCallbacks = useChangeFigureSkatingOrganizationFields()
  const figureSkatingOrganizationErrors = useFigureSkatingOrganizationErrors()
  const organizationErrors = useOrganizationErrors()
  const createFigureSkatingOrganization = useCreateFigureSkatingOrganization()

  return (
    <Column>
      <Layout>
        <OrganizationEditor
          {...organizationfields}
          {...organizationCallbacks}
          errors={organizationErrors}
        />
      </Layout>
      <Layout my='2x'>
        <Card>
          <Tabs items={[{ key: 'info', label: 'Информация', children: null }]} />
        </Card>
      </Layout>
      <Layout>
        <FigureSkatingOrganizationInformationEditor
          {...figureSkatingOrganizationFields}
          {...figureSkatingOrganizationCallbacks}
          errors={figureSkatingOrganizationErrors}
        />
      </Layout>
      <Layout>
        <Card>
          <Row my='2x'>
            <Layout flexGrow={1} />
            <Layout>
              <Button>Отмена</Button>
            </Layout>
            <Layout mx='2x'>
              <Button type='primary' onClick={createFigureSkatingOrganization}>
                Сохранить
              </Button>
            </Layout>
          </Row>
        </Card>
      </Layout>
    </Column>
  )
}
