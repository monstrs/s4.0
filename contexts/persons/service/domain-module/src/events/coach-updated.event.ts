export class CoachUpdatedEvent {
  constructor(
    public readonly coachId: string,
    public readonly isHonored: boolean
  ) {}
}
