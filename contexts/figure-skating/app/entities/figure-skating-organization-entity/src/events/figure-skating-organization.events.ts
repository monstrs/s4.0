import { createEvent }              from 'effector'

import type { FigureSkatingDisciplines } from '../enums/index.js'

export type ChangeFigureSkatingOrganizationFieldProps = {
  key:
    'additionalInformation' | 'address' | 'applicantJobTitle' | 'applicantPhone' | 'cityId' | 'disciplines' | 'inn' | 'phone'
  value: Array<FigureSkatingDisciplines> | string
}

export const changeFigureSkatingOrganizationFieldEvent =
  createEvent<ChangeFigureSkatingOrganizationFieldProps>()
