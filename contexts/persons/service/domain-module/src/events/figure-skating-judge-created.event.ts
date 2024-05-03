import type { JudgeRank } from '../enums/index.js'

export class FigureSkatingJudgeCreatedEvent {
  constructor(
    public readonly sportsmanId: string,
    public readonly personId: string,
    public readonly rank: JudgeRank,
    public readonly rankOrderDate: Date,
    public readonly createdAt: Date
  ) {}
}
