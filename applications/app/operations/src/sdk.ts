/* eslint-disable */
import type { GraphQLClient }  from 'graphql-request'
import type { RequestOptions } from 'graphql-request'

import gql                     from './graphql-tag.import.js'

export type Maybe<T> = T | undefined
export type InputMaybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type CreateFigureSkatingOrganizationErrors = {
  __typename?: 'CreateFigureSkatingOrganizationErrors'
  abbreviation?: Maybe<ValidationError>
  address?: Maybe<ValidationError>
  applicantId?: Maybe<ValidationError>
  applicantJobTitle?: Maybe<ValidationError>
  applicantPhone?: Maybe<ValidationError>
  category?: Maybe<ValidationError>
  charterId?: Maybe<ValidationError>
  cityId?: Maybe<ValidationError>
  contingent?: Maybe<ValidationError>
  curatorId?: Maybe<ValidationError>
  disciplines?: Maybe<ValidationError>
  foundingDate?: Maybe<ValidationError>
  fullName?: Maybe<ValidationError>
  inn?: Maybe<ValidationError>
  listName?: Maybe<ValidationError>
  phone?: Maybe<ValidationError>
  registrationCertificateId?: Maybe<ValidationError>
  responsible?: Maybe<ValidationError>
  websiteName?: Maybe<ValidationError>
}

export type CreateFigureSkatingOrganizationInput = {
  abbreviation: Scalars['String']['input']
  additionalInformation?: InputMaybe<Scalars['String']['input']>
  address: Scalars['String']['input']
  applicantJobTitle: Scalars['String']['input']
  applicantPhone: Scalars['String']['input']
  category?: InputMaybe<OrganizationCategory>
  charterId: Scalars['String']['input']
  cityId?: InputMaybe<Scalars['String']['input']>
  contingent: Array<FigureSkatingContingent>
  curatorId?: InputMaybe<Scalars['String']['input']>
  disciplines: Array<FigureSkatingDisciplines>
  foundingDate?: InputMaybe<Scalars['DateTime']['input']>
  fullName: Scalars['String']['input']
  inn: Scalars['String']['input']
  listName: Scalars['String']['input']
  phone: Scalars['String']['input']
  registrationCertificateId: Scalars['String']['input']
  websiteName: Scalars['String']['input']
}

export type CreateFigureSkatingOrganizationResponse = {
  __typename?: 'CreateFigureSkatingOrganizationResponse'
  errors?: Maybe<CreateFigureSkatingOrganizationErrors>
  organization?: Maybe<FigureSkatingOrganization>
}

export enum FigureSkatingContingent {
  Adults = 'ADULTS',
  Children = 'CHILDREN',
}

export enum FigureSkatingDisciplines {
  Collective = 'COLLECTIVE',
  Dance = 'DANCE',
  Other = 'OTHER',
  Pair = 'PAIR',
  Single = 'SINGLE',
  Synchronous = 'SYNCHRONOUS',
}

export type FigureSkatingOrganization = {
  __typename?: 'FigureSkatingOrganization'
  abbreviation: Scalars['String']['output']
  additionalInformation?: Maybe<Scalars['String']['output']>
  address: Scalars['String']['output']
  applicantJobTitle: Scalars['String']['output']
  applicantPhone: Scalars['String']['output']
  category: OrganizationCategory
  contingent: Array<FigureSkatingContingent>
  createdAt: Scalars['DateTime']['output']
  disciplines: Array<FigureSkatingDisciplines>
  foundingDate: Scalars['DateTime']['output']
  fullName: Scalars['String']['output']
  id: Scalars['String']['output']
  inn: Scalars['String']['output']
  listName: Scalars['String']['output']
  phone: Scalars['String']['output']
  state: OrganizationState
  websiteName: Scalars['String']['output']
}

export type FigureSkatingOrganizations = {
  __typename?: 'FigureSkatingOrganizations'
  hasNextPage: Scalars['Boolean']['output']
  organizations: Array<FigureSkatingOrganization>
}

export type ListFigureSkatingOrganizationsPagerInput = {
  offset: Scalars['Float']['input']
  take: Scalars['Float']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  createFigureSkatingOrganization: CreateFigureSkatingOrganizationResponse
}

export type MutationCreateFigureSkatingOrganizationArgs = {
  input: CreateFigureSkatingOrganizationInput
}

export enum OrganizationCategory {
  Federation = 'FEDERATION',
  Other = 'OTHER',
  School = 'SCHOOL',
  Society = 'SOCIETY',
}

export enum OrganizationState {
  Actualization = 'ACTUALIZATION',
  ActualizationCheck = 'ACTUALIZATION_CHECK',
  ActualizationFailed = 'ACTUALIZATION_FAILED',
  Canceled = 'CANCELED',
  Created = 'CREATED',
  Denied = 'DENIED',
  DoesNotExist = 'DOES_NOT_EXIST',
  InRegistry = 'IN_REGISTRY',
  NotInRegistry = 'NOT_IN_REGISTRY',
  WaitRevise = 'WAIT_REVISE',
}

export type Organizations = {
  __typename?: 'Organizations'
  figureSkating: FigureSkatingOrganizations
}

export type OrganizationsFigureSkatingArgs = {
  pager?: InputMaybe<ListFigureSkatingOrganizationsPagerInput>
}

export type Query = {
  __typename?: 'Query'
  organizations: Organizations
}

export type ValidationError = {
  __typename?: 'ValidationError'
  id: Scalars['String']['output']
  message: Scalars['String']['output']
}

export type CreateFigureSkatingOrganizationMutationVariables = Exact<{
  input: CreateFigureSkatingOrganizationInput
}>

export type CreateFigureSkatingOrganizationMutation = {
  __typename?: 'Mutation'
  createFigureSkatingOrganization: {
    __typename?: 'CreateFigureSkatingOrganizationResponse'
    organization?: { __typename?: 'FigureSkatingOrganization'; id: string } | undefined
    errors?:
      | {
          __typename?: 'CreateFigureSkatingOrganizationErrors'
          fullName?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          abbreviation?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          websiteName?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          listName?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          foundingDate?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          category?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          curatorId?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          cityId?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          address?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          phone?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          inn?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          applicantId?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          applicantJobTitle?:
            | { __typename?: 'ValidationError'; id: string; message: string }
            | undefined
          applicantPhone?:
            | { __typename?: 'ValidationError'; id: string; message: string }
            | undefined
          contingent?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          disciplines?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          responsible?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          charterId?: { __typename?: 'ValidationError'; id: string; message: string } | undefined
          registrationCertificateId?:
            | { __typename?: 'ValidationError'; id: string; message: string }
            | undefined
        }
      | undefined
  }
}

export type LoadFigureSkatingOrganizationsQueryVariables = Exact<{ [key: string]: never }>

export type LoadFigureSkatingOrganizationsQuery = {
  __typename?: 'Query'
  organizations: {
    __typename?: 'Organizations'
    figureSkating: {
      __typename?: 'FigureSkatingOrganizations'
      organizations: Array<{
        __typename?: 'FigureSkatingOrganization'
        id: string
        fullName: string
        abbreviation: string
        category: OrganizationCategory
      }>
    }
  }
}

export const CreateFigureSkatingOrganizationDocument = gql`
  mutation createFigureSkatingOrganization($input: CreateFigureSkatingOrganizationInput!) {
    createFigureSkatingOrganization(input: $input) {
      organization {
        id
      }
      errors {
        fullName {
          id
          message
        }
        abbreviation {
          id
          message
        }
        websiteName {
          id
          message
        }
        listName {
          id
          message
        }
        foundingDate {
          id
          message
        }
        category {
          id
          message
        }
        curatorId {
          id
          message
        }
        cityId {
          id
          message
        }
        address {
          id
          message
        }
        phone {
          id
          message
        }
        inn {
          id
          message
        }
        applicantId {
          id
          message
        }
        applicantJobTitle {
          id
          message
        }
        applicantPhone {
          id
          message
        }
        contingent {
          id
          message
        }
        disciplines {
          id
          message
        }
        responsible {
          id
          message
        }
        charterId {
          id
          message
        }
        registrationCertificateId {
          id
          message
        }
      }
    }
  }
`
export const LoadFigureSkatingOrganizationsDocument = gql`
  query loadFigureSkatingOrganizations {
    organizations {
      figureSkating {
        organizations {
          id
          fullName
          abbreviation
          category
        }
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
  action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createFigureSkatingOrganization(
      variables: CreateFigureSkatingOrganizationMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CreateFigureSkatingOrganizationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateFigureSkatingOrganizationMutation>(
            CreateFigureSkatingOrganizationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'createFigureSkatingOrganization',
        'mutation',
        variables
      )
    },
    loadFigureSkatingOrganizations(
      variables?: LoadFigureSkatingOrganizationsQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<LoadFigureSkatingOrganizationsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoadFigureSkatingOrganizationsQuery>(
            LoadFigureSkatingOrganizationsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'loadFigureSkatingOrganizations',
        'query',
        variables
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
