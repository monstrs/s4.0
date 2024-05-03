/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import type { ReactElement } from 'react'
import type { SVGProps }     from 'react'

import React                 from 'react'

import { vars }              from '@ui/theme'

const getColor = (
  color: string | keyof typeof vars.colors | undefined
): keyof typeof vars.colors | undefined => {
  if (color) {
    return vars?.colors[color as keyof typeof vars.colors] as keyof typeof vars.colors
  }
  return undefined
}
export interface ArrowIconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string | `$${keyof typeof vars.colors}`
}
export const ArrowIcon = ({ color, ...props }: ArrowIconProps): ReactElement => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 20 5'
    fill='none'
    {...props}
  >
    <path
      d='M12.1213 3.87868C10.9497 5.05025 9.05025 5.05025 7.87868 3.87868L4.87868 0.87868C4.31607 0.316071 3.55301 0 2.75736 0L0 0L20 0H17.2426C16.447 0 15.6839 0.316071 15.1213 0.87868L12.1213 3.87868Z'
      fill={getColor(color) || '#32A4E4'}
    />
  </svg>
)
