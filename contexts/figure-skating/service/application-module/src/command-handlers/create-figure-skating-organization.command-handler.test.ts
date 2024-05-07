import { Test }                                          from '@nestjs/testing'
import { faker }                                         from '@faker-js/faker'
import { describe }                                      from '@jest/globals'
import { beforeEach }                                    from '@jest/globals'
import { afterEach }                                     from '@jest/globals'
import { it }                                            from '@jest/globals'
import { jest }                                          from '@jest/globals'
import { expect }                                        from '@jest/globals'

import { FigureSkatingDisciplines }                      from '@common/domain-module'
import { OrganizationCategory }                          from '@figure-skating/domain-module'
import { FigureSkatingOrganization }                     from '@figure-skating/domain-module'

import { CreateFigureSkatingOrganizationCommand }        from '../commands/create-figure-skating-organization.command.js'
import { FigureSkatingOrganizationRepository }           from '../repositories/index.js'
import { CreateFigureSkatingOrganizationCommandHandler } from './create-figure-skating-organization.command-handler.js'

describe('figure-skating', () => {
  describe('application', () => {
    describe('create-figure-skating-organization.command-handler', () => {
      let repository: FigureSkatingOrganizationRepository
      let handler: CreateFigureSkatingOrganizationCommandHandler

      beforeEach(async () => {
        const testModule = await Test.createTestingModule({
          providers: [
            CreateFigureSkatingOrganizationCommandHandler,
            {
              provide: FigureSkatingOrganizationRepository,
              useValue: {
                async save(): Promise<void> {
                  return Promise.resolve()
                },
              },
            },
          ],
        }).compile()

        repository = testModule.get(FigureSkatingOrganizationRepository)
        handler = testModule.get(CreateFigureSkatingOrganizationCommandHandler)
      })

      afterEach(() => {
        jest.resetAllMocks()
      })

      it('check create figure skating organization', async () => {
        const command = new CreateFigureSkatingOrganizationCommand(
          faker.string.uuid(),
          faker.string.sample(),
          faker.string.sample(),
          faker.string.sample(),
          faker.string.sample(),
          faker.date.past(),
          OrganizationCategory.SCHOOL,
          faker.string.uuid(),
          faker.location.streetAddress(),
          faker.phone.number(),
          '020944781396',
          faker.string.uuid(),
          faker.string.sample(),
          faker.phone.number(),
          [],
          [FigureSkatingDisciplines.SINGLE],
          [],
          faker.string.uuid(),
          faker.string.uuid()
        )

        jest
          .spyOn(repository, 'save')
          .mockImplementation(async () => new FigureSkatingOrganization())

        await expect(handler.execute(command)).resolves.toEqual(undefined)

        expect(repository.save).toBeCalledWith(
          expect.objectContaining({
            id: command.organizationId,
            fullName: command.fullName,
            abbreviation: command.abbreviation,
            websiteName: command.websiteName,
            listName: command.listName,
            foundingDate: command.foundingDate,
            category: command.category,
            cityId: command.cityId,
            address: command.address,
            phone: command.phone,
            inn: command.inn,
            applicantId: command.applicantId,
            applicantJobTitle: command.applicantJobTitle,
            applicantPhone: command.applicantPhone,
            disciplines: command.disciplines,
          })
        )
      })
    })
  })
})
