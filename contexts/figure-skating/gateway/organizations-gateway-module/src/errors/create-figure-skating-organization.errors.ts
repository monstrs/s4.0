import { Field }           from '@nestjs/graphql'
import { ObjectType }      from '@nestjs/graphql'

import { ValidationError } from '@common/gateway-module'

@ObjectType()
export class CreateFigureSkatingOrganizationErrors {
  @Field(() => ValidationError, { nullable: true })
  fullName?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  abbreviation?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  websiteName?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  listName?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  foundingDate?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  category?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  curatorId?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  cityId?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  address?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  phone?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  inn?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  applicantId?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  applicantJobTitle?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  applicantPhone?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  contingent?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  disciplines?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  responsible?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  charterId?: ValidationError

  @Field(() => ValidationError, { nullable: true })
  registrationCertificateId?: ValidationError
}
