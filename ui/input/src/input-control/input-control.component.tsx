import type { ControlProps }  from '@ui-primitives/input'
import type { ForwardedRef }  from 'react'

import { Control }            from '@ui-primitives/input'
import { forwardRef }         from 'react'
import React                  from 'react'

import { inputControlStyles } from './input-control.css.js'

export interface InputControlProps extends ControlProps {
  variant?: 'primary'
  controlSize?: 'normal'
  ref?: ForwardedRef<HTMLInputElement>
  invalid?: boolean
}

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>((
  { variant, controlSize, invalid, disabled, ...props },
  ref
) => (
  <Control
    ref={ref}
    disabled={disabled}
    className={inputControlStyles({
      variant,
      size: controlSize,
      disabled,
      invalid,
    })}
    {...props}
  />
))
