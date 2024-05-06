import type { FigureSkatingOrganization } from '@figure-skating/domain-module'

import { Timestamp }                      from '@bufbuild/protobuf'

import * as rpc                           from '@figure-skating/rpc/abstractions'

export class FigureSkatingOrganizationSerializer extends rpc.FigureSkatingOrganization {
  constructor(private readonly serializable: FigureSkatingOrganization) {
    super()
  }

  get id(): string {
    return this.serializable.id
  }

  get fullName(): string {
    return this.serializable.fullName
  }

  get abbreviation(): string {
    return this.serializable.abbreviation
  }

  get websiteName(): string {
    return this.serializable.websiteName
  }

  get listName(): string {
    return this.serializable.listName
  }

  get foundingDate(): Timestamp {
    return Timestamp.fromDate(this.serializable.foundingDate)
  }

  get category(): rpc.OrganizationCategory {
    return this.serializable.category
  }

  get curatorId(): string | undefined {
    return this.serializable.curatorId
  }

  get cityId(): string {
    return this.serializable.cityId
  }

  get address(): string {
    return this.serializable.address
  }

  get phone(): string {
    return this.serializable.phone
  }

  get inn(): string {
    return this.serializable.inn
  }

  get additionalInformation(): string | undefined {
    return this.serializable.additionalInformation
  }

  get applicantId(): string {
    return this.serializable.applicantId
  }

  get applicantJobTitle(): string {
    return this.serializable.applicantJobTitle
  }

  get applicantPhone(): string {
    return this.serializable.applicantPhone
  }

  get contingent(): Array<rpc.FigureSkatingContingent> {
    return this.serializable.contingent
  }

  get disciplines(): Array<rpc.FigureSkatingDisciplines> {
    return this.serializable.disciplines
  }

  get state(): rpc.OrganizationState {
    return this.serializable.state
  }

  get responsible(): Array<string> {
    return this.serializable.responsible
  }

  get charterId(): string {
    return this.serializable.charterId
  }

  get registrationCertificateId(): string {
    return this.serializable.registrationCertificateId
  }

  get createdAt(): Timestamp {
    return Timestamp.fromDate(this.serializable.createdAt)
  }
}
