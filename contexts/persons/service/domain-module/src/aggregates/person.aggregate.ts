import { Guard }              from '@monstrs/guard-clause'
import { Against }            from '@monstrs/guard-clause'
import { AggregateRoot }      from '@nestjs/cqrs'

import { Gender }             from '../enums/index.js'
import { PersonCreatedEvent } from '../events/index.js'
import { PersonUpdatedEvent } from '../events/index.js'

export class Person extends AggregateRoot {
  #id!: string

  #firstName!: string

  #lastName!: string

  #patronymic!: string

  #birthday!: Date

  #gender!: Gender

  #createdAt!: Date

  get id(): string {
    return this.#id
  }

  private set id(id: string) {
    this.#id = id
  }

  get firstName(): string {
    return this.#firstName
  }

  private set firstName(firstName: string) {
    this.#firstName = firstName
  }

  get lastName(): string {
    return this.#lastName
  }

  private set lastName(lastName: string) {
    this.#lastName = lastName
  }

  get patronymic(): string {
    return this.#patronymic
  }

  private set patronymic(patronymic: string) {
    this.#patronymic = patronymic
  }

  get birthday(): Date {
    return this.#birthday
  }

  private set birthday(birthday: Date) {
    this.#birthday = birthday
  }

  get gender(): Gender {
    return this.#gender
  }

  private set gender(gender: Gender) {
    this.#gender = gender
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
    @Against('firstName').Empty() firstName: string,
    @Against('lastName').Empty() lastName: string,
    @Against('patronymic').Empty() patronymic: string,
    @Against('birthday').NotInstance(Date) birthday: Date,
    @Against('gender').NotEnum(Gender) gender: Gender
  ): Person {
    this.apply(
      new PersonCreatedEvent(id, firstName, lastName, patronymic, birthday, gender, new Date())
    )

    return this
  }

  @Guard()
  update(
    @Against('firstName').Empty() firstName: string,
    @Against('lastName').Empty() lastName: string,
    @Against('patronymic').Empty() patronymic: string,
    @Against('birthday').NotInstance(Date) birthday: Date,
    @Against('gender').NotEnum(Gender) gender: Gender
  ): Person {
    this.apply(new PersonUpdatedEvent(this.id, firstName, lastName, patronymic, birthday, gender))

    return this
  }

  protected onPersonCreatedEvent(event: PersonCreatedEvent): void {
    this.#id = event.personId
    this.#firstName = event.firstName
    this.#lastName = event.lastName
    this.#patronymic = event.patronymic
    this.#birthday = event.birthday
    this.#gender = event.gender
    this.#createdAt = event.createdAt
  }

  protected onPersonUpdatedEvent(event: PersonUpdatedEvent): void {
    this.#firstName = event.firstName
    this.#lastName = event.lastName
    this.#patronymic = event.patronymic
    this.#birthday = event.birthday
    this.#gender = event.gender
  }
}
