/**
 * @jest-environment jsdom
 */

import React from 'react'
import { describe, jest }                           from '@jest/globals'
import { afterAll }                           from '@jest/globals'
import { beforeAll }                          from '@jest/globals'
import { expect }                             from '@jest/globals'
import { it }                                 from '@jest/globals'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { FigureSkatingOrganizationInformationEditor, FigureSkatingOrganizationInformationEditorProps } from './figure-skating-organization-information.editor.jsx'

describe('figure-skating-organization-information.editor', () => {  
    it('check change full name', async () => {
        const props = {
            onChangeFullName: jest.fn()
        } as any as FigureSkatingOrganizationInformationEditorProps

        const {container} =render(
            <FigureSkatingOrganizationInformationEditor
                {...props}
            />
        )

        console.log(container)
        
    })
  })