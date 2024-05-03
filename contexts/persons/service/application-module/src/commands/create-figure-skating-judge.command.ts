import type { JudgeRank } from '@persons/domain-module'

export class CreateFigureSkatingJudgeCommand {
  constructor(
    public readonly judgeId: string,
    public readonly personId: string,
    public readonly rank: JudgeRank,
    public readonly rankOrderDate: Date
  ) {}
}
