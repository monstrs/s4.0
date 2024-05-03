import { Field }                    from '@nestjs/graphql'
import { InputType }                from '@nestjs/graphql'

import { FigureSkatingContingent }  from '@common/gateway-module'
import { FigureSkatingDisciplines } from '@common/gateway-module'

import { OrganizationCategory }     from '../enums/index.js'

@InputType()
export class CreateFigureSkatingOrganizationInput {
  @Field()
  fullName!: string

  @Field()
  abbreviation!: string

  @Field()
  websiteName!: string

  @Field()
  listName!: string

  @Field({ nullable: true })
  foundingDate?: Date

  @Field(() => OrganizationCategory, { nullable: true })
  category?: OrganizationCategory

  @Field({ nullable: true })
  curatorId?: string

  @Field({ nullable: true })
  cityId?: string

  @Field()
  address!: string

  @Field()
  phone!: string

  @Field()
  inn!: string

  @Field({ nullable: true })
  additionalInformation?: string

  @Field()
  applicantJobTitle!: string

  @Field()
  applicantPhone!: string

  @Field(() => [FigureSkatingContingent])
  contingent!: Array<FigureSkatingContingent>

  @Field(() => [FigureSkatingDisciplines])
  disciplines!: Array<FigureSkatingDisciplines>

  @Field()
  charterId!: string

  @Field()
  registrationCertificateId!: string
}
