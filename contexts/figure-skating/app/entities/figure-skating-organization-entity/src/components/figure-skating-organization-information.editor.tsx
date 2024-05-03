import type { ReactElement }                    from 'react'

import type { FigureSkatingOrganizationErrors } from '../interfaces/index.js'

import React                                    from 'react'

import { Card }                                 from '@ui/card'
import { CardDivider }                          from '@ui/card'
import { CheckboxGroup }                        from '@ui/checkbox'
import { Checkbox }                             from '@ui/checkbox'
import { WarningFilledIcon }                    from '@ui/icons'
import { Input }                                from '@ui/input'
import { Label }                                from '@ui/label'
import { Row }                                  from '@ui/layout'
import { Column }                               from '@ui/layout'
import { Layout }                               from '@ui/layout'
import { Select }                               from '@ui/select'
import { Text }                                 from '@ui/text'

import { FigureSkatingDisciplines }             from '../enums/index.js'

export interface FigureSkatingOrganizationInformationEditorProps {
  cityId: string
  address: string
  phone: string
  inn: string
  additionalInformation?: string
  applicantJobTitle: string
  applicantPhone: string
  disciplines: Array<FigureSkatingDisciplines>
  errors: FigureSkatingOrganizationErrors
  onChangeCityId: (city: string) => void
  onChangeAddress: (address: string) => void
  onChangePhone: (phone: string) => void
  onChangeInn: (inn: string) => void
  onChangeAdditionalInformation: (additionalInformation: string) => void
  onChangeApplicantJobTitle: (applicantJobTitle: string) => void
  onChangeApplicantPhone: (applicantPhone: string) => void
  onChangeDisciplines: (disciplines: Array<FigureSkatingDisciplines>) => void
}

export const FigureSkatingOrganizationInformationEditor = ({
  cityId,
  address,
  phone,
  inn,
  additionalInformation,
  applicantJobTitle,
  applicantPhone,
  disciplines,
  errors,
  onChangeCityId,
  onChangeAddress,
  onChangePhone,
  onChangeInn,
  onChangeAdditionalInformation,
  onChangeApplicantJobTitle,
  onChangeApplicantPhone,
  onChangeDisciplines,
}: FigureSkatingOrganizationInformationEditorProps): ReactElement => (
  <Card>
    <Column>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-city'>Город</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Select<string>
              id='organization-information-city'
              style={{ width: '100%' }}
              options={[]}
              value={cityId}
              status={errors.cityId && 'error'}
              onChange={onChangeCityId}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-address'>Адрес фактический</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-information-address'
              placeholder='Укажите адрес без города'
              value={address}
              status={errors.address && 'error'}
              suffix={errors.address && <WarningFilledIcon color='red' />}
              onChange={(event) => {
                onChangeAddress(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-phone'>Телефон</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-information-phone'
              placeholder='+7 (123) 456-78-90'
              value={phone}
              status={errors.phone && 'error'}
              suffix={errors.phone && <WarningFilledIcon color='red' />}
              onChange={(event) => {
                onChangePhone(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-inn'>ИНН</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-information-inn'
              value={inn}
              status={errors.inn && 'error'}
              suffix={errors.inn && <WarningFilledIcon color='red' />}
              onChange={(event) => {
                onChangeInn(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout>
        <CardDivider />
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-additional-information'>Доп. информация</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-information-additional-information'
              placeholder='Которая может быть полезна вашим клиентам'
              value={additionalInformation}
              onChange={(event) => {
                onChangeAdditionalInformation(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout>
        <CardDivider />
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-applicant'>Доп. информация</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Text>------</Text>
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-applicant-job-title'>Должность</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-information-applicant-job-title'
              placeholder='Укажите должность'
              value={applicantJobTitle}
              status={errors.applicantJobTitle && 'error'}
              suffix={errors.applicantJobTitle && <WarningFilledIcon color='red' />}
              onChange={(event) => {
                onChangeApplicantJobTitle(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-applicant-phone'>Контакты</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-information-applicant-phone'
              placeholder='+7 (123) 456-78-90'
              value={applicantPhone}
              status={errors.applicantPhone && 'error'}
              suffix={errors.applicantPhone && <WarningFilledIcon color='red' />}
              onChange={(event) => {
                onChangeApplicantPhone(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout>
        <CardDivider />
      </Layout>
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-information-disciplines'>Дисциплины</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <CheckboxGroup value={disciplines} onChange={onChangeDisciplines}>
              <Column>
                <Layout my='0.5x'>
                  <Checkbox value={FigureSkatingDisciplines.Single}>одиночное катание</Checkbox>
                </Layout>
                <Layout my='0.5x'>
                  <Checkbox value={FigureSkatingDisciplines.Pair}>парное катание</Checkbox>
                </Layout>
                <Layout my='0.5x'>
                  <Checkbox value={FigureSkatingDisciplines.Synchronous}>
                    синхронное катание
                  </Checkbox>
                </Layout>
                <Layout my='0.5x'>
                  <Checkbox value={FigureSkatingDisciplines.Dance}>танцы на льду</Checkbox>
                </Layout>
                <Layout my='0.5x'>
                  <Checkbox value={FigureSkatingDisciplines.Collective}>
                    коллективы/балеты на льду
                  </Checkbox>
                </Layout>
              </Column>
            </CheckboxGroup>
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Card>
)
