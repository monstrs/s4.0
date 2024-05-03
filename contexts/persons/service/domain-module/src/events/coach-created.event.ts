export class CoachCreatedEvent {
  constructor(
    public readonly coachId: string,
    public readonly personId: string,
    public readonly isHonored: boolean,
    public readonly createdAt: Date
  ) {}
}
