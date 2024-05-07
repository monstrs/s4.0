import { Guard }                                 from '@monstrs/guard-clause'
import { Against }                               from '@monstrs/guard-clause'
import { AggregateRoot }                         from '@nestjs/cqrs'

import { FigureSkatingContingent }               from '@common/domain-module'
import { FigureSkatingDisciplines }              from '@common/domain-module'

import { OrganizationCategory }                  from '../enums/index.js'
import { OrganizationState }                     from '../enums/index.js'
import { FigureSkatingOrganizationCreatedEvent } from '../events/index.js'
import { FigureSkatingOrganizationUpdatedEvent } from '../events/index.js'

export class FigureSkatingOrganization extends AggregateRoot {
  #id!: string

  #fullName!: string

  #abbreviation!: string

  #websiteName!: string

  #listName!: string

  #foundingDate!: Date

  #category!: OrganizationCategory

  #curatorId?: string

  #cityId!: string

  #address!: string

  #phone!: string

  #inn!: string

  #additionalInformation?: string

  #applicantId!: string

  #applicantJobTitle!: string

  #applicantPhone!: string

  #contingent!: Array<FigureSkatingContingent>

  #disciplines!: Array<FigureSkatingDisciplines>

  #state!: OrganizationState

  #responsible!: Array<string>

  #charterId!: string

  #registrationCertificateId!: string

  #createdAt!: Date

  get id(): string {
    return this.#id
  }

  private set id(id: string) {
    this.#id = id
  }

  get fullName(): string {
    return this.#fullName
  }

  private set fullName(fullName: string) {
    this.#fullName = fullName
  }

  get abbreviation(): string {
    return this.#abbreviation
  }

  private set abbreviation(abbreviation: string) {
    this.#abbreviation = abbreviation
  }

  get websiteName(): string {
    return this.#websiteName
  }

  private set websiteName(websiteName: string) {
    this.#websiteName = websiteName
  }

  get listName(): string {
    return this.#listName
  }

  private set listName(listName: string) {
    this.#listName = listName
  }

  get foundingDate(): Date {
    return this.#foundingDate
  }

  private set foundingDate(foundingDate: Date) {
    this.#foundingDate = foundingDate
  }

  get category(): OrganizationCategory {
    return this.#category
  }

  private set category(category: OrganizationCategory) {
    this.#category = category
  }

  get curatorId(): string | undefined {
    return this.#curatorId
  }

  private set curatorId(curatorId: string | undefined) {
    this.#curatorId = curatorId
  }

  get cityId(): string {
    return this.#cityId
  }

  private set cityId(cityId: string) {
    this.#cityId = cityId
  }

  get address(): string {
    return this.#address
  }

  private set address(address: string) {
    this.#address = address
  }

  get phone(): string {
    return this.#phone
  }

  private set phone(phone: string) {
    this.#phone = phone
  }

  get inn(): string {
    return this.#inn
  }

  private set inn(inn: string) {
    this.#inn = inn
  }

  get additionalInformation(): string | undefined {
    return this.#additionalInformation
  }

  private set additionalInformation(additionalInformation: string | undefined) {
    this.#additionalInformation = additionalInformation
  }

  get applicantId(): string {
    return this.#applicantId
  }

  private set applicantId(applicantId: string) {
    this.#applicantId = applicantId
  }

  get applicantJobTitle(): string {
    return this.#applicantJobTitle
  }

  private set applicantJobTitle(applicantJobTitle: string) {
    this.#applicantJobTitle = applicantJobTitle
  }

  get applicantPhone(): string {
    return this.#applicantPhone
  }

  private set applicantPhone(applicantPhone: string) {
    this.#applicantPhone = applicantPhone
  }

  get contingent(): Array<FigureSkatingContingent> {
    return this.#contingent
  }

  private set contingent(contingent: Array<FigureSkatingContingent>) {
    this.#contingent = contingent
  }

  get disciplines(): Array<FigureSkatingDisciplines> {
    return this.#disciplines
  }

  private set disciplines(disciplines: Array<FigureSkatingDisciplines>) {
    this.#disciplines = disciplines
  }

  get state(): OrganizationState {
    return this.#state
  }

  private set state(state: OrganizationState) {
    this.#state = state
  }

  get responsible(): Array<string> {
    return this.#responsible
  }

  private set responsible(responsible: Array<string>) {
    this.#responsible = responsible
  }

  get charterId(): string {
    return this.#charterId
  }

  private set charterId(charterId: string) {
    this.#charterId = charterId
  }

  get registrationCertificateId(): string {
    return this.#registrationCertificateId
  }

