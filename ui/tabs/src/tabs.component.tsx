import type { TabsProps }    from 'antd'
import type { ReactElement } from 'react'

import { Tabs as BaseTabs }  from 'antd'
import React                 from 'react'

import { tabsStyles }        from './tabs.css.js'

export const Tabs = (props: TabsProps): ReactElement => (
  <BaseTabs {...props} className={tabsStyles} />
)
