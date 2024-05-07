// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file ru/sportvokrug/figure_skating/v1alpha1/figure-skating.service.proto (package ru.sportvokrug.figure_skatings.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Timestamp }                from '@bufbuild/protobuf'

import type { Query_ID }                 from '../../../../tech/monstrs/queries/v1alpha1/queries_pb.js'
import type { Query_Order }              from '../../../../tech/monstrs/queries/v1alpha1/queries_pb.js'
import type { Query_Pager }              from '../../../../tech/monstrs/queries/v1alpha1/queries_pb.js'
import type { Query_Search }             from '../../../../tech/monstrs/queries/v1alpha1/queries_pb.js'
import type { FigureSkatingContingent }  from '../../common/v1alpha1/common.types_pb.js'
import type { FigureSkatingDisciplines } from '../../common/v1alpha1/common.types_pb.js'

/**
 * @generated from enum ru.sportvokrug.figure_skatings.v1alpha1.OrganizationCategory
 */
export enum OrganizationCategory {
  /**
   * @generated from enum value: SCHOOL = 0;
   */
  SCHOOL = 0,

  /**
   * @generated from enum value: FEDERATION = 1;
   */
  FEDERATION = 1,

  /**
   * @generated from enum value: SOCIETY = 2;
   */
  SOCIETY = 2,

  /**
   * @generated from enum value: OTHER = 3;
   */
  OTHER = 3,
}

/**
 * @generated from enum ru.sportvokrug.figure_skatings.v1alpha1.OrganizationState
 */
export enum OrganizationState {
  /**
   * @generated from enum value: CREATED = 0;
   */
  CREATED = 0,

  /**
   * @generated from enum value: WAIT_REVISE = 1;
   */
  WAIT_REVISE = 1,

  /**
   * @generated from enum value: CANCELED = 2;
   */
  CANCELED = 2,

  /**
   * @generated from enum value: DENIED = 3;
   */
  DENIED = 3,

  /**
   * @generated from enum value: IN_REGISTRY = 4;
   */
  IN_REGISTRY = 4,

  /**
   * @generated from enum value: NOT_IN_REGISTRY = 5;
   */
  NOT_IN_REGISTRY = 5,

  /**
   * @generated from enum value: DOES_NOT_EXIST = 6;
   */
  DOES_NOT_EXIST = 6,

  /**
   * @generated from enum value: ACTUALIZATION = 7;
   */
  ACTUALIZATION = 7,

  /**
   * @generated from enum value: ACTUALIZATION_FAILED = 8;
   */
  ACTUALIZATION_FAILED = 8,

  /**
   * @generated from enum value: ACTUALIZATION_CHECK = 9;
   */
  ACTUALIZATION_CHECK = 9,
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingOrganization
 */
export abstract class FigureSkatingOrganization {
  /**
   * @generated from field: string id = 1;
   */
  abstract readonly id: string

  /**
   * @generated from field: string full_name = 2;
   */
  abstract readonly fullName: string

  /**
   * @generated from field: string abbreviation = 3;
   */
  abstract readonly abbreviation: string

  /**
   * @generated from field: string website_name = 4;
   */
  abstract readonly websiteName: string

  /**
   * @generated from field: string list_name = 5;
   */
  abstract readonly listName: string

  /**
   * @generated from field: google.protobuf.Timestamp founding_date = 6;
   */
  abstract readonly foundingDate?: Timestamp

  /**
   * @generated from field: optional ru.sportvokrug.figure_skatings.v1alpha1.OrganizationCategory category = 7;
   */
  abstract readonly category?: OrganizationCategory

  /**
   * @generated from field: optional string curator_id = 8;
   */
  abstract readonly curatorId?: string

  /**
   * @generated from field: string city_id = 9;
   */
  abstract readonly cityId: string

  /**
   * @generated from field: string address = 10;
   */
  abstract readonly address: string

  /**
   * @generated from field: string phone = 11;
   */
  abstract readonly phone: string

  /**
   * @generated from field: string inn = 12;
   */
  abstract readonly inn: string

  /**
   * @generated from field: optional string additional_information = 13;
   */
  abstract readonly additionalInformation?: string