  private set registrationCertificateId(registrationCertificateId: string) {
    this.#registrationCertificateId = registrationCertificateId
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  private set createdAt(createdAt: Date) {
    this.#createdAt = createdAt
  }

  @Guard()
  create(
    @Against('id').NotUUID(4) id: string,
    @Against('fullName').Empty() fullName: string,
    @Against('abbreviation').Empty() abbreviation: string,
    @Against('websiteName').Empty() websiteName: string,
    @Against('listName').Empty() listName: string,
    @Against('foundingDate').NotInstance(Date) foundingDate: Date,
    @Against('category').NotEnum(OrganizationCategory) category: OrganizationCategory,
    @Against('cityId').NotUUID(4) cityId: string,
    @Against('address').Empty() address: string,
    @Against('phone').Empty() phone: string,
    @Against('inn').Empty() inn: string,
    @Against('applicationId').NotUUID(4) applicantId: string,
    @Against('applicantJobTitle').Empty() applicantJobTitle: string,
    @Against('applicantPhone').Empty() applicantPhone: string,
    @Against('contingent').Each.NotEnum(FigureSkatingContingent)
    contingent: Array<FigureSkatingContingent>,
    @Against('disciplines').Each.NotEnum(FigureSkatingDisciplines)
    disciplines: Array<FigureSkatingDisciplines>,
    @Against('responsible').Each.NotUUID(4) responsible: Array<string>,
    @Against('charterId').NotUUID(4) charterId: string,
    @Against('registrationCertificateId').NotUUID(4) registrationCertificateId: string,
    @Against('curatorId').Optional.NotUUID(4) curatorId?: string,
    additionalInformation?: string
  ): FigureSkatingOrganization {
    this.apply(
      new FigureSkatingOrganizationCreatedEvent(
        id,
        fullName,
        abbreviation,
        websiteName,
        listName,
        foundingDate,
        category,
        cityId,
        address,
        phone,
        inn,
        applicantId,
        applicantJobTitle,
        applicantPhone,
        contingent,
        disciplines,
        OrganizationState.CREATED,
        responsible,
        charterId,
        registrationCertificateId,
        new Date(),
        curatorId,
        additionalInformation
      )
    )

    return this
  }

  @Guard()
  update(
    @Against('fullName').Empty() fullName: string,
    @Against('abbreviation').Empty() abbreviation: string,
    @Against('websiteName').Empty() websiteName: string,
    @Against('listName').Empty() listName: string,
    @Against('foundingDate').NotInstance(Date) foundingDate: Date,
    @Against('category').NotEnum(OrganizationCategory) category: OrganizationCategory,
    @Against('cityId').NotUUID(4) cityId: string,
    @Against('address').Empty() address: string,
    @Against('phone').Empty() phone: string,
    @Against('inn').Empty() inn: string,
    @Against('applicationId').NotUUID(4) applicantId: string,
    @Against('applicantJobTitle').Empty() applicantJobTitle: string,
    @Against('applicantPhone').Empty() applicantPhone: string,
    @Against('contingent').Each.NotEnum(FigureSkatingContingent)
    contingent: Array<FigureSkatingContingent>,
    @Against('disciplines').Each.NotEnum(FigureSkatingDisciplines)
    disciplines: Array<FigureSkatingDisciplines>,
    @Against('responsible').Each.NotUUID(4) responsible: Array<string>,
    @Against('charterId').NotUUID(4) charterId: string,
    @Against('registrationCertificateId').NotUUID(4) registrationCertificateId: string,
    @Against('curatorId').Optional.NotUUID(4) curatorId?: string,
    additionalInformation?: string
  ): FigureSkatingOrganization {
    this.apply(
      new FigureSkatingOrganizationUpdatedEvent(
        this.id,
        fullName,
        abbreviation,
        websiteName,
        listName,
        foundingDate,
        category,
        cityId,
        address,
        phone,
        inn,
        applicantId,
        applicantJobTitle,
        applicantPhone,
        contingent,
        disciplines,
        OrganizationState.CREATED,
        responsible,
        charterId,
        registrationCertificateId,
        curatorId,
        additionalInformation
      )
    )

    return this
  }

  protected onFigureSkatingOrganizationCreatedEvent(
    event: FigureSkatingOrganizationCreatedEvent
  ): void {
    this.#id = event.organizationId
    this.#fullName = event.fullName
    this.#abbreviation = event.abbreviation
    this.#websiteName = event.websiteName
    this.#listName = event.listName
    this.#foundingDate = event.foundingDate
    this.#category = event.category
    this.#curatorId = event.curatorId
    this.#cityId = event.cityId
    this.#address = event.address
    this.#phone = event.phone
    this.#inn = event.inn
    this.#additionalInformation = event.additionalInformation
    this.#applicantId = event.applicantId
    this.#applicantJobTitle = event.applicantJobTitle
    this.#applicantPhone = event.applicantPhone
    this.#contingent = event.contingent
    this.#disciplines = event.disciplines
    this.#state = event.state
    this.#responsible = event.responsible
    this.#charterId = event.charterId
    this.#registrationCertificateId = event.registrationCertificateId
    this.#createdAt = event.createdAt
  }

  protected onFigureSkatingOrganizationUpdatedEvent(
    event: FigureSkatingOrganizationUpdatedEvent
  ): void {
    this.#fullName = event.fullName
    this.#abbreviation = event.abbreviation
    this.#websiteName = event.websiteName
    this.#listName = event.listName
    this.#foundingDate = event.foundingDate
    this.#category = event.category
    this.#curatorId = event.curatorId
    this.#cityId = event.cityId
    this.#address = event.address
    this.#phone = event.phone
    this.#inn = event.inn
    this.#additionalInformation = event.additionalInformation
    this.#applicantId = event.applicantId
    this.#applicantJobTitle = event.applicantJobTitle
    this.#applicantPhone = event.applicantPhone
    this.#contingent = event.contingent
    this.#disciplines = event.disciplines
    this.#state = event.state
    this.#responsible = event.responsible
    this.#charterId = event.charterId
    this.#registrationCertificateId = event.registrationCertificateId
  }
}
