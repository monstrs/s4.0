import type { CreateFigureSkatingOrganizationMutation } from '@app/operations'
import type { CreateFigureSkatingOrganizationInput }    from '@app/operations'

import { createEffect }                                 from 'effector'
import { attach }                                       from 'effector'

import { $figureSkatingOrganizationFields} from '@organizations/figure-skating-organization-entity'
import { $organizationFields }                          from '@organizations/organization-entity'
import operations                                       from '@app/operations'

export const createFigureSkatingOrganizationFx = createEffect(async (
  input: CreateFigureSkatingOrganizationInput
): Promise<CreateFigureSkatingOrganizationMutation['createFigureSkatingOrganization']> => {
  const { createFigureSkatingOrganization } = await operations.createFigureSkatingOrganization({
    input,
  })

  return createFigureSkatingOrganization
})

export const createFigureSkatingOrganizationAttachFx = attach({
  effect: createFigureSkatingOrganizationFx,
  source: { organization: $organizationFields, figureSkatingOrganization: $figureSkatingOrganizationFields },
  mapParams: (_, { organization, figureSkatingOrganization }) => ({
    fullName: organization.fullName,
    abbreviation: organization.abbreviation,
    websiteName: organization.websiteName,
    listName: organization.listName,
    foundingDate: organization.foundingDate,
    category: organization.category!,
    curatorId: organization.curatorId!,
    address: figureSkatingOrganization.address,
    cityId: figureSkatingOrganization.cityId,
    phone: figureSkatingOrganization.phone,
    inn: figureSkatingOrganization.inn,
    additionalInformation: figureSkatingOrganization.additionalInformation,
    applicantJobTitle: figureSkatingOrganization.applicantJobTitle,
    applicantPhone: figureSkatingOrganization.applicantPhone,
    disciplines: figureSkatingOrganization.disciplines,
    contingent: [],
    charterId: '',
    registrationCertificateId: ''
  }),
})
