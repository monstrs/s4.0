import type { Gender } from '@persons/domain-module'

export class UpdatePersonCommand {
  constructor(
    public readonly personId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly patronymic: string,
    public readonly gender: Gender,
    public readonly birthday: Date
  ) {}
}
