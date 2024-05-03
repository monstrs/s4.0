import { Field }                    from '@nestjs/graphql'
import { ObjectType }               from '@nestjs/graphql'

import { FigureSkatingContingent }  from '@common/gateway-module'
import { FigureSkatingDisciplines } from '@common/gateway-module'

import { OrganizationCategory }     from '../enums/index.js'
import { OrganizationState }        from '../enums/index.js'

@ObjectType()
export class FigureSkatingOrganization {
  @Field()
  id!: string

  @Field()
  fullName!: string

  @Field()
  abbreviation!: string

  @Field()
  websiteName!: string

  @Field()
  listName!: string

  @Field()
  foundingDate!: Date

  @Field(() => OrganizationCategory)
  category!: OrganizationCategory

  //@Field()
  //curator

  //@Field()
  //city

  @Field()
  address!: string

  @Field()
  phone!: string

  @Field()
  inn!: string

  @Field({ nullable: true })
  additionalInformation?: string

  //@Field()
  //application!:

  @Field()
  applicantJobTitle!: string

  @Field()
  applicantPhone!: string

  @Field(() => [FigureSkatingContingent])
  contingent!: Array<FigureSkatingContingent>

  @Field(() => [FigureSkatingDisciplines])
  disciplines!: Array<FigureSkatingDisciplines>

  @Field(() => OrganizationState)
  state!: OrganizationState

  //@Field(() => [])
  //responsible!: Array<>

  //@Field()
  //charter!:

  //@Field()
  //registrationCertificate!:

  @Field()
  createdAt!: Date
}
