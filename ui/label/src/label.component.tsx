/* eslint-disable jsx-a11y/label-has-associated-control */

import type { LabelHTMLAttributes } from 'react'
import type { ReactElement }        from 'react'
import type { ReactNode }           from 'react'

import React                        from 'react'

import { LabelInfo }                from './label-info/index.js'
import type { LabelInfoProps }           from './label-info/index.js'
import { labelStyles }              from './label.css.js'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  info?: LabelInfoProps
}

export const Label = ({ children, info, ...props }: LabelProps): ReactElement => (
  <label {...props} className={labelStyles}>
    {children}
    {!!info && <LabelInfo {...info} />}
  </label>
)
