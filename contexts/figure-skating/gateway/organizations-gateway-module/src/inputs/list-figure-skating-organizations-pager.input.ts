import { Field }     from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ListFigureSkatingOrganizationsPagerInput {
  @Field()
  take!: number

  @Field()
  offset!: number
}
