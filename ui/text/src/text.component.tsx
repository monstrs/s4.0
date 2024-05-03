import type { ElementType }  from 'react'
import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'
import type { LegacyRef }    from 'react'

import React                 from 'react'

import { textSprinkles }     from './sprinkles.css.js'

export type TextSprinklesProps = Parameters<typeof textSprinkles>[0]

export interface TextProps<C extends ElementType> extends Omit<TextSprinklesProps, 'color'> {
  children: ReactNode
  style?: Record<string, string>
  className?: string
  as?: C
  color?: TextSprinklesProps['color'] | null
  ref?: LegacyRef<HTMLSpanElement>
}

export const Text = <C extends ElementType = 'span'>({
  children,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  m,
  mr,
  ml,
  mt,
  mb,
  marginX,
  marginY,
  mx,
  my,
  p,
  pr,
  pl,
  pt,
  pb,
  paddingX,
  paddingY,
  px,
  py,
  color = 'black',
  background,
  backgroundColor,
  opacity,
  fontFamily = 'primary',
  fontSize = 'normal',
  fontWeight = 'normal',
  lineHeight = 'normal',
  textAlign,
  letterSpacing,
  fontStyle,
  textTransform,
  textOverflow,
  wordBreak,
  whiteSpace,
  display = 'inline-flex',
  boxSizing = 'border-box',
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  verticalAlign,
  overflow,
  overflowX,
  overflowY,
  className,
  as,
  ...props
}: TextProps<C>): ReactElement => {
  const sprinklesClassName = textSprinkles({
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    padding,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    m,
    mr,
    ml,
    mt,
    mb,
    marginX,
    marginY,
    mx,
    my,
    p,
    pr,
    pl,
    pt,
    pb,
    paddingX,
    paddingY,
    px,
    py,
    color: color || undefined,
    background,
    backgroundColor,
    opacity,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    textAlign,
    letterSpacing,
    fontStyle,
    textTransform,
    textOverflow,
    wordBreak,
    whiteSpace,
    display,
    boxSizing,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    verticalAlign,
    overflow,
    overflowX,
    overflowY,
  })

  const Component: any = as || 'span'

  return (
    <Component
      {...props}
      className={(!!className && `${className} ${sprinklesClassName}`) || sprinklesClassName}
    >
      {children}
    </Component>
  )
}
