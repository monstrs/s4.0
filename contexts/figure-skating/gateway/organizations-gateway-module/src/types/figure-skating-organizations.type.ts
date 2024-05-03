import { Field }                     from '@nestjs/graphql'
import { ObjectType }                from '@nestjs/graphql'

import { FigureSkatingOrganization } from './figure-skating-organization.type.js'

@ObjectType()
export class FigureSkatingOrganizations {
  @Field(() => [FigureSkatingOrganization])
  organizations!: Array<FigureSkatingOrganization>

  @Field()
  hasNextPage!: boolean
}
