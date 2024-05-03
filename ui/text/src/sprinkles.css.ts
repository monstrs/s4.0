import { createSprinkles }      from '@vanilla-extract/sprinkles'

import { spaceProperties }      from '@ui/sprinkles'
import { layoutProperties }     from '@ui/sprinkles'
import { typographyProperties } from '@ui/sprinkles'
import { colorProperties }      from '@ui/sprinkles'

export const textSprinkles = createSprinkles(
  spaceProperties,
  layoutProperties,
  colorProperties,
  typographyProperties
)
