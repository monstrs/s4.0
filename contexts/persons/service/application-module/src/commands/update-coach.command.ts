export class UpdateCoachCommand {
  constructor(
    public readonly coachId: string,
    public readonly isHonored: boolean
  ) {}
}
