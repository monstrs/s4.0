import type { FigureSkatingDisciplines }        from '../enums/index.js'
import type { FigureSkatingOrganizationErrors } from '../interfaces/index.js'
import type { FigureSkatingOrganization }       from '../interfaces/index.js'

import { createEvent }                          from 'effector'

export type ChangeFigureSkatingOrganizationFieldProps = {
  key:
    | 'additionalInformation'
    | 'address'
    | 'applicantJobTitle'
    | 'applicantPhone'
    | 'cityId'
    | 'disciplines'
    | 'inn'
    | 'phone'
  value: Array<FigureSkatingDisciplines> | string
}

export const changeFigureSkatingOrganizationFieldEvent =
  createEvent<ChangeFigureSkatingOrganizationFieldProps>()

export const setFigureSkatingOrganizationErrorsEvent =
  createEvent<FigureSkatingOrganizationErrors>()

export const figureSkatingOrganizationsLoadedEvent = createEvent<{
  organizations: Array<FigureSkatingOrganization>
  hasNext: boolean
}>()
