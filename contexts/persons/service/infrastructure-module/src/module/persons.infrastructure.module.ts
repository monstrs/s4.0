import type { DynamicModule }                   from '@nestjs/common'

import { MikroOrmModule }                       from '@mikro-orm/nestjs'
import { ValidationModule }                     from '@monstrs/nestjs-validation'
import { Module }                               from '@nestjs/common'

import { PersonsApplicationModule }             from '@persons/application-module'
import { PersonRepository }                     from '@persons/application-module'
import { CoachRepository }                      from '@persons/application-module'
import { FigureSkatingSportsmanRepository }     from '@persons/application-module'
import { FigureSkatingJudgeRepository }         from '@persons/application-module'

import * as controllers                         from '../controllers/index.js'
import * as entities                            from '../entities/index.js'
import * as mappers                             from '../mappers/index.js'
import { PersonRepositoryImpl }                 from '../repositories/index.js'
import { CoachRepositoryImpl }                  from '../repositories/index.js'
import { FigureSkatingJudgeRepositoryImpl }     from '../repositories/index.js'
import { FigureSkatingSportsmanRepositoryImpl } from '../repositories/index.js'

@Module({})
export class PersonsInfrastructureModule {
  static register(): DynamicModule {
    return {
      global: true,
      module: PersonsInfrastructureModule,
      controllers: Object.values(controllers),
      imports: [
        ValidationModule.register(),
        MikroOrmModule.forFeature(Object.values(entities)),
        PersonsApplicationModule.register(),
      ],
      providers: [
        ...Object.values(mappers),
        {
          provide: PersonRepository,
          useClass: PersonRepositoryImpl,
        },
        {
          provide: CoachRepository,
          useClass: CoachRepositoryImpl,
        },
        {
          provide: FigureSkatingJudgeRepository,
          useClass: FigureSkatingJudgeRepositoryImpl,
        },
        {
          provide: FigureSkatingSportsmanRepository,
          useClass: FigureSkatingSportsmanRepositoryImpl,
        },
      ],
      exports: [
        {
          provide: PersonRepository,
          useClass: PersonRepositoryImpl,
        },
        {
          provide: CoachRepository,
          useClass: CoachRepositoryImpl,
        },
        {
          provide: FigureSkatingJudgeRepository,
          useClass: FigureSkatingJudgeRepositoryImpl,
        },
        {
          provide: FigureSkatingSportsmanRepository,
          useClass: FigureSkatingSportsmanRepositoryImpl,
        },
      ],
    }
  }
}
