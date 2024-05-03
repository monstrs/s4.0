import { createEvent }          from 'effector'

import type { OrganizationCategory } from '../enums/index.js'

export type ChangeOrganizationFieldProps = {
  key:
    'abbreviation' | 'category' | 'curatorId' | 'foundingDate' | 'fullName' | 'listName' | 'websiteName'
  value: Date | OrganizationCategory | string | undefined
}

export const changeOrganizationFieldEvent = createEvent<ChangeOrganizationFieldProps>()
