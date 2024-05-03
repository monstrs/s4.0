import type { SportsmanRank } from '@persons/domain-module'

export class UpdateFigureSkatingSportsmanCommand {
  constructor(
    public readonly sportsmanId: string,
    public readonly rank: SportsmanRank,
    public readonly rankAssignDate: Date
  ) {}
}
