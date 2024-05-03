import { createStore }                  from 'effector'

import type { OrganizationCategory }         from '../enums/index.js'
import { changeOrganizationFieldEvent } from '../events/index.js'

export interface OrganizationFieldsProps {
  fullName: string
  abbreviation: string
  websiteName: string
  listName: string
  foundingDate?: Date
  category?: OrganizationCategory
  curatorId?: string
}

const initialState: OrganizationFieldsProps = {
  fullName: '',
  abbreviation: '',
  websiteName: '',
  listName: '',
  foundingDate: undefined,
  category: undefined,
  curatorId: undefined,
}

export const $organizationFields = createStore<OrganizationFieldsProps>(initialState, {
  sid: 'organization-fields',
})

$organizationFields.on(changeOrganizationFieldEvent, (state, { key, value }) => ({
  ...state,
  [key]: value,
}))
