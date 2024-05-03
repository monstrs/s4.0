// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file ru/sportvokrug/common/v1alpha1/common.types.proto (package ru.sportvokrug.common.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from '@bufbuild/protobuf'

/**
 * @generated from enum ru.sportvokrug.common.v1alpha1.FigureSkatingContingent
 */
export enum FigureSkatingContingent {
  /**
   * @generated from enum value: CHILDREN = 0;
   */
  CHILDREN = 0,

  /**
   * @generated from enum value: ADULTS = 1;
   */
  ADULTS = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(FigureSkatingContingent)
proto3.util.setEnumType(
  FigureSkatingContingent,
  'ru.sportvokrug.common.v1alpha1.FigureSkatingContingent',
  [
    { no: 0, name: 'CHILDREN' },
    { no: 1, name: 'ADULTS' },
  ]
)

/**
 * @generated from enum ru.sportvokrug.common.v1alpha1.FigureSkatingDisciplines
 */
export enum FigureSkatingDisciplines {
  /**
   * @generated from enum value: SINGLE = 0;
   */
  SINGLE = 0,

  /**
   * @generated from enum value: PAIR = 1;
   */
  PAIR = 1,

  /**
   * @generated from enum value: SYNCHRONOUS = 2;
   */
  SYNCHRONOUS = 2,

  /**
   * @generated from enum value: DANCE = 3;
   */
  DANCE = 3,

  /**
   * @generated from enum value: COLLECTIVE = 4;
   */
  COLLECTIVE = 4,

  /**
   * @generated from enum value: OTHER = 5;
   */
  OTHER = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(FigureSkatingDisciplines)
proto3.util.setEnumType(
  FigureSkatingDisciplines,
  'ru.sportvokrug.common.v1alpha1.FigureSkatingDisciplines',
  [
    { no: 0, name: 'SINGLE' },
    { no: 1, name: 'PAIR' },
    { no: 2, name: 'SYNCHRONOUS' },
    { no: 3, name: 'DANCE' },
    { no: 4, name: 'COLLECTIVE' },
    { no: 5, name: 'OTHER' },
  ]
)