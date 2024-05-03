import type { FindFigureSkatingOrganizationsByQuery } from '../repositories/index.js'

export class GetFigureSkatingOrganizationsQuery {
  constructor(
    public readonly pager: FindFigureSkatingOrganizationsByQuery['pager'],
    public readonly order?: FindFigureSkatingOrganizationsByQuery['order'],
    public readonly query?: FindFigureSkatingOrganizationsByQuery['query'],
    public readonly search?: FindFigureSkatingOrganizationsByQuery['search']
  ) {}
}
