import type { OrganizationCategory } from '../enums/index.js'

export interface OrganizationFields {
  fullName: string
  abbreviation: string
  websiteName: string
  listName: string
  foundingDate?: Date
  category?: OrganizationCategory
  curatorId?: string
}
