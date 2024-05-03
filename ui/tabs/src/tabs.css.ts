import { style }       from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

export const tabsStyles = style({
  margin: 0,
})

globalStyle(`${tabsStyles} > .ant-tabs-nav`, {
  marginBottom: '0px !important',
  maxWidth: '100%',
  display: 'flex',
  gap: '10px',
})

globalStyle('.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn', {
  color: '#5B6B7F !important',
})

globalStyle('.ant-tabs-ink-bar', {
  backgroundColor: 'orange !important',
})

globalStyle('.ant-tabs-tab', {
  minWidth: '60px',
  padding: '14px 0',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
})

globalStyle('.ant-tabs .ant-tabs-tab', {
  padding: '14px 8px !important',
})
