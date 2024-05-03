import { Guard }                              from '@monstrs/guard-clause'
import { Against }                            from '@monstrs/guard-clause'
import { AggregateRoot }                      from '@nestjs/cqrs'

import { SportsmanRank }                      from '../enums/index.js'
import { FigureSkatingSportsmanCreatedEvent } from '../events/index.js'
import { FigureSkatingSportsmanUpdatedEvent } from '../events/index.js'

export class FigureSkatingSportsman extends AggregateRoot {
  #id!: string

  #personId!: string

  #rank!: SportsmanRank

  #rankAssignDate!: Date

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

  get rank(): SportsmanRank {
    return this.#rank
  }

  private set rank(rank: SportsmanRank) {
    this.#rank = rank
  }

  get rankAssignDate(): Date {
    return this.#rankAssignDate
  }

  private set rankAssignDate(rankAssignDate: Date) {
    this.#rankAssignDate = rankAssignDate
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
    @Against('rank').NotEnum(SportsmanRank) rank: SportsmanRank,
    @Against('rankAssignDate').NotInstance(Date) rankAssignDate: Date
  ): FigureSkatingSportsman {
    this.apply(
      new FigureSkatingSportsmanCreatedEvent(id, personId, rank, rankAssignDate, new Date())
    )

    return this
  }

  @Guard()
  update(
    @Against('rank').NotEnum(SportsmanRank) rank: SportsmanRank,
    @Against('rankAssignDate').NotInstance(Date) rankAssignDate: Date
  ): FigureSkatingSportsman {
    this.apply(new FigureSkatingSportsmanUpdatedEvent(this.id, rank, rankAssignDate))

    return this
  }

  protected onFigureSkatingSportsmanCreatedEvent(event: FigureSkatingSportsmanCreatedEvent): void {
    this.#id = event.sportsmanId
    this.#personId = event.personId
    this.#rank = event.rank
    this.#rankAssignDate = event.rankAssignDate
    this.#createdAt = event.createdAt
  }

  protected onFigureSkatingSportsmanUpdatedEvent(event: FigureSkatingSportsmanUpdatedEvent): void {
    this.#rank = event.rank
    this.#rankAssignDate = event.rankAssignDate
  }
}
