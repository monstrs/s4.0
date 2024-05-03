import { style }     from '@vanilla-extract/css'
import { keyframes } from '@vanilla-extract/css'
import { recipe }    from '@vanilla-extract/recipes'

import { vars }      from '@ui/theme'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const tooltipContentBaseStyles = style({
  fontFamily: vars.fonts.primary,
  zIndex: 1000,
  maxWidth: 'calc(100vw - 40px)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  animationFillMode: 'forwards',
  willChange: 'transform, opacity',
  outline: 'none',
  selectors: {
    '&[data-state$="open"][data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-state$="open"][data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-state$="open"][data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-state$="open"][data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
})

export const tooltipContentStyles = recipe({
  base: tooltipContentBaseStyles,

  variants: {
    variant: {
      primary: {
        borderRadius: vars.radii.small,
        backgroundColor: vars.colors.white,
        color: vars.colors.white,
        fontSize: vars.fontSizes.tiny,
        fontWeight: vars.fontWeights.medium,
        lineHeight: vars.lineHeights.normal,
        boxShadow:
          '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
      },
    },
    size: {
      normal: {
        padding: 12,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'normal',
  },
})
