import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { AntdRegistry }      from '@ant-design/nextjs-registry'
import { Open_Sans }         from 'next/font/google'
import React                 from 'react'

import { RootProviders }     from './root.providers.jsx'

const openSans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export type RootLayoutProps = {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps): ReactElement => (
  <html className={openSans.className}>
    <body>
      <AntdRegistry>
        <RootProviders>{children}</RootProviders>
      </AntdRegistry>
    </body>
  </html>
)
