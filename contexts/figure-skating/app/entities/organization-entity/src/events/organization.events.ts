import type { OrganizationCategory } from '../enums/index.js'
import type { OrganizationErrors }   from '../interfaces/index.js'

import { createEvent }               from 'effector'

export type ChangeOrganizationFieldProps = {
  key:
    | 'abbreviation'
    | 'category'
    | 'curatorId'
    | 'foundingDate'
    | 'fullName'
    | 'listName'
    | 'websiteName'
  value: Date | OrganizationCategory | string | undefined
}

export const changeOrganizationFieldEvent = createEvent<ChangeOrganizationFieldProps>()

export const setOrganizationErrorsEvent = createEvent<OrganizationErrors>()