  /**
   * @generated from field: string applicant_id = 14;
   */
  abstract readonly applicantId: string

  /**
   * @generated from field: string applicant_job_title = 15;
   */
  abstract readonly applicantJobTitle: string

  /**
   * @generated from field: string applicant_phone = 16;
   */
  abstract readonly applicantPhone: string

  /**
   * @generated from field: repeated ru.sportvokrug.common.v1alpha1.FigureSkatingContingent contingent = 17;
   */
  abstract readonly contingent: FigureSkatingContingent[]

  /**
   * @generated from field: repeated ru.sportvokrug.common.v1alpha1.FigureSkatingDisciplines disciplines = 18;
   */
  abstract readonly disciplines: FigureSkatingDisciplines[]

  /**
   * @generated from field: ru.sportvokrug.figure_skatings.v1alpha1.OrganizationState state = 19;
   */
  abstract readonly state: OrganizationState

  /**
   * @generated from field: repeated string responsible = 20;
   */
  abstract readonly responsible: string[]

  /**
   * @generated from field: string charter_id = 21;
   */
  abstract readonly charterId: string

  /**
   * @generated from field: string registration_certificate_id = 22;
   */
  abstract readonly registrationCertificateId: string

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 23;
   */
  abstract readonly createdAt?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.CreateFigureSkatingOrganizationRequest
 */
export abstract class CreateFigureSkatingOrganizationRequest {
  /**
   * @generated from field: string full_name = 1;
   */
  abstract readonly fullName: string

  /**
   * @generated from field: string abbreviation = 2;
   */
  abstract readonly abbreviation: string

  /**
   * @generated from field: string website_name = 3;
   */
  abstract readonly websiteName: string

  /**
   * @generated from field: string list_name = 4;
   */
  abstract readonly listName: string

  /**
   * @generated from field: google.protobuf.Timestamp founding_date = 5;
   */
  abstract readonly foundingDate?: Timestamp

  /**
   * @generated from field: optional ru.sportvokrug.figure_skatings.v1alpha1.OrganizationCategory category = 6;
   */
  abstract readonly category?: OrganizationCategory

  /**
   * @generated from field: optional string curator_id = 7;
   */
  abstract readonly curatorId?: string

  /**
   * @generated from field: string city_id = 8;
   */
  abstract readonly cityId: string

  /**
   * @generated from field: string address = 9;
   */
  abstract readonly address: string

  /**
   * @generated from field: string phone = 10;
   */
  abstract readonly phone: string

  /**
   * @generated from field: string inn = 11;
   */
  abstract readonly inn: string

  /**
   * @generated from field: optional string additional_information = 12;
   */
  abstract readonly additionalInformation?: string

  /**
   * @generated from field: string applicant_id = 13;
   */
  abstract readonly applicantId: string

  /**
   * @generated from field: string applicant_job_title = 14;
   */
  abstract readonly applicantJobTitle: string

  /**
   * @generated from field: string applicant_phone = 15;
   */
  abstract readonly applicantPhone: string

  /**
   * @generated from field: repeated ru.sportvokrug.common.v1alpha1.FigureSkatingContingent contingent = 16;
   */
  abstract readonly contingent: FigureSkatingContingent[]

  /**
   * @generated from field: repeated ru.sportvokrug.common.v1alpha1.FigureSkatingDisciplines disciplines = 17;
   */
  abstract readonly disciplines: FigureSkatingDisciplines[]

  /**
   * @generated from field: repeated string responsible = 18;
   */
  abstract readonly responsible: string[]

  /**
   * @generated from field: string charter_id = 19;
   */
  abstract readonly charterId: string

  /**
   * @generated from field: string registration_certificate_id = 20;
   */
  abstract readonly registrationCertificateId: string
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.CreateFigureSkatingOrganizationResponse
 */
export abstract class CreateFigureSkatingOrganizationResponse {
  /**
   * @generated from field: ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingOrganization organization = 1;
   */
  abstract readonly organization?: FigureSkatingOrganization
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.UpdateFigureSkatingOrganizationRequest
 */
export abstract class UpdateFigureSkatingOrganizationRequest {
  /**
   * @generated from field: string organization_id = 1;
   */
  abstract readonly organizationId: string

