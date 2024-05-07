import type { OrganizationCategory } from '@figure-skating/organization-entity'

export interface FigureSkatingOrganization {
  id: string
  fullName: string
  abbreviation: string
  category: OrganizationCategory
}
