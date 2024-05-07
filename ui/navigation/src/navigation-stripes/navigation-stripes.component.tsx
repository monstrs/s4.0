import type { ReactElement }            from 'react'

import React                            from 'react'

import { navigationBlueStripeStyles }   from './navigation-stripers.css.js'
import { navigationOrangeStripeStyles } from './navigation-stripers.css.js'
import { navigationGreenStripeStyles }  from './navigation-stripers.css.js'
import { navigationRedStripeStyles }    from './navigation-stripers.css.js'
import { navigationStripesStyles }      from './navigation-stripers.css.js'

export const NavigationStripes = (): ReactElement => (
  <div className={navigationStripesStyles}>
    <div className={navigationGreenStripeStyles} />
    <div className={navigationRedStripeStyles} />
    <div className={navigationOrangeStripeStyles} />
    <div className={navigationBlueStripeStyles} />
  </div>
)
