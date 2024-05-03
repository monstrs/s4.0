import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui/theme'

export const tooltipArrowBaseStyles = style({
  transform: 'translateY(-2px)',
})

export const tooltipArrowStyles = recipe({
  base: tooltipArrowBaseStyles,
  variants: {
    variant: {
      primary: {
        fill: vars.colors.white,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
