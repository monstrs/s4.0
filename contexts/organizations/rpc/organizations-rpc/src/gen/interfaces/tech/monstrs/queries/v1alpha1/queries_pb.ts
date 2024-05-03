// @generated by protoc-gen-interfaces 0.0.1 with parameter "target=ts"
// @generated from file tech/monstrs/queries/v1alpha1/queries.proto (package tech.monstrs.queries.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query
 */
export interface Query {
}

/**
 * @generated from enum tech.monstrs.queries.v1alpha1.Query.OrderDirection
 */
export enum Query_OrderDirection {
  /**
   * @generated from enum value: ORDER_DIRECTION_ASC = 0;
   */
  ASC = 0,

  /**
   * @generated from enum value: ORDER_DIRECTION_DESC = 1;
   */
  DESC = 1,
}

/**
 * @generated from enum tech.monstrs.queries.v1alpha1.Query.Operator
 */
export enum Query_Operator {
  /**
   * @generated from enum value: OPERATOR_AND = 0;
   */
  AND = 0,

  /**
   * @generated from enum value: OPERATOR_OR = 1;
   */
  OR = 1,
}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Pager
 */
export interface Query_Pager {
  /**
   * @generated from field: int32 offset = 1;
   */
  offset: number;

  /**
   * @generated from field: int32 take = 2;
   */
  take: number;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Order
 */
export interface Query_Order {
  /**
   * @generated from field: string field = 1;
   */
  field: string;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.OrderDirection direction = 2;
   */
  direction: Query_OrderDirection;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Search
 */
export interface Query_Search {
  /**
   * @generated from field: repeated tech.monstrs.queries.v1alpha1.Query.Search.Field fields = 1;
   */
  fields: Query_Search_Field[];

  /**
   * @generated from field: string value = 2;
   */
  value: string;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Search.Field
 */
export interface Query_Search_Field {
  /**
   * @generated from field: repeated string path = 1;
   */
  path: string[];

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.StringValue
 */
export interface Query_StringValue {
  /**
   * @generated from field: string value = 1;
   */
  value: string;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.StringValues
 */
export interface Query_StringValues {
  /**
   * @generated from field: repeated string values = 1;
   */
  values: string[];

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.IntValue
 */
export interface Query_IntValue {
  /**
   * @generated from field: int32 value = 1;
   */
  value: number;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.IntValues
 */
export interface Query_IntValues {
  /**
   * @generated from field: repeated int32 values = 1;
   */
  values: number[];

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Int64Value
 */
export interface Query_Int64Value {
  /**
   * @generated from field: int64 value = 1;
   */
  value: bigint;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Int64Values
 */
export interface Query_Int64Values {
  /**
   * @generated from field: repeated int64 values = 1;
   */
  values: bigint[];

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.BooleanValue
 */
export interface Query_BooleanValue {
  /**
   * @generated from field: bool value = 1;
   */
  value: boolean;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.DateValue
 */
export interface Query_DateValue {
  /**
   * @generated from field: google.protobuf.Timestamp value = 1;
   */
  value?: Timestamp;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.IDConditions
 */
export interface Query_IDConditions {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.StringValues in = 1;
   */
  in?: Query_StringValues;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.StringValue eq = 2;
   */
  eq?: Query_StringValue;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.BooleanValue exists = 3;
   */
  exists?: Query_BooleanValue;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.ID
 */
export interface Query_ID {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Operator operator = 1;
   */
  operator: Query_Operator;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.IDConditions conditions = 2;
   */
  conditions?: Query_IDConditions;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.DateRangeConditions
 */
export interface Query_DateRangeConditions {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.DateValue from = 1;
   */
  from?: Query_DateValue;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.DateValue to = 2;
   */
  to?: Query_DateValue;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.DateRange
 */
export interface Query_DateRange {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Operator operator = 1;
   */
  operator: Query_Operator;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.DateRangeConditions conditions = 2;
   */
  conditions?: Query_DateRangeConditions;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.DateConditions
 */
export interface Query_DateConditions {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.DateValue eq = 1;
   */
  eq?: Query_DateValue;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.BooleanValue exists = 2;
   */
  exists?: Query_BooleanValue;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Date
 */
export interface Query_Date {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Operator operator = 1;
   */
  operator: Query_Operator;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.DateConditions conditions = 2;
   */
  conditions?: Query_DateConditions;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.StringConditions
 */
export interface Query_StringConditions {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.StringValues in = 1;
   */
  in?: Query_StringValues;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.StringValue eq = 2;
   */
  eq?: Query_StringValue;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.StringValue contains = 3;
   */
  contains?: Query_StringValue;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.String
 */
export interface Query_String {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Operator operator = 1;
   */
  operator: Query_Operator;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.StringConditions conditions = 2;
   */
  conditions?: Query_StringConditions;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.IntConditions
 */
export interface Query_IntConditions {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.IntValues in = 1;
   */
  in?: Query_IntValues;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.IntValue eq = 2;
   */
  eq?: Query_IntValue;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Int
 */
export interface Query_Int {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Operator operator = 1;
   */
  operator: Query_Operator;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.IntConditions conditions = 2;
   */
  conditions?: Query_IntConditions;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Int64Conditions
 */
export interface Query_Int64Conditions {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64Values in = 1;
   */
  in?: Query_Int64Values;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64Value eq = 2;
   */
  eq?: Query_Int64Value;

}

/**
 * @generated from message tech.monstrs.queries.v1alpha1.Query.Int64
 */
export interface Query_Int64 {
  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Operator operator = 1;
   */
  operator: Query_Operator;

  /**
   * @generated from field: tech.monstrs.queries.v1alpha1.Query.Int64Conditions conditions = 2;
   */
  conditions?: Query_Int64Conditions;

}

