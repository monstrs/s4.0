import type { TooltipContentProps as BaseTooltipContentProps } from '@radix-ui/react-tooltip'
import type { ReactElement }                                   from 'react'

import { Content }                                             from '@radix-ui/react-tooltip'
import React                                                   from 'react'

import { tooltipContentStyles }                                from './tooltip-content.css.js'

export interface TooltipContentProps extends BaseTooltipContentProps {
  contentSize?: 'normal'
}

export const TooltipContent = ({ contentSize, ...props }: TooltipContentProps): ReactElement => (
  <Content className={tooltipContentStyles({ size: contentSize })} {...props} />
)
