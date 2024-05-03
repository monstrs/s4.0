import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui/theme'

export const inputControlBaseStyles = style({
  fontFamily: vars.fonts.primary,
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'text',
  position: 'relative',
  textAlign: 'left',
})

export const inputControlStyles = recipe({
  base: inputControlBaseStyles,

  variants: {
    variant: {
      primary: {
        color: vars.colors.doveBlue,
        backgroundColor: vars.colors.white,
        borderRadius: vars.radii.little,
        borderColor: vars.colors.lightSteelBlue,
        borderStyle: 'solid',
        borderWidth: 1,
        '::placeholder': {
          color: vars.colors.lightTelegray,
        },
      },
    },
    size: {
      normal: {
        height: 44,
        padding: '9.5px 11px',
        fontSize: vars.fontSizes.tiny,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
    invalid: {
      true: {
        borderColor: vars.colors.red,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'normal',
  },
})
