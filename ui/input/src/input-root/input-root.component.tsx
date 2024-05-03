import type { RootProps }    from '@ui-primitives/input'
import type { ReactElement } from 'react'

import { Root }              from '@ui-primitives/input'
import React                 from 'react'

import { inputRootStyles }   from './input-root.css.js'

export type InputRootProps = RootProps

export const InputRoot = (props: RootProps): ReactElement => (
  <Root className={inputRootStyles} {...props} />
)
