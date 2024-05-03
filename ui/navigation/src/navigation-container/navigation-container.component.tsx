import { ReactElement }              from 'react'
import { ReactNode }                 from 'react'
import React                         from 'react'

import { navigationContainerStyles } from './navigation-container.css.js'

export interface NavigationContainerProps {
  children: ReactNode
}

export const NavigationContainer = ({ children }: NavigationContainerProps): ReactElement => (
  <div className={navigationContainerStyles}>{children}</div>
)
