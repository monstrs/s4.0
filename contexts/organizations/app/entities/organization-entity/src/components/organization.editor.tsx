import type { ReactElement }         from 'react'
import React                    from 'react'

import { Card }                 from '@ui/card'
import { CardDivider }          from '@ui/card'
import { DatePicker }           from '@ui/datepicker'
import { Input }                from '@ui/input'
import { Label }                from '@ui/label'
import { Row }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Select }               from '@ui/select'
import { Text }                 from '@ui/text'

import { OrganizationCategory } from '../enums/index.js'

export interface OrganizationEditorProps {
  fullName: string
  abbreviation: string
  websiteName: string
  listName: string
  foundingDate?: Date
  category?: OrganizationCategory
  curatorId?: string
  onChangeFullName: (fullname: string) => void
  onChangeAbbreviation: (abbreviation: string) => void
  onChangeWebsiteName: (websiteName: string) => void
  onChangeListName: (listName: string) => void
  onChangeFoundingDate: (foundingDate: Date) => void
  onChangeCategory: (cateogory: OrganizationCategory) => void
  onChangeCuratorId: (curator: string) => void
}

export const OrganizationEditor = ({
  fullName,
  abbreviation,
  websiteName,
  listName,
  foundingDate,
  category,
  curatorId,
  onChangeFullName,
  onChangeAbbreviation,
  onChangeWebsiteName,
  onChangeListName,
  onChangeFoundingDate,
  onChangeCategory,
  onChangeCuratorId,
}: OrganizationEditorProps): ReactElement => (
  <Card>
    <Column>
      <Layout flexBasis='6x' px='3x' alignItems='center'>
        <Text fontSize='tiny' fontWeight='semibold'>
          Добавление организации
        </Text>
      </Layout>
      <Layout>
        <CardDivider />
      </Layout>
      <Layout flexBasis='1x' />
      <Layout px='3x' py='1x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label
              htmlFor='organization-full-name'
              info={{
                overlayInnerStyle: { width: '535px' },
                placement: 'bottom',
                title: (
                  <div>
                    <p>Укажите полное официальное название вашей организации.</p>
                    <p>
                      Например:
                      <br />
                      ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ГОРОДА МОСКВЫ "ЦЕНТР
                      СПОРТА И ОБРАЗОВАНИЯ "САМБО-70" ДЕПАРТАМЕНТА СПОРТА ГОРОДА МОСКВЫ
                    </p>
                  </div>
                ),
              }}
            >
              Название полное
            </Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-full-name'
              value={fullName}
              onChange={(event) => {
                onChangeFullName(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1.5x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label
              htmlFor='organization-abbreviation'
              info={{
                overlayInnerStyle: { width: '535px' },
                placement: 'bottom',
                title: (
                  <div>
                    <p>Укажите сокращенное официальное название вашей организации.</p>
                    <p>
                      Например:
                      <br />
                      ГБОУ "ЦСИО САМБО-70" МОСКОМСПОРТА
                    </p>
                  </div>
                ),
              }}
            >
              Сокращенное
            </Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-abbreviation'
              value={abbreviation}
              onChange={(event) => {
                onChangeAbbreviation(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1.5x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label
              htmlFor='organization-website-name'
              info={{
                overlayInnerStyle: { width: '535px' },
                placement: 'bottom',
                title: (
                  <div>
                    <ul>
                      <li>Укажите название без ООО/ГБОУ/АНО и прочего.</li>
                      <li>Все сокращения ДЮСШ, ЦХГ, СК расшифруйте.</li>
                      <li>
                        Если в организации есть другие отделения (секции) по такому же виду спорта,
                        дополнительно укажите название вашего отделения (секции)
                      </li>
                      <li>НЕ ИСПОЛЬЗУЙТЕ CAPS LOCK!</li>
                    </ul>
                    <p>
                      Например:
                      <br />
                      Центр спорта и образования "Самбо-70", отделение "Хрустальный"
                    </p>
                  </div>
                ),
              }}
            >
              Для сайта
            </Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-website-name'
              value={websiteName}
              onChange={(event) => {
                onChangeWebsiteName(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1.5x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label
              htmlFor='organization-list-name'
              info={{
                placement: 'bottom',
                title: (
                  <div>
                    <p>
                      Например:
                      <br />
                      ДЮСШ №74
                      <br />
                      ЦГ И. Винер-Усмановой
                      <br />
                      СК "Олимпия"
                      <br />
                      Хрустальный (Самбо-70)
                    </p>
                  </div>
                ),
              }}
            >
              Для списка
            </Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Input
              id='organization-list-name'
              value={listName}
              onChange={(event) => {
                onChangeListName(event.target.value)
              }}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1.5x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-founding-date'>Дата основания</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <DatePicker
              id='organization-founding-date'
              value={foundingDate}
              onChange={onChangeFoundingDate}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout py='1x'>
        <CardDivider />
      </Layout>
      <Layout px='3x' py='1.5x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label htmlFor='organization-category'>Категория</Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Select<OrganizationCategory>
              id='organization-category'
              style={{ width: '100%' }}
              placeholder='выбрать...'
              value={category}
              options={[
                {
                  value: OrganizationCategory.School,
                  label: 'школа/клуб',
                },
                {
                  value: OrganizationCategory.Federation,
                  label: 'ассоциация/федерация',
                },
                {
                  value: OrganizationCategory.Society,
                  label: 'общество',
                },
                {
                  value: OrganizationCategory.Other,
                  label: 'прочее',
                },
              ]}
              onChange={onChangeCategory}
            />
          </Layout>
        </Row>
      </Layout>
      <Layout px='3x' py='1.5x'>
        <Row flexDirection={['column', 'row', 'row']}>
          <Layout
            flexBasis={['100%', '30%', '30%']}
            maxWidth={['100%', '30%', '30%']}
            pb={['1x', '0x', '0x']}
            pr='1x'
            alignItems='center'
          >
            <Label
              htmlFor='organization-curator'
              info={{
                title: (
                  <div>
                    <p>
                      Выберите курирующую вас федерацию или ассоциацию. Она будет согласовывать вашу
                      заявку на добавление организации в систему.
                    </p>
                    <p>
                      Если вашего куратора нет в списке – вашу заявку будет согласовывать
                      администрация сайта "Спорт вокруг."
                    </p>
                  </div>
                ),
              }}
            >
              Куратор
            </Label>
          </Layout>
          <Layout flexBasis='70%'>
            <Select<string>
              id='organization-curator'
              style={{ width: '100%' }}
              placeholder='выбрать...'
              options={[]}
              value={curatorId}
              onChange={onChangeCuratorId}
            />
          </Layout>
        </Row>
      </Layout>
    </Column>
  </Card>
)
