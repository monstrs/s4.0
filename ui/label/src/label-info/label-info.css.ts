import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const labelInfoStyles = style({
  color: vars.colors.blue,
  display: 'inline-flex',
  cursor: 'help',
  marginLeft: 4,
})
