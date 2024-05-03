// @generated by protoc-gen-abstractions 0.0.1 with parameter "target=ts"
// @generated from file ru/sportvokrug/persons/v1alpha1/persons.service.proto (package ru.sportvokrug.persons.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Timestamp } from '@bufbuild/protobuf'

/**
 * @generated from enum ru.sportvokrug.persons.v1alpha1.Gender
 */
export enum Gender {
  /**
   * @generated from enum value: MALE = 0;
   */
  MALE = 0,

  /**
   * @generated from enum value: FEMALE = 1;
   */
  FEMALE = 1,
}

/**
 * @generated from enum ru.sportvokrug.persons.v1alpha1.SportsmanRank
 */
export enum SportsmanRank {
  /**
   * @generated from enum value: NOT_SPECIFIED = 0;
   */
  NOT_SPECIFIED = 0,

  /**
   * @generated from enum value: NO_RANK = 1;
   */
  NO_RANK = 1,

  /**
   * @generated from enum value: THIRD_YOUTH = 2;
   */
  THIRD_YOUTH = 2,

  /**
   * @generated from enum value: SECOND_YOUTH = 3;
   */
  SECOND_YOUTH = 3,

  /**
   * @generated from enum value: FIRST_YOUTH = 4;
   */
  FIRST_YOUTH = 4,

  /**
   * @generated from enum value: THIRD_SPORTS = 5;
   */
  THIRD_SPORTS = 5,

  /**
   * @generated from enum value: SECOND_SPORTS = 6;
   */
  SECOND_SPORTS = 6,

  /**
   * @generated from enum value: FIRST_SPORTS = 7;
   */
  FIRST_SPORTS = 7,

  /**
   * @generated from enum value: CANDIDATE_MASTER_OF_SPORTS = 8;
   */
  CANDIDATE_MASTER_OF_SPORTS = 8,

  /**
   * @generated from enum value: MASTER_OF_SPORTS = 9;
   */
  MASTER_OF_SPORTS = 9,

  /**
   * @generated from enum value: INTERNATIONAL_MASTER_OF_SPORTS = 10;
   */
  INTERNATIONAL_MASTER_OF_SPORTS = 10,

  /**
   * @generated from enum value: HONORED_MASTER_OF_SPORTS = 11;
   */
  HONORED_MASTER_OF_SPORTS = 11,
}

/**
 * @generated from enum ru.sportvokrug.persons.v1alpha1.JudgeRank
 */
export enum JudgeRank {
  /**
   * @generated from enum value: SPORTS_JUDGE_THIRD_CATEGORY = 0;
   */
  SPORTS_JUDGE_THIRD_CATEGORY = 0,

  /**
   * @generated from enum value: SPORTS_JUDGE_SECOND_CATEGORY = 1;
   */
  SPORTS_JUDGE_SECOND_CATEGORY = 1,

  /**
   * @generated from enum value: SPORTS_JUDGE_FIRST_CATEGORY = 2;
   */
  SPORTS_JUDGE_FIRST_CATEGORY = 2,

  /**
   * @generated from enum value: SPORTS_JUDGE_ALL_RUSSIAN_CATEGORY = 3;
   */
  SPORTS_JUDGE_ALL_RUSSIAN_CATEGORY = 3,
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.Person
 */
export abstract class Person {
  /**
   * @generated from field: string id = 1;
   */
  abstract readonly id: string

  /**
   * @generated from field: string first_name = 2;
   */
  abstract readonly firstName: string

  /**
   * @generated from field: string last_name = 3;
   */
  abstract readonly lastName: string

  /**
   * @generated from field: string patronymic = 4;
   */
  abstract readonly patronymic: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Gender gender = 5;
   */
  abstract readonly gender: Gender

  /**
   * @generated from field: google.protobuf.Timestamp birthday = 6;
   */
  abstract readonly birthday?: Timestamp

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 7;
   */
  abstract readonly createdAt?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.Coach
 */
export abstract class Coach {
  /**
   * @generated from field: string id = 1;
   */
  abstract readonly id: string

  /**
   * @generated from field: string person_id = 2;
   */
  abstract readonly personId: string

  /**
   * @generated from field: bool is_honored = 3;
   */
  abstract readonly isHonored: boolean

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  abstract readonly createdAt?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.FigureSkatingSportsman
 */
export abstract class FigureSkatingSportsman {
  /**
   * @generated from field: string id = 1;
   */
  abstract readonly id: string

  /**
   * @generated from field: string person_id = 2;
   */
  abstract readonly personId: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.SportsmanRank rank = 3;
   */
  abstract readonly rank: SportsmanRank

  /**
   * @generated from field: google.protobuf.Timestamp rank_assign_date = 4;
   */
  abstract readonly rankAssignDate?: Timestamp

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  abstract readonly createdAt?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.FigureSkatingJudge
 */
export abstract class FigureSkatingJudge {
  /**
   * @generated from field: string id = 1;
   */
  abstract readonly id: string

  /**
   * @generated from field: string person_id = 2;
   */
  abstract readonly personId: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.JudgeRank rank = 3;
   */
  abstract readonly rank: JudgeRank

