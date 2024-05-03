import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const cardDividerStyles = style({
  width: '100%',
  height: 1,
  background: vars.colors.grayTransparent,
})
