import type { FigureSkatingContingent }  from '@common/domain-module'
import type { FigureSkatingDisciplines } from '@common/domain-module'

import type { OrganizationCategory }     from '../enums/index.js'
import type { OrganizationState }        from '../enums/index.js'

export class FigureSkatingOrganizationCreatedEvent {
  constructor(
    public readonly organizationId: string,
    public readonly fullName: string,
    public readonly abbreviation: string,
    public readonly websiteName: string,
    public readonly listName: string,
    public readonly foundingDate: Date,
    public readonly category: OrganizationCategory,
    public readonly cityId: string,
    public readonly address: string,
    public readonly phone: string,
    public readonly inn: string,
    public readonly applicantId: string,
    public readonly applicantJobTitle: string,
    public readonly applicantPhone: string,
    public readonly contingent: Array<FigureSkatingContingent>,
    public readonly disciplines: Array<FigureSkatingDisciplines>,
    public readonly state: OrganizationState,
    public readonly responsible: Array<string>,
    public readonly charterId: string,
    public readonly registrationCertificateId: string,
    public readonly createdAt: Date,
    public readonly curatorId?: string,
    public readonly additionalInformation?: string,
  ) {}
}