  /**
   * @generated from field: string full_name = 2;
   */
  abstract readonly fullName: string

  /**
   * @generated from field: string abbreviation = 3;
   */
  abstract readonly abbreviation: string

  /**
   * @generated from field: string website_name = 4;
   */
  abstract readonly websiteName: string

  /**
   * @generated from field: string list_name = 5;
   */
  abstract readonly listName: string

  /**
   * @generated from field: google.protobuf.Timestamp founding_date = 6;
   */
  abstract readonly foundingDate?: Timestamp

  /**
   * @generated from field: optional ru.sportvokrug.figure_skatings.v1alpha1.OrganizationCategory category = 7;
   */
  abstract readonly category?: OrganizationCategory

  /**
   * @generated from field: optional string curator_id = 8;
   */
  abstract readonly curatorId?: string

  /**
   * @generated from field: string city_id = 9;
   */
  abstract readonly cityId: string

  /**
   * @generated from field: string address = 10;
   */
  abstract readonly address: string

  /**
   * @generated from field: string phone = 11;
   */
  abstract readonly phone: string

  /**
   * @generated from field: string inn = 12;
   */
  abstract readonly inn: string

  /**
   * @generated from field: optional string additional_information = 13;
   */
  abstract readonly additionalInformation?: string

  /**
   * @generated from field: string applicant_id = 14;
   */
  abstract readonly applicantId: string

  /**
   * @generated from field: string applicant_job_title = 15;
   */
  abstract readonly applicantJobTitle: string

  /**
   * @generated from field: string applicant_phone = 16;
   */
  abstract readonly applicantPhone: string

  /**
   * @generated from field: repeated ru.sportvokrug.common.v1alpha1.FigureSkatingContingent contingent = 17;
   */
  abstract readonly contingent: FigureSkatingContingent[]

  /**
   * @generated from field: repeated ru.sportvokrug.common.v1alpha1.FigureSkatingDisciplines disciplines = 18;
   */
  abstract readonly disciplines: FigureSkatingDisciplines[]

  /**
   * @generated from field: repeated string responsible = 19;
   */
  abstract readonly responsible: string[]

  /**
   * @generated from field: string charter_id = 20;
   */
  abstract readonly charterId: string

  /**
   * @generated from field: string registration_certificate_id = 21;
   */
  abstract readonly registrationCertificateId: string
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.UpdateFigureSkatingOrganizationResponse
 */
export abstract class UpdateFigureSkatingOrganizationResponse {
  /**
   * @generated from field: ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingOrganization organization = 1;
   */
  abstract readonly organization?: FigureSkatingOrganization
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.ListFigureSkatingOrganizationsRequest
 */
export abstract class ListFigureSkatingOrganizationsRequest {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Pager pager = 1;
   */
  abstract readonly pager?: Query_Pager

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Order order = 2;
   */
  abstract readonly order?: Query_Order

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Search search = 3;
   */
  abstract readonly search?: Query_Search

  /**
   * @generated from field: ru.sportvokrug.figure_skatings.v1alpha1.ListFigureSkatingOrganizationsRequest.FigureSkatingOrganizationsQuery query = 4;
   */
  abstract readonly query?: ListFigureSkatingOrganizationsRequest_FigureSkatingOrganizationsQuery
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.ListFigureSkatingOrganizationsRequest.FigureSkatingOrganizationsQuery
 */
export abstract class ListFigureSkatingOrganizationsRequest_FigureSkatingOrganizationsQuery {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.ID id = 1;
   */
  abstract readonly id?: Query_ID
}

/**
 * @generated from message ru.sportvokrug.figure_skatings.v1alpha1.ListFigureSkatingOrganizationsResponse
 */
export abstract class ListFigureSkatingOrganizationsResponse {
  /**
   * @generated from field: repeated ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingOrganization organizations = 1;
   */
  abstract readonly organizations: FigureSkatingOrganization[]

  /**
   * @generated from field: bool has_next_page = 2;
   */
  abstract readonly hasNextPage: boolean
}
