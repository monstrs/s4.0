import { Field }                      from '@nestjs/graphql'
import { ObjectType }                 from '@nestjs/graphql'

import { FigureSkatingOrganizations } from './figure-skating-organizations.type.js'

@ObjectType()
export class Organizations {
  @Field(() => FigureSkatingOrganizations)
  figureSkating!: FigureSkatingOrganizations
}
