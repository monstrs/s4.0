import type { CreateFigureSkatingOrganizationRequest } from '@figure-skating/rpc/interfaces'

import { IsNotEmpty }                                  from 'class-validator'
import { IsOptional }                                  from 'class-validator'
import { IsPhoneNumber }                               from 'class-validator'
import { IsUUID }                                      from 'class-validator'
import { IsEnum }                                      from 'class-validator'
import { IsDate }                                      from 'class-validator'

import { FigureSkatingContingent }                     from '@common/domain-module'
import { FigureSkatingDisciplines }                    from '@common/domain-module'
import { OrganizationCategory }                        from '@figure-skating/domain-module'

export class CreateFigureSkatingOrganizationPayload {
  constructor(private readonly request: CreateFigureSkatingOrganizationRequest) {}

  @IsNotEmpty()
  get fullName(): string {
    return this.request.fullName
  }

  @IsNotEmpty()
  get abbreviation(): string {
    return this.request.abbreviation
  }

  @IsNotEmpty()
  get websiteName(): string {
    return this.request.websiteName
  }

  @IsNotEmpty()
  get listName(): string {
    return this.request.listName
  }

  @IsDate()
  get foundingDate(): Date {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    return this.request.foundingDate?.toDate()!
  }

  @IsNotEmpty()
  @IsEnum(OrganizationCategory)
  get category(): OrganizationCategory {
    return this.request.category!
  }

  @IsOptional()
  @IsUUID(4)
  get curatorId(): string | undefined {
    return this.request.curatorId
  }

  @IsUUID(4)
  get cityId(): string {
    return this.request.cityId
  }

  @IsNotEmpty()
  get address(): string {
    return this.request.address
  }

  @IsPhoneNumber()
  get phone(): string {
    return this.request.phone
  }

  @IsNotEmpty()
  get inn(): string {
    return this.request.inn
  }

  get additionalInformation(): string | undefined {
    return this.request.additionalInformation
  }

  @IsUUID(4)
  get applicantId(): string {
    return this.request.applicantId
  }

  @IsNotEmpty()
  get applicantJobTitle(): string {
    return this.request.applicantJobTitle
  }

  @IsPhoneNumber()
  get applicantPhone(): string {
    return this.request.applicantPhone
  }

  @IsEnum(FigureSkatingContingent, { each: true })
  get contingent(): Array<FigureSkatingContingent> {
    return this.request.contingent
  }

  @IsEnum(FigureSkatingDisciplines, { each: true })
  get disciplines(): Array<FigureSkatingDisciplines> {
    return this.request.disciplines
  }

  @IsUUID(4, { each: true })
  get responsible(): Array<string> {
    return this.request.responsible
  }

  @IsUUID(4)
  get charterId(): string {
    return this.request.charterId
  }

  @IsUUID(4)
  get registrationCertificateId(): string {
    return this.request.registrationCertificateId
  }
}
