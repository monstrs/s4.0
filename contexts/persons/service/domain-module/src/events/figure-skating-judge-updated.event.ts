import type { JudgeRank } from '../enums/index.js'

export class FigureSkatingJudgeUpdatedEvent {
  constructor(
    public readonly sportsmanId: string,
    public readonly rank: JudgeRank,
    public readonly rankOrderDate: Date
  ) {}
}
