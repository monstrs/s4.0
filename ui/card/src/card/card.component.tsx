import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import React                 from 'react'

import { cardStyles }        from './card.css.js'

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps): ReactElement => (
  <div className={cardStyles}>{children}</div>
)
