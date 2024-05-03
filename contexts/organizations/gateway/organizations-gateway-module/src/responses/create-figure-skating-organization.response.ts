import { Field }                                 from '@nestjs/graphql'
import { ObjectType }                            from '@nestjs/graphql'

import { CreateFigureSkatingOrganizationErrors } from '../errors/index.js'
import { FigureSkatingOrganization }             from '../types/index.js'

@ObjectType()
export class CreateFigureSkatingOrganizationResponse {
  @Field(() => FigureSkatingOrganization, { nullable: true })
  organization?: FigureSkatingOrganization

  @Field(() => CreateFigureSkatingOrganizationErrors, { nullable: true })
  errors?: CreateFigureSkatingOrganizationErrors
}
