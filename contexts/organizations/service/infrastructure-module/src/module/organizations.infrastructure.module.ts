import type { DynamicModule }                      from '@nestjs/common'

import { MikroOrmModule }                          from '@mikro-orm/nestjs'
import { ValidationModule }                        from '@monstrs/nestjs-validation'
import { Module }                                  from '@nestjs/common'

import { OrganizationsApplicationModule }          from '@organizations/application-module'
import { FigureSkatingOrganizationRepository }     from '@organizations/application-module'

import * as controllers                            from '../controllers/index.js'
import * as entities                               from '../entities/index.js'
import * as mappers                                from '../mappers/index.js'
import { FigureSkatingOrganizationRepositoryImpl } from '../repositories/index.js'

@Module({})
export class OrganizationsInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: OrganizationsInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        ValidationModule.register(),
        MikroOrmModule.forFeature(Object.values(entities)),
        OrganizationsApplicationModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: FigureSkatingOrganizationRepository,
          useClass: FigureSkatingOrganizationRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: FigureSkatingOrganizationRepository,
          useClass: FigureSkatingOrganizationRepositoryImpl,
        },
      ],
    }
  }
}
