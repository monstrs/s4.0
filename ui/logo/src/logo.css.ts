import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const logoStyles = style({
  color: vars.colors.black,
  fontWeight: vars.fontWeights.bold,
  fontSize: vars.fontSizes.medium,
  whiteSpace: 'nowrap',
  fontVariantLigatures: 'no-common-ligatures',
})

export const logoSecondaryStyles = style({
  color: vars.colors.commonBlue,
})
