import { Guard }                          from '@monstrs/guard-clause'
import { Against }                        from '@monstrs/guard-clause'
import { AggregateRoot }                  from '@nestjs/cqrs'

import { JudgeRank }                      from '../enums/index.js'
import { FigureSkatingJudgeCreatedEvent } from '../events/index.js'
import { FigureSkatingJudgeUpdatedEvent } from '../events/index.js'

export class FigureSkatingJudge extends AggregateRoot {
  #id!: string

  #personId!: string

  #rank!: JudgeRank

  #rankOrderDate!: Date

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

  get rank(): JudgeRank {
    return this.#rank
  }

  private set rank(rank: JudgeRank) {
    this.#rank = rank
  }

  get rankOrderDate(): Date {
    return this.#rankOrderDate
  }

  private set rankOrderDate(rankOrderDate: Date) {
    this.#rankOrderDate = rankOrderDate
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
    @Against('rank').NotEnum(JudgeRank) rank: JudgeRank,
    @Against('rankOrderDate').NotInstance(Date) rankOrderDate: Date
  ): FigureSkatingJudge {
    this.apply(new FigureSkatingJudgeCreatedEvent(id, personId, rank, rankOrderDate, new Date()))

    return this
  }

  @Guard()
  update(
    @Against('rank').NotEnum(JudgeRank) rank: JudgeRank,
    @Against('rankOrderDate').NotInstance(Date) rankOrderDate: Date
  ): FigureSkatingJudge {
    this.apply(new FigureSkatingJudgeUpdatedEvent(this.id, rank, rankOrderDate))

    return this
  }

  protected onFigureSkatingJudgeCreatedEvent(event: FigureSkatingJudgeCreatedEvent): void {
    this.#id = event.sportsmanId
    this.#personId = event.personId
    this.#rank = event.rank
    this.#rankOrderDate = event.rankOrderDate
    this.#createdAt = event.createdAt
  }

  protected onFigureSkatingJudgeUpdatedEvent(event: FigureSkatingJudgeUpdatedEvent): void {
    this.#rank = event.rank
    this.#rankOrderDate = event.rankOrderDate
  }
}
