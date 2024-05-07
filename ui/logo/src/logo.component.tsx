import type { ReactElement }   from 'react'

import React                   from 'react'

import { logoStyles }          from './logo.css.js'
import { logoSecondaryStyles } from './logo.css.js'

export const Logo = (): ReactElement => (
  <span className={logoStyles}>
    Спорт <span className={logoSecondaryStyles}>вокруг.</span>
  </span>
)
