import type { ReactElement }  from 'react'

import { Arrow }              from '@radix-ui/react-tooltip'
import React                  from 'react'

import { ArrowIcon }          from '@ui/icons'

import { tooltipArrowStyles } from './tooltip-arrow.css.js'

export const TooltipArrow = (): ReactElement => (
  <Arrow asChild className={tooltipArrowStyles({})}>
    <ArrowIcon width={28} height={7} viewBox='0 0 20 5' color='white' />
  </Arrow>
)
