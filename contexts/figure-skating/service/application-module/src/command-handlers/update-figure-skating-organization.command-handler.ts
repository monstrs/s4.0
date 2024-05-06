import type { ICommandHandler }                   from '@nestjs/cqrs'

import assert                                     from 'node:assert'

import { CommandHandler }                         from '@nestjs/cqrs'

import { UpdateFigureSkatingOrganizationCommand } from '../commands/index.js'
import { FigureSkatingOrganizationRepository }    from '../repositories/index.js'

@CommandHandler(UpdateFigureSkatingOrganizationCommand)
export class UpdateFigureSkatingOrganizationCommandHandler
  implements ICommandHandler<UpdateFigureSkatingOrganizationCommand, void>
{
  constructor(private readonly repository: FigureSkatingOrganizationRepository) {}

  async execute(command: UpdateFigureSkatingOrganizationCommand): Promise<void> {
    const organization = await this.repository.findById(command.organizationId)

    assert.ok(organization, 'Figure skating organization not found')

    await this.repository.save(
      organization.update(
        command.fullName,
        command.abbreviation,
        command.websiteName,
        command.listName,
        command.foundingDate,
        command.category,
        command.cityId,
        command.address,
        command.phone,
        command.inn,
        command.applicantId,
        command.applicantJobTitle,
        command.applicantPhone,
        command.contingent,
        command.disciplines,
        command.responsible,
        command.charterId,
        command.registrationCertificateId,
        command.curatorId,
        command.additionalInformation,
      )
    )
  }
}
