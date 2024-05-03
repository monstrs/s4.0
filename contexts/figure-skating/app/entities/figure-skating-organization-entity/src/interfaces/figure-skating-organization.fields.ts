import { FigureSkatingDisciplines } from '../enums/index.js'

export interface FigureSkatingOrganizationFields {
  cityId: string
  address: string
  phone: string
  inn: string
  additionalInformation?: string
  applicantJobTitle: string
  applicantPhone: string
  disciplines: Array<FigureSkatingDisciplines>
}
