import type { JudgeRank } from '@persons/domain-module'

export class UpdateFigureSkatingJudgeCommand {
  constructor(
    public readonly judgeId: string,
    public readonly rank: JudgeRank,
    public readonly rankOrderDate: Date
  ) {}
}
