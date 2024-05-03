import type { ICommandHandler }                   from '@nestjs/cqrs'

import { CommandHandler }                         from '@nestjs/cqrs'

import { FigureSkatingOrganization }              from '@organizations/domain-module'

import { CreateFigureSkatingOrganizationCommand } from '../commands/index.js'
import { FigureSkatingOrganizationRepository }    from '../repositories/index.js'

@CommandHandler(CreateFigureSkatingOrganizationCommand)
export class CreateFigureSkatingOrganizationCommandHandler
  implements ICommandHandler<CreateFigureSkatingOrganizationCommand, void>
{
  constructor(private readonly repository: FigureSkatingOrganizationRepository) {}

  async execute(command: CreateFigureSkatingOrganizationCommand): Promise<void> {
    await this.repository.save(
      new FigureSkatingOrganization().create(
        command.organizationId,
        command.fullName,
        command.abbreviation,
        command.websiteName,
        command.listName,
        command.foundingDate,
        command.category,
        command.curatorId,
        command.cityId,
        command.address,
        command.phone,
        command.inn,
        command.additionalInformation,
        command.applicantId,
        command.applicantJobTitle,
        command.applicantPhone,
        command.contingent,
        command.disciplines,
        command.responsible,
        command.charterId,
        command.registrationCertificateId
      )
    )
  }
}
