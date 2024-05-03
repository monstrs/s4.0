import { globalStyle } from '@vanilla-extract/css'

import { colors }      from '@ui/theme'

globalStyle('html, body', {
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  overscrollBehavior: 'contain',
  background: colors.gray,
})

globalStyle('body', {
  background: colors.gray,
  margin: 0,
})
