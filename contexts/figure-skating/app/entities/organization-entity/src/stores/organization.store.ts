import type { OrganizationErrors }      from '../interfaces/index.js'
import type { OrganizationFields }      from '../interfaces/index.js'

import { createStore }                  from 'effector'

import { changeOrganizationFieldEvent } from '../events/index.js'
import { setOrganizationErrorsEvent }   from '../events/index.js'

const initialState: OrganizationFields = {
  fullName: '',
  abbreviation: '',
  websiteName: '',
  listName: '',
  foundingDate: undefined,
  category: undefined,
  curatorId: undefined,
}

export const $organizationFields = createStore<OrganizationFields>(initialState, {
  sid: 'organization-fields',
})

$organizationFields.on(changeOrganizationFieldEvent, (state, { key, value }) => ({
  ...state,
  [key]: value,
}))

export const $organizationErrors = createStore<OrganizationErrors>(
  {},
  {
    sid: 'organization-errors',
  }
)

$organizationErrors.on(setOrganizationErrorsEvent, (_, errors) => errors)