  /**
   * @generated from field: google.protobuf.Timestamp rank_order_date = 4;
   */
  abstract readonly rankOrderDate?: Timestamp

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  abstract readonly createdAt?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreatePersonRequest
 */
export abstract class CreatePersonRequest {
  /**
   * @generated from field: string first_name = 1;
   */
  abstract readonly firstName: string

  /**
   * @generated from field: string last_name = 2;
   */
  abstract readonly lastName: string

  /**
   * @generated from field: string patronymic = 3;
   */
  abstract readonly patronymic: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Gender gender = 4;
   */
  abstract readonly gender: Gender

  /**
   * @generated from field: google.protobuf.Timestamp birthday = 5;
   */
  abstract readonly birthday?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreatePersonResponse
 */
export abstract class CreatePersonResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Person person = 1;
   */
  abstract readonly person?: Person
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdatePersonRequest
 */
export abstract class UpdatePersonRequest {
  /**
   * @generated from field: string person_id = 1;
   */
  abstract readonly personId: string

  /**
   * @generated from field: string first_name = 2;
   */
  abstract readonly firstName: string

  /**
   * @generated from field: string last_name = 3;
   */
  abstract readonly lastName: string

  /**
   * @generated from field: string patronymic = 4;
   */
  abstract readonly patronymic: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Gender gender = 5;
   */
  abstract readonly gender: Gender

  /**
   * @generated from field: google.protobuf.Timestamp birthday = 6;
   */
  abstract readonly birthday?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdatePersonResponse
 */
export abstract class UpdatePersonResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Person person = 1;
   */
  abstract readonly person?: Person
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreateCoachRequest
 */
export abstract class CreateCoachRequest {
  /**
   * @generated from field: string person_id = 1;
   */
  abstract readonly personId: string

  /**
   * @generated from field: bool is_honored = 2;
   */
  abstract readonly isHonored: boolean
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreateCoachResponse
 */
export abstract class CreateCoachResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Coach coach = 1;
   */
  abstract readonly coach?: Coach
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdateCoachRequest
 */
export abstract class UpdateCoachRequest {
  /**
   * @generated from field: string coach_id = 1;
   */
  abstract readonly coachId: string

  /**
   * @generated from field: bool is_honored = 2;
   */
  abstract readonly isHonored: boolean
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdateCoachResponse
 */
export abstract class UpdateCoachResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.Coach coach = 1;
   */
  abstract readonly coach?: Coach
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreateFigureSkatingSportsmanRequest
 */
export abstract class CreateFigureSkatingSportsmanRequest {
  /**
   * @generated from field: string person_id = 1;
   */
  abstract readonly personId: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.SportsmanRank rank = 2;
   */
  abstract readonly rank: SportsmanRank

  /**
   * @generated from field: google.protobuf.Timestamp rank_assign_date = 3;
   */
  abstract readonly rankAssignDate?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreateFigureSkatingSportsmanResponse
 */
export abstract class CreateFigureSkatingSportsmanResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.FigureSkatingSportsman sportsman = 1;
   */
  abstract readonly sportsman?: FigureSkatingSportsman
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdateFigureSkatingSportsmanRequest
 */
export abstract class UpdateFigureSkatingSportsmanRequest {
  /**
   * @generated from field: string sportsman_id = 1;
   */
  abstract readonly sportsmanId: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.SportsmanRank rank = 2;
   */
  abstract readonly rank: SportsmanRank

  /**
   * @generated from field: google.protobuf.Timestamp rank_assign_date = 3;
   */
  abstract readonly rankAssignDate?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdateFigureSkatingSportsmanResponse
 */
export abstract class UpdateFigureSkatingSportsmanResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.FigureSkatingSportsman sportsman = 1;
   */
  abstract readonly sportsman?: FigureSkatingSportsman
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreateFigureSkatingJudgeRequest
 */
export abstract class CreateFigureSkatingJudgeRequest {
  /**
   * @generated from field: string person_id = 1;
   */
  abstract readonly personId: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.JudgeRank rank = 2;
   */
  abstract readonly rank: JudgeRank

  /**
   * @generated from field: google.protobuf.Timestamp rank_order_date = 3;
   */
  abstract readonly rankOrderDate?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.CreateFigureSkatingJudgeResponse
 */
export abstract class CreateFigureSkatingJudgeResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.FigureSkatingJudge judge = 1;
   */
  abstract readonly judge?: FigureSkatingJudge
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdateFigureSkatingJudgeRequest
 */
export abstract class UpdateFigureSkatingJudgeRequest {
  /**
   * @generated from field: string judge_id = 1;
   */
  abstract readonly judgeId: string

  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.JudgeRank rank = 2;
   */
  abstract readonly rank: JudgeRank

  /**
   * @generated from field: google.protobuf.Timestamp rank_order_date = 3;
   */
  abstract readonly rankOrderDate?: Timestamp
}

/**
 * @generated from message ru.sportvokrug.persons.v1alpha1.UpdateFigureSkatingJudgeResponse
 */
export abstract class UpdateFigureSkatingJudgeResponse {
  /**
   * @generated from field: ru.sportvokrug.persons.v1alpha1.FigureSkatingJudge judge = 1;
   */
  abstract readonly judge?: FigureSkatingJudge
}