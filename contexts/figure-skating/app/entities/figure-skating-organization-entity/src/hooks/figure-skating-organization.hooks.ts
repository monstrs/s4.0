'use client'

import type { FigureSkatingDisciplines }                  from '../enums/index.js'
import type { ChangeFigureSkatingOrganizationFieldProps } from '../events/index.js'
import type { FigureSkatingOrganization }                 from '../interfaces/index.js'
import type { FigureSkatingOrganizationErrors }           from '../interfaces/index.js'
import type { FigureSkatingOrganizationFields }           from '../interfaces/index.js'

import { useUnit }                                        from 'effector-react'
import { useCallback }                                    from 'react'

import { $figureSkatingOrganizationErrors }               from '../stores/index.js'
import { $figureSkatingOrganizations }                    from '../stores/index.js'
import { $figureSkatingOrganizationFields }               from '../stores/index.js'
import { changeFigureSkatingOrganizationFieldEvent }      from '../events/index.js'

export const useFigureSkatingOrganizationErrors = (): FigureSkatingOrganizationErrors =>
  useUnit($figureSkatingOrganizationErrors)

export const useFigureSkatingOrganizationFields = (): FigureSkatingOrganizationFields =>
  useUnit($figureSkatingOrganizationFields)

export const useChangeFigureSkatingOrganizationField = (): ((
  props: ChangeFigureSkatingOrganizationFieldProps
) => ChangeFigureSkatingOrganizationFieldProps) =>
  useUnit(changeFigureSkatingOrganizationFieldEvent)

export const useChangeFigureSkatingOrganizationFields = (): {
  onChangeCityId: (fullname: string) => void
  onChangeAddress: (address: string) => void
  onChangePhone: (phone: string) => void
  onChangeInn: (inn: string) => void
  onChangeAdditionalInformation: (additionalInformation: string) => void
  onChangeApplicantJobTitle: (applicantJobTitle: string) => void
  onChangeApplicantPhone: (applicantPhone: string) => void
  onChangeDisciplines: (disciplines: Array<FigureSkatingDisciplines>) => void
} => {
  const onChangeFigureSkatingOrganizationField = useChangeFigureSkatingOrganizationField()

  const onChangeCityId = useCallback(
    (value: string) => onChangeFigureSkatingOrganizationField({ key: 'cityId', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangeAddress = useCallback(
    (value: string) => onChangeFigureSkatingOrganizationField({ key: 'address', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangePhone = useCallback(
    (value: string) => onChangeFigureSkatingOrganizationField({ key: 'phone', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangeInn = useCallback(
    (value: string) => onChangeFigureSkatingOrganizationField({ key: 'inn', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangeAdditionalInformation = useCallback(
    (value: string) =>
      onChangeFigureSkatingOrganizationField({ key: 'additionalInformation', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangeApplicantJobTitle = useCallback(
    (value: string) => onChangeFigureSkatingOrganizationField({ key: 'applicantJobTitle', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangeApplicantPhone = useCallback(
    (value: string) => onChangeFigureSkatingOrganizationField({ key: 'applicantPhone', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  const onChangeDisciplines = useCallback(
    (value: Array<FigureSkatingDisciplines>) =>
      onChangeFigureSkatingOrganizationField({ key: 'disciplines', value }),
    [onChangeFigureSkatingOrganizationField]
  )

  return {
    onChangeCityId,
    onChangeAddress,
    onChangePhone,
    onChangeInn,
    onChangeAdditionalInformation,
    onChangeApplicantJobTitle,
    onChangeApplicantPhone,
    onChangeDisciplines,
  }
}

export const useFigureSkatingOrganizations = (): {
  organizations: Array<FigureSkatingOrganization>
  hasNext: boolean
} => useUnit($figureSkatingOrganizations)
