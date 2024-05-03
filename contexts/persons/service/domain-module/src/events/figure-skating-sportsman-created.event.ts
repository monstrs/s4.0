import type { SportsmanRank } from '../enums/index.js'

export class FigureSkatingSportsmanCreatedEvent {
  constructor(
    public readonly sportsmanId: string,
    public readonly personId: string,
    public readonly rank: SportsmanRank,
    public readonly rankAssignDate: Date,
    public readonly createdAt: Date
  ) {}
}
