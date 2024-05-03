import type { Gender } from '../enums/index.js'

export class PersonCreatedEvent {
  constructor(
    public readonly personId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly patronymic: string,
    public readonly birthday: Date,
    public readonly gender: Gender,
    public readonly createdAt: Date
  ) {}
}
