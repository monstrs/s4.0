import type { SportsmanRank } from '../enums/index.js'

export class FigureSkatingSportsmanUpdatedEvent {
  constructor(
    public readonly sportsmanId: string,
    public readonly rank: SportsmanRank,
    public readonly rankAssignDate: Date
  ) {}
}
