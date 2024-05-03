import type { ReactElement } from 'react'

import type { LayoutProps }  from '../layout/index.js'

import React                 from 'react'

import { Layout }            from '../layout/index.js'

export const Column = ({
  flexDirection = 'column',
  width = '100%',
  children,
  ...props
}: LayoutProps): ReactElement => (
  <Layout flexDirection={flexDirection} width={width} {...props}>
    {children}
  </Layout>
)
