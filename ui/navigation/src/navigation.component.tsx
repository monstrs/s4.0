import { ReactElement }        from 'react'
import { ReactNode }           from 'react'
import React                   from 'react'

import { NavigationContainer } from './navigation-container/index.js'
import { NavigationStripes }   from './navigation-stripes/index.js'
import { navigationStyles }    from './navigation.css.js'

export interface NavigationProps {
  children: ReactNode
}

export const Navigation = ({ children }: NavigationProps): ReactElement => (
  <div className={navigationStyles}>
    <NavigationContainer>{children}</NavigationContainer>
    <NavigationStripes />
  </div>
)
