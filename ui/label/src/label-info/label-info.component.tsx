import { Tooltip }            from 'antd'
import type { TooltipProps }       from 'antd'
import type { ReactElement }       from 'react'
import React                  from 'react'

import { QuestionCircleIcon } from '@ui/icons'

import { labelInfoStyles }    from './label-info.css.js'

export type LabelInfoProps = TooltipProps

export const LabelInfo = (props: LabelInfoProps): ReactElement => (
  <Tooltip {...props}>
    <span role='img' className={labelInfoStyles}>
      <QuestionCircleIcon />
    </span>
  </Tooltip>
)
