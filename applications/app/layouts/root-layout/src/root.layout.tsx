import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { AntdRegistry }      from '@ant-design/nextjs-registry'
import { Open_Sans }         from 'next/font/google'
import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Logo }              from '@ui/logo'
import { Navigation }        from '@ui/navigation'

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
        <RootProviders>
          <Column>
            <Layout>
              <Navigation>
                <Row width={['100%', '114x', '114x']}>
                  <Layout ml='2x' mr='2x'>
                    <Logo />
                  </Layout>
                </Row>
              </Navigation>
            </Layout>
            <Layout justifyContent='center' width='100%'>
              <Row width={['100%', '114x', '114x']}>
                <Layout width='100%'>{children}</Layout>
              </Row>
            </Layout>
          </Column>
        </RootProviders>
      </AntdRegistry>
    </body>
  </html>
)
