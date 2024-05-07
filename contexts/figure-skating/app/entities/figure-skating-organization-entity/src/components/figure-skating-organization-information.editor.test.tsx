/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

import type { FigureSkatingOrganizationInformationEditorProps } from './figure-skating-organization-information.editor.jsx'

import { faker }                                                from '@faker-js/faker'
import { describe }                                             from '@jest/globals'
import { jest }                                                 from '@jest/globals'
import { expect }                                               from '@jest/globals'
import { it }                                                   from '@jest/globals'
import { render }                                               from '@testing-library/react'
import { fireEvent }                                            from '@testing-library/react'
import React                                                    from 'react'

import { FigureSkatingOrganizationInformationEditor }           from './figure-skating-organization-information.editor.jsx'

describe('figure-skating-organization-information.editor', () => {
  describe('address', () => {
    it('check set address', async () => {
      const props = {
        address: faker.word.sample(),
      } as any as FigureSkatingOrganizationInformationEditorProps

      const { container } = render(<FigureSkatingOrganizationInformationEditor {...props} />)

      const input: HTMLInputElement = container.querySelector('#organization-information-address')!

      expect(input.value).toBe(props.address)
    })

    it('check change address', async () => {
      const value = faker.word.sample()

      const props = {
        onChangeAddress: jest.fn(),
      } as any as FigureSkatingOrganizationInformationEditorProps

      const { container } = render(<FigureSkatingOrganizationInformationEditor {...props} />)

      const input: HTMLInputElement = container.querySelector('#organization-information-address')!

      fireEvent.change(input, { target: { value } })

      expect(props.onChangeAddress).toBeCalledTimes(1)
      expect(props.onChangeAddress).toBeCalledWith(value)
    })
  })
})
