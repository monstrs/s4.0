export class CreateCoachCommand {
  constructor(
    public readonly coachId: string,
    public readonly personId: string,
    public readonly isHonored: boolean
  ) {}
}
