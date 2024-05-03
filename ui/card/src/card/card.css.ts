import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const cardStyles = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.small,
  boxShadow: vars.shadows.base,
  border: vars.borders.base,
  width: '100%',
})
