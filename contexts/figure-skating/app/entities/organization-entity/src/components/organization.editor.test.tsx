/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

import type { OrganizationEditorProps } from './organization.editor.jsx'

import { faker }                        from '@faker-js/faker'
import { describe }                     from '@jest/globals'
import { jest }                         from '@jest/globals'
import { expect }                       from '@jest/globals'
import { it }                           from '@jest/globals'
import { render }                       from '@testing-library/react'
import { fireEvent }                    from '@testing-library/react'
import React                            from 'react'

import { OrganizationEditor }           from './organization.editor.jsx'

describe('organization.editor', () => {
  describe('full name', () => {
    it('check set full name', async () => {
      const props = {
        fullName: faker.word.sample(),
      } as any as OrganizationEditorProps

      const { container } = render(<OrganizationEditor {...props} />)

      const input: HTMLInputElement = container.querySelector('#organization-full-name')!

      expect(input.value).toBe(props.fullName)
    })

    it('check change full name', async () => {
      const value = faker.word.sample()

      const props = {
        onChangeFullName: jest.fn(),
      } as any as OrganizationEditorProps

      const { container } = render(<OrganizationEditor {...props} />)

      const input: HTMLInputElement = container.querySelector('#organization-full-name')!

      fireEvent.change(input, { target: { value } })

      expect(props.onChangeFullName).toBeCalledTimes(1)
      expect(props.onChangeFullName).toBeCalledWith(value)
    })
  })
})
