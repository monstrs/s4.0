import type { ReactElement }        from 'react'
import type { ReactNode }           from 'react'

import type { TooltipContentProps } from './tooltip-content/index.js'

import { Provider }                 from '@radix-ui/react-tooltip'
import { Root }                     from '@radix-ui/react-tooltip'
import { TooltipTrigger }           from '@radix-ui/react-tooltip'
import { Portal }                   from '@radix-ui/react-tooltip'
import React                        from 'react'

import { TooltipArrow }             from './tooltip-arrow/index.js'
import { TooltipContent }           from './tooltip-content/index.js'

export interface TooltipProps extends Omit<TooltipContentProps, 'content'> {
  content?: ReactNode | string
}

export const Tooltip = ({
  side = 'bottom',
  sideOffset,
  alignOffset,
  align = 'center',
  children,
  content,
  contentSize,
  ...props
}: TooltipProps): ReactElement => (
  <Provider>
    <Root {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <Portal>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          contentSize={contentSize}
        >
          {content}
          <TooltipArrow />
        </TooltipContent>
      </Portal>
    </Root>
  </Provider>
)
