import type { FigureSkatingOrganizationErrors }      from '../interfaces/index.js'
import type { FigureSkatingOrganizationFields }      from '../interfaces/index.js'

import { createStore }                               from 'effector'

import { changeFigureSkatingOrganizationFieldEvent } from '../events/index.js'
import { setFigureSkatingOrganizationErrorsEvent }   from '../events/index.js'

const initialState: FigureSkatingOrganizationFields = {
  cityId: '',
  address: '',
  phone: '',
  inn: '',
  additionalInformation: undefined,
  applicantJobTitle: '',
  applicantPhone: '',
  disciplines: [],
}

export const $figureSkatingOrganizationFields = createStore<FigureSkatingOrganizationFields>(
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

export const $figureSkatingOrganizationErrors = createStore<FigureSkatingOrganizationErrors>(
  {},
  {
    sid: 'figure-skating-organization-errors',
  }
)

$figureSkatingOrganizationErrors.on(setFigureSkatingOrganizationErrorsEvent, (_, errors) => errors)
