import { faker }                     from '@faker-js/faker'
import { describe }                  from '@jest/globals'
import { it }                        from '@jest/globals'
import { expect }                    from '@jest/globals'

import { FigureSkatingDisciplines }  from '@common/domain-module'
import { OrganizationCategory }      from '@figure-skating/domain-module'
import { FigureSkatingOrganization } from '@figure-skating/domain-module'

describe('figure-skating', () => {
  describe('domain', () => {
    describe('figure-skating-organization', () => {
      it('check create figure skating organization', async () => {
        const organizationId = faker.string.uuid()
        const fullName = faker.string.sample()
        const abbreviation = faker.string.sample()
        const websiteName = faker.string.sample()
        const listName = faker.string.sample()
        const foundingDate = faker.date.past()
        const category = OrganizationCategory.SCHOOL
        const cityId = faker.string.uuid()
        const address = faker.location.streetAddress()
        const phone = faker.phone.number()
        const inn = '020944781396'
        const applicantId = faker.string.uuid()
        const applicantJobTitle = faker.string.sample()
        const applicantPhone = faker.phone.number()
        const disciplines = [FigureSkatingDisciplines.SINGLE]
        const charterId = faker.string.uuid()
        const registrationCertificateId = faker.string.uuid()

        const figureSkatingOrganization = new FigureSkatingOrganization().create(
          organizationId,
          fullName,
          abbreviation,
          websiteName,
          listName,
          foundingDate,
          category,
          cityId,
          address,
          phone,
          inn,
          applicantId,
          applicantJobTitle,
          applicantPhone,
          [],
          disciplines,
          [],
          charterId,
          registrationCertificateId
        )

        expect(figureSkatingOrganization.getUncommittedEvents()).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              organizationId,
              fullName,
              abbreviation,
              websiteName,
              listName,
              foundingDate,
              category,
              cityId,
              address,
              phone,
              inn,
              applicantId,
              applicantJobTitle,
              applicantPhone,
              disciplines,
              charterId,
              registrationCertificateId,
            }),
          ])
        )

        expect(figureSkatingOrganization).toEqual(
          expect.objectContaining({
            id: organizationId,
            fullName,
            abbreviation,
            websiteName,
            listName,
            foundingDate,
            category,
            cityId,
            address,
            phone,
            inn,
            applicantId,
            applicantJobTitle,
            applicantPhone,
            disciplines,
            charterId,
            registrationCertificateId,
          })
        )
      })
    })
  })
})
