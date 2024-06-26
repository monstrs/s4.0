// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file ru/sportvokrug/figure_skating/v1alpha1/figure-skating.service.proto (package ru.sportvokrug.figure_skatings.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind }                              from '@bufbuild/protobuf'

import { CreateFigureSkatingOrganizationRequest }  from './figure-skating.service_pb.js'
import { CreateFigureSkatingOrganizationResponse } from './figure-skating.service_pb.js'
import { ListFigureSkatingOrganizationsRequest }   from './figure-skating.service_pb.js'
import { ListFigureSkatingOrganizationsResponse }  from './figure-skating.service_pb.js'
import { UpdateFigureSkatingOrganizationRequest }  from './figure-skating.service_pb.js'
import { UpdateFigureSkatingOrganizationResponse } from './figure-skating.service_pb.js'

/**
 * @generated from service ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingService
 */
export const FigureSkatingService = {
  typeName: 'ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingService',
  methods: {
    /**
     * @generated from rpc ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingService.CreateFigureSkatingOrganization
     */
    createFigureSkatingOrganization: {
      name: 'CreateFigureSkatingOrganization',
      I: CreateFigureSkatingOrganizationRequest,
      O: CreateFigureSkatingOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingService.UpdateFigureSkatingOrganization
     */
    updateFigureSkatingOrganization: {
      name: 'UpdateFigureSkatingOrganization',
      I: UpdateFigureSkatingOrganizationRequest,
      O: UpdateFigureSkatingOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc ru.sportvokrug.figure_skatings.v1alpha1.FigureSkatingService.ListFigureSkatingOrganizations
     */
    listFigureSkatingOrganizations: {
      name: 'ListFigureSkatingOrganizations',
      I: ListFigureSkatingOrganizationsRequest,
      O: ListFigureSkatingOrganizationsResponse,
      kind: MethodKind.Unary,
    },
  },
} as const
