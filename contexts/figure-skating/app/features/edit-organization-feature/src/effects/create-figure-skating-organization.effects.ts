import type { CreateFigureSkatingOrganizationMutation } from '@app/operations'
import type { CreateFigureSkatingOrganizationInput }    from '@app/operations'

import { createEffect }                                 from 'effector'
import { attach }                                       from 'effector'
import { sample }                                       from 'effector'

import { $figureSkatingOrganizationFields }             from '@figure-skating/figure-skating-organization-entity'
import { $organizationFields }                          from '@figure-skating/organization-entity'
import { setFigureSkatingOrganizationErrorsEvent }      from '@figure-skating/figure-skating-organization-entity'
import { setOrganizationErrorsEvent }                   from '@figure-skating/organization-entity'
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
  source: {
    organization: $organizationFields,
    figureSkatingOrganization: $figureSkatingOrganizationFields,
  },
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
    registrationCertificateId: '',
  }),
})

sample({
  clock: createFigureSkatingOrganizationAttachFx.doneData,
  filter({ errors }) {
    return !!errors
  },
  fn({ errors }) {
    return errors!
  },
  target: setFigureSkatingOrganizationErrorsEvent,
})

sample({
  clock: createFigureSkatingOrganizationAttachFx.doneData,
  filter({ errors }) {
    return !!errors
  },
  fn({ errors }) {
    return errors!
  },
  target: setOrganizationErrorsEvent,
})
