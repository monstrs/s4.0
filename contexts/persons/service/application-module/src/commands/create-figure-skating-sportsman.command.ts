import type { SportsmanRank } from '@persons/domain-module'

export class CreateFigureSkatingSportsmanCommand {
  constructor(
    public readonly sportsmanId: string,
    public readonly personId: string,
    public readonly rank: SportsmanRank,
    public readonly rankAssignDate: Date
  ) {}
}
