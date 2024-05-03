import type { ControlElement }    from '@ui-primitives/input'

import type { InputControlProps } from './input-control/index.js'
import type { InputRootProps }    from './input-root/index.js'

import { forwardRef }             from 'react'
import React                      from 'react'

import { InputControl }           from './input-control/index.js'
import { InputRoot }              from './input-root/index.js'

export interface InputProps
  extends InputRootProps,
    Pick<InputControlProps, 'disabled' | 'invalid' | 'variant'> {
  size?: InputControlProps['controlSize']
}

export const Input = forwardRef<ControlElement, InputProps>((
  { variant, size, invalid, disabled, ...props },
  forwardedRef
) => (
  <InputRoot {...props}>
    <InputControl
      ref={forwardedRef}
      variant={variant}
      controlSize={size}
      invalid={invalid}
      disabled={disabled}
    />
  </InputRoot>
))
