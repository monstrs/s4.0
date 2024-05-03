import { createGlobalTheme } from '@vanilla-extract/css'

import { borders }           from './borders.js'
import { colors }            from './colors.js'
import { fontSizes }         from './font-sizes.js'
import { fontWeights }       from './font-weights.js'
import { fonts }             from './fonts.js'
import { lineHeights }       from './line-heights.js'
import { radii }             from './radii.js'
import { shadows }           from './shadows.js'
import { zIndex }            from './z-index.js'

export const vars = createGlobalTheme(':root', {
  borders,
  radii,
  colors,
  shadows,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  zIndex,
})
