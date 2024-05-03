import { createStore }                               from 'effector'

import type { FigureSkatingDisciplines }                  from '../enums/index.js'
import { changeFigureSkatingOrganizationFieldEvent } from '../events/index.js'

export interface FigureSkatingOrganizationFieldsProps {
  cityId: string
  address: string
  phone: string
  inn: string
  additionalInformation?: string
  applicantJobTitle: string
  applicantPhone: string
  disciplines: Array<FigureSkatingDisciplines>
}

const initialState: FigureSkatingOrganizationFieldsProps = {
  cityId: '',
  address: '',
  phone: '',
  inn: '',
  additionalInformation: undefined,
  applicantJobTitle: '',
  applicantPhone: '',
  disciplines: [],
}

export const $figureSkatingOrganizationFields = createStore<FigureSkatingOrganizationFieldsProps>(
  initialState,
  {
    sid: 'figure-skating-organization-fields',
  }
)

$figureSkatingOrganizationFields.on(changeFigureSkatingOrganizationFieldEvent, (
  state,
  { key, value }
) => ({
  ...state,
  [key]: value,
}))
