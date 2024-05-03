/* eslint-disable no-param-reassign */

import type { ExtractProperties }               from '@monstrs/base-types'

import type { FigureSkatingOrganizationEntity } from '../entities/index.js'

import { Injectable }                           from '@nestjs/common'

import { FigureSkatingOrganization }            from '@figure-skating/domain-module'

@Injectable()
export class FigureSkatingOrganizationMapper {
  fromPersistence(entity: FigureSkatingOrganizationEntity): FigureSkatingOrganization {
    const properties: Omit<ExtractProperties<FigureSkatingOrganization>, 'autoCommit'> = {
      id: entity.id,
      fullName: entity.fullName,
      abbreviation: entity.abbreviation,
      websiteName: entity.websiteName,
      listName: entity.listName,
      foundingDate: entity.foundingDate,
      category: entity.category,
      curatorId: entity.curatorId,
      cityId: entity.cityId,
      address: entity.address,
      phone: entity.phone,
      inn: entity.inn,
      additionalInformation: entity.additionalInformation,
      applicantId: entity.applicantId,
      applicantJobTitle: entity.applicantJobTitle,
      applicantPhone: entity.applicantPhone,
      contingent: entity.contingent,
      disciplines: entity.disciplines,
      state: entity.state,
      responsible: entity.responsible,
      charterId: entity.charterId,
      registrationCertificateId: entity.registrationCertificateId,
      createdAt: entity.createdAt,
    }

    return Object.assign(new FigureSkatingOrganization(), properties)
  }

  toPersistence(
    aggregate: FigureSkatingOrganization,
    entity: FigureSkatingOrganizationEntity
  ): FigureSkatingOrganizationEntity {
    entity.id = aggregate.id
    entity.fullName = aggregate.fullName
    entity.abbreviation = aggregate.abbreviation
    entity.websiteName = aggregate.websiteName
    entity.listName = aggregate.listName
    entity.foundingDate = aggregate.foundingDate
    entity.category = aggregate.category
    entity.curatorId = aggregate.curatorId
    entity.cityId = aggregate.cityId
    entity.address = aggregate.address
    entity.phone = aggregate.phone
    entity.inn = aggregate.inn
    entity.additionalInformation = aggregate.additionalInformation
    entity.applicantId = aggregate.applicantId
    entity.applicantJobTitle = aggregate.applicantJobTitle
    entity.applicantPhone = aggregate.applicantPhone
    entity.contingent = aggregate.contingent
    entity.disciplines = aggregate.disciplines
    entity.state = aggregate.state
    entity.responsible = aggregate.responsible
    entity.charterId = aggregate.charterId
    entity.registrationCertificateId = aggregate.registrationCertificateId
    entity.createdAt = aggregate.createdAt

    return entity
  }
}
