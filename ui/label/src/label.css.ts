import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const labelStyles = style({
  fontSize: vars.fontSizes.tiny,
  color: vars.colors.telegray,
  display: 'inline-flex',
  alignItems: 'center',
})
