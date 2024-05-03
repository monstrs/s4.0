import { defineProperties } from '@vanilla-extract/sprinkles'

import { vars }             from '@ui/theme'
import { size }             from '@ui/theme'

export const spaceProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    margin: size,
    marginTop: size,
    marginLeft: size,
    marginRight: size,
    marginBottom: size,
    padding: size,
    paddingTop: size,
    paddingLeft: size,
    paddingRight: size,
    paddingBottom: size,
  },
  shorthands: {
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    p: ['padding'],
    pr: ['paddingRight'],
    pl: ['paddingLeft'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
  },
})

export const colorProperties = defineProperties({
  properties: {
    color: vars.colors,
    background: vars.colors,
    backgroundColor: vars.colors,
    opacity: undefined,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
})

export const shadowProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    boxShadow: vars.shadows,
    textShadow: vars.shadows,
  },
})

export const typographyProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    fontFamily: vars.fonts,
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    lineHeight: vars.lineHeights,
    textAlign: ['center'],
    letterSpacing: undefined,
    fontStyle: undefined,
    textTransform: ['uppercase'],
    textOverflow: ['ellipsis'],
    wordBreak: ['break-word', 'break-all'],
    whiteSpace: ['nowrap'],
  },
})

export const layoutProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    display: ['inline-flex', 'flex', 'inline', 'none'],
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    maxWidth: size,
    maxHeight: size,
    verticalAlign: undefined,
    overflow: ['hidden', 'auto', 'scroll'],
    overflowX: ['hidden', 'auto', 'scroll'],
    overflowY: ['hidden', 'auto', 'scroll'],
    boxSizing: ['border-box', 'content-box'],
  },
})

export const flexboxProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    alignItems: ['center', 'flex-start', 'flex-end', 'baseline'],
    alignContent: undefined,
    justifyItems: undefined,
    justifyContent: ['center', 'flex-start', 'flex-end', 'space-between'],
    flex: undefined,
    flexWrap: ['wrap'],
    flexDirection: ['column', 'row', 'row-reverse'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexBasis: size,
    justifySelf: undefined,
    alignSelf: ['stretch'],
    order: undefined,
  },
})

export const borderProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    border: vars.borders,
    borderRadius: vars.radii,
    borderColor: vars.colors,
    borderTop: vars.borders,
    borderRight: vars.borders,
    borderBottom: vars.borders,
    borderLeft: vars.borders,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
  },
})

export const positionProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    position: ['relative', 'absolute', 'sticky', 'static', 'fixed'],
    zIndex: vars.zIndex,
    top: size,
    right: size,
    bottom: size,
    left: size,
  },
})

export const additionProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 40em)' },
    desktop: { '@media': 'screen and (min-width: 52em)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    cursor: ['pointer', 'default'],
    outline: ['none'],
    transform: undefined,
    transition: undefined,
    pointerEvents: ['auto', 'none'],
  },
})
