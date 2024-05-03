import type { Gender } from '@persons/domain-module'

export class CreatePersonCommand {
  constructor(
    public readonly personId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly patronymic: string,
    public readonly gender: Gender,
    public readonly birthday: Date
  ) {}
}
