import type { INestMicroservice }            from '@nestjs/common'
import type { StartedTestContainer }         from 'testcontainers'

import { MikroORM }                          from '@mikro-orm/core'
import { Migrator }                          from '@mikro-orm/migrations'
import { MikroOrmModule }                    from '@mikro-orm/nestjs'
import { PostgreSqlDriver }                  from '@mikro-orm/postgresql'
import { ConnectRpcServer }                  from '@monstrs/nestjs-connectrpc'
import { ServerProtocol }                    from '@monstrs/nestjs-connectrpc'
import { CqrsModule }                        from '@nestjs/cqrs'
import { Test }                              from '@nestjs/testing'
import { faker }                             from '@faker-js/faker'
import { describe }                          from '@jest/globals'
import { afterAll }                          from '@jest/globals'
import { beforeAll }                         from '@jest/globals'
import { expect }                            from '@jest/globals'
import { it }                                from '@jest/globals'
import { findValidationErrorDetails }        from '@monstrs/protobuf-rpc'
import { GenericContainer }                  from 'testcontainers'
import { Wait }                              from 'testcontainers'
import getPort                               from 'get-port'

import { Timestamp }                         from '@figure-skating/client-module'
import { FigureSkatingClientModule }         from '@figure-skating/client-module'
import { FigureSkatingClient }               from '@figure-skating/client-module'
import { OrganizationCategory }              from '@figure-skating/client-module'
import { FigureSkatingDisciplines }          from '@figure-skating/client-module'
import { FigureSkatingInfrastructureModule } from '@figure-skating/infrastructure-module'
import { entities }                          from '@figure-skating/infrastructure-module'
import { migrations }                        from '@figure-skating/infrastructure-module'

describe('figure skating', () => {
  describe('service', () => {
    describe('rpc', () => {
      let postgres: StartedTestContainer
      let service: INestMicroservice
      let client: FigureSkatingClient

      beforeAll(async () => {
        postgres = await new GenericContainer('bitnami/postgresql')
          .withWaitStrategy(Wait.forLogMessage('database system is ready to accept connections'))
          .withEnvironment({
            POSTGRESQL_PASSWORD: 'password',
            POSTGRESQL_DATABASE: 'db',
          })
          .withExposedPorts(5432)
          .start()

        const port = await getPort()

        const testingModule = await Test.createTestingModule({
          imports: [
            CqrsModule.forRoot(),
            FigureSkatingInfrastructureModule.register(),
            MikroOrmModule.forRoot({
              driver: PostgreSqlDriver,
              port: postgres.getMappedPort(5432),
              dbName: 'db',
              user: 'postgres',
              password: 'password',
              entities: Object.values(entities),
              forceUndefined: true,
              migrations: {
                disableForeignKeys: false,
                migrationsList: Object.keys(migrations).map((name: string) => ({
                  class: migrations[name as keyof typeof migrations],
                  name,
                })),
              },
              extensions: [Migrator],
            }),
            FigureSkatingClientModule.register({
              baseUrl: `http://localhost:${port}`,
              idleConnectionTimeoutMs: 1000,
            }),
            FigureSkatingClientModule.attach(),
          ],
        }).compile()

        await testingModule.get(MikroORM).getMigrator().up()

        service = testingModule.createNestMicroservice({
          strategy: new ConnectRpcServer({
            protocol: ServerProtocol.HTTP2_INSECURE,
            port,
          }),
        })

        await service.listen()

        client = testingModule.get(FigureSkatingClient)
      })

      afterAll(async () => {
        await service.close()
        await postgres.stop()
      })

      it('check create figure skating organization validation', async () => {
        expect.assertions(1)

        try {
          await client.createFigureSkatingOrganization({})
        } catch (error: any) {
          expect(findValidationErrorDetails(error)).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: 'fullName',
                property: 'fullName',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isNotEmpty',
                    constraint: 'fullName should not be empty',
                  }),
                ]),
              }),
              expect.objectContaining({
                id: 'abbreviation',
                property: 'abbreviation',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isNotEmpty',
                    constraint: 'abbreviation should not be empty',
                  }),
                ]),
              }),
              expect.objectContaining({
                id: 'websiteName',
                property: 'websiteName',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isNotEmpty',
                    constraint: 'websiteName should not be empty',
                  }),
                ]),
              }),
              expect.objectContaining({
                id: 'listName',
                property: 'listName',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isNotEmpty',
                    constraint: 'listName should not be empty',
                  }),
                ]),
              }),
              expect.objectContaining({
                id: 'category',
                property: 'category',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isEnum',
                    constraint: 'category must be one of the following values: 0, 1, 2, 3',
                  }),
                ]),
              }),
              expect.objectContaining({
                id: 'cityId',
                property: 'cityId',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isUuid',
                    constraint: 'cityId must be a UUID',
                  }),
                ]),
              }),
              expect.objectContaining({
                id: 'address',
                property: 'address',
                messages: expect.arrayContaining([
                  expect.objectContaining({
                    id: 'isNotEmpty',
                    constraint: 'address should not be empty',
                  }),
                ]),
              }),
            ])
          )
        }
      })

      it('check create figure skating organization', async () => {
        const fullName = faker.string.sample()
        const abbreviation = faker.string.sample()
        const websiteName = faker.string.sample()
        const listName = faker.string.sample()
        const foundingDate = Timestamp.fromDate(faker.date.past())
        const category = OrganizationCategory.SCHOOL
        const cityId = faker.string.uuid()
        const address = faker.location.streetAddress()
        const phone = faker.string.numeric('+7 ### ### ## ##')
        const inn = '020944781396'
        const applicantId = faker.string.uuid()
        const applicantJobTitle = faker.string.sample()
        const applicantPhone = faker.string.numeric('+7 ### ### ## ##')
        const disciplines = [FigureSkatingDisciplines.SINGLE]
        const charterId = faker.string.uuid()
        const registrationCertificateId = faker.string.uuid()

        const { organization } = await client.createFigureSkatingOrganization({
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

        expect(organization).toEqual(
          expect.objectContaining({
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
