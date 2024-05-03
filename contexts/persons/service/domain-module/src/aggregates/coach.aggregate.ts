import { Guard }             from '@monstrs/guard-clause'
import { Against }           from '@monstrs/guard-clause'
import { AggregateRoot }     from '@nestjs/cqrs'

import { CoachCreatedEvent } from '../events/index.js'
import { CoachUpdatedEvent } from '../events/index.js'

export class Coach extends AggregateRoot {
  #id!: string

  #personId!: string

  #isHonored!: boolean

  #createdAt!: Date

  get id(): string {
    return this.#id
  }

  private set id(id: string) {
    this.#id = id
  }

  get personId(): string {
    return this.#personId
  }

  private set personId(personId: string) {
    this.#personId = personId
  }

  get isHonored(): boolean {
    return this.#isHonored
  }

  private set isHonored(isHonored: boolean) {
    this.#isHonored = isHonored
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  private set createdAt(createdAt: Date) {
    this.#createdAt = createdAt
  }

  @Guard()
  create(
    @Against('id').NotUUID(4) id: string,
    @Against('personId').Empty() personId: string,
    @Against('isHonored').NotInstance(Boolean) isHonored: boolean
  ): Coach {
    this.apply(new CoachCreatedEvent(id, personId, isHonored, new Date()))

    return this
  }

  @Guard()
  update(@Against('sport').NotInstance(Boolean) isHonored: boolean): Coach {
    this.apply(new CoachUpdatedEvent(this.id, isHonored))

    return this
  }

  protected onCoachCreatedEvent(event: CoachCreatedEvent): void {
    this.#id = event.coachId
    this.#personId = event.personId
    this.#isHonored = event.isHonored
  }

  protected onCoachUpdatedEvent(event: CoachUpdatedEvent): void {
    this.#isHonored = event.isHonored
  }
}
