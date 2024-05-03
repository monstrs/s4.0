import type { OrganizationCategory }         from '../enums/index.js'
import type { ChangeOrganizationFieldProps } from '../events/index.js'
import type { OrganizationErrors }           from '../interfaces/index.js'
import type { OrganizationFields }           from '../interfaces/index.js'

import { useUnit }                           from 'effector-react'
import { useCallback }                       from 'react'

import { $organizationErrors }               from '../stores/index.js'
import { $organizationFields }               from '../stores/index.js'
import { changeOrganizationFieldEvent }      from '../events/index.js'

export const useOrganizationErrors = (): OrganizationErrors => useUnit($organizationErrors)

export const useOrganizationFields = (): OrganizationFields => useUnit($organizationFields)

export const useChangeOrganizationField = (): ((
  props: ChangeOrganizationFieldProps
) => ChangeOrganizationFieldProps) => useUnit(changeOrganizationFieldEvent)

export const useChangeOrganizationFields = (): {
  onChangeFullName: (fullname: string) => void
  onChangeAbbreviation: (abbreviation: string) => void
  onChangeWebsiteName: (websiteName: string) => void
  onChangeListName: (listName: string) => void
  onChangeFoundingDate: (foundingDate: Date) => void
  onChangeCategory: (cateogory: OrganizationCategory) => void
  onChangeCuratorId: (curatorId: string) => void
} => {
  const onChangeOrganizationField = useChangeOrganizationField()

  const onChangeFullName = useCallback(
    (value: string) => onChangeOrganizationField({ key: 'fullName', value }),
    [onChangeOrganizationField]
  )

  const onChangeAbbreviation = useCallback(
    (value: string) => onChangeOrganizationField({ key: 'abbreviation', value }),
    [onChangeOrganizationField]
  )

  const onChangeWebsiteName = useCallback(
    (value: string) => onChangeOrganizationField({ key: 'websiteName', value }),
    [onChangeOrganizationField]
  )

  const onChangeListName = useCallback(
    (value: string) => onChangeOrganizationField({ key: 'listName', value }),
    [onChangeOrganizationField]
  )

  const onChangeFoundingDate = useCallback(
    (value: Date) => onChangeOrganizationField({ key: 'foundingDate', value }),
    [onChangeOrganizationField]
  )

  const onChangeCategory = useCallback(
    (value: OrganizationCategory) => onChangeOrganizationField({ key: 'category', value }),
    [onChangeOrganizationField]
  )

  const onChangeCuratorId = useCallback(
    (value: string) => onChangeOrganizationField({ key: 'curatorId', value }),
    [onChangeOrganizationField]
  )

  return {
    onChangeFullName,
    onChangeAbbreviation,
    onChangeWebsiteName,
    onChangeListName,
    onChangeFoundingDate,
    onChangeCategory,
    onChangeCuratorId,
  }
}
