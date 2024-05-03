import { createSprinkles }   from '@vanilla-extract/sprinkles'

import { spaceProperties }   from '@ui/sprinkles'
import { layoutProperties }  from '@ui/sprinkles'
import { flexboxProperties } from '@ui/sprinkles'
import { colorProperties }   from '@ui/sprinkles'

export const layoutSprinkles = createSprinkles(
  spaceProperties,
  layoutProperties,
  flexboxProperties,
  colorProperties
)
