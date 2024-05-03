import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const navigationContainerStyles = style({
  backgroundColor: vars.colors.lightWhite,
  width: '100%',
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
