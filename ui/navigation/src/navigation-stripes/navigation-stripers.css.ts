import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const navigationStripesStyles = style({
  width: '100%',
})

export const navigationGreenStripeStyles = style({
  backgroundColor: vars.colors.mainGreen,
  width: '100%',
  height: 5,
  marginBottom: 2,
})

export const navigationRedStripeStyles = style({
  backgroundColor: vars.colors.mainRed,
  width: '100%',
  height: 5,
  marginBottom: 2,
})

export const navigationOrangeStripeStyles = style({
  backgroundColor: vars.colors.mainOrange,
  width: '100%',
  height: 5,
  marginBottom: 2,
})

export const navigationBlueStripeStyles = style({
  backgroundColor: vars.colors.mainBlue,
  width: '100%',
  height: 5,
  marginBottom: 2,
})
