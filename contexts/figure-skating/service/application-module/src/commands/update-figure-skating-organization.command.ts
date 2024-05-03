import type { FigureSkatingContingent }  from '@common/domain-module'
import type { FigureSkatingDisciplines } from '@common/domain-module'
import type { OrganizationCategory }     from '@figure-skating/domain-module'

export class UpdateFigureSkatingOrganizationCommand {
  constructor(
    public readonly organizationId: string,
    public readonly fullName: string,
    public readonly abbreviation: string,
    public readonly websiteName: string,
    public readonly listName: string,
    public readonly foundingDate: Date,
    public readonly category: OrganizationCategory,
    public readonly curatorId: string,
    public readonly cityId: string,
    public readonly address: string,
    public readonly phone: string,
    public readonly inn: string,
    public readonly additionalInformation: string,
    public readonly applicantId: string,
    public readonly applicantJobTitle: string,
    public readonly applicantPhone: string,
    public readonly contingent: Array<FigureSkatingContingent>,
    public readonly disciplines: Array<FigureSkatingDisciplines>,
    public readonly responsible: Array<string>,
    public readonly charterId: string,
    public readonly registrationCertificateId: string
  ) {}
}
