'use client'

import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { ConfigProvider }    from 'antd'
import React                 from 'react'

const theme = {
  antdMainColor: '#0093EE',

  animTime: `0.5s`,
  borderRadius: '4px',
  border_card: '1px solid rgba(229, 238, 245, 0.38)',
  border_line_color: '#e8eaf1',
  border_line: `solid 1px #e8eaf1`,
  cAddButton: '#f2f2f2',
  cAddButtonActive: '#e7e6e6',
  cAlbumBack: '#fafbfc',
  cAlbumName: '#8dabc4',
  cBackGrey: '#fafafa',
  cBlack: '#121212',

  cBlue: '#03B0F6',
  cBlueActive: '#0384B8',
  cBlueDisabled: '#919191',
  cBorder: '#f5f5f6',
  cBorderLine: '#d7d8da',
  cDarkBlue: '#1b5366',
  cAccent: '#1b5366',
  cDarkGreyText: '#4E4E4E',
  cDarkRed: '#c80600',
  cDanger: '#c80600',
  cDividerLine: '#d8e5ee',
  cGrey: '#c3c5cb',
  cGreyBorder: 'rgba(0,0,0,.26)',
  cGreyHeader: '#d8e5ee',
  cGreySub: '#9ba6b4',
  cGreyText: '#8c8c8c',
  cDarkText: '#5B6B7F',
  cFormPlaceholderText: '#8c8c8c',
  cHoverBlue: '#ecf5fd',
  cIndigo: '#2c405a',
  cLightBlue: '#00aff5',
  cInfo: '#00aff5',
  cLightGrey: '#a6a6a6',
  cLinkDarkBlue: '#44546A',
  cLinkLightBlue: '#05B0F0',
  cLinkHover: '#828993',
  cLinkText: '#2B587A',
  cMenuBorder: '#dedfe2',
  cNav: '#8c8c8c',
  cNavActive: '#333333',
  cOrange: '#fe7a24',
  cMain: '#fe7a24',
  cOrangeLight: '#ffad7e',
  cPaleGray: '#f9f9f9',
  cPaleGrey2: '#fafbfc',
  cRed: '#ff0000',
  cRowActive: '#EEF5FC',
  cRowFocus: '#F5FFFE',
  cRowHover: '#FAFBFC',
  cSlateGray: '#656f77',
  cSuccess: '#92D050',
  cSuperBlack: '#000000',
  cTextColor: '#1f1f1f',
  cWhite: '#fefefe',
  disabled_color: '#C9C9C9',
  disabled_input_border_color: '#C9C9C9',
  fontFamilyBase:
    'OpenSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial, sans-serif',
  fontFamilyBaseBold:
    'OpenSans-SemiBold, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial, sans-serif',
  fontSizeBase: `1.3rem`,
  gGap: '20px',
  input_border_color: '#a8c6df',
  input_border: `solid 1px #a8c6df`,
  input_font_weight: '400',
  input_line_height: '17px',
  input_placeholder_color: '#C9C9C9',
  input_text_align: 'left',
  input_text_color: '#5B6B7F',
  input_text_size: '15px',
  l: '32px',
  lineHeightBase: `1.714285714`,
  m: '24px',
  sm: '20px',
  mediaTriggerWidth: '945px',
  // mixin: mixin,
  s: '15px',
  ss: '12px',
  shadow: '0 2px 10px 0 rgba(0, 0, 0, 0.03)',
  transitionTime: `0.2s`,
  xl: '64px',
  xs: '8px',
  xxl: '128px',
  xxs: '4px',
  сBlueHover: '#42C0F3',
}

export const AntdProvider = ({ children }: { children: ReactNode }): ReactElement => (
  <ConfigProvider
    theme={{
      token: {
        colorTextBase: theme.cDarkText,
        colorPrimary: theme.antdMainColor,
        borderRadius: parseInt(theme.borderRadius, 10),
        fontSize: parseInt(theme.input_text_size, 10),
        fontFamily: theme.fontFamilyBase,
        controlHeight: 44,
        colorBorder: theme.input_border_color,
        colorIcon: theme.cLinkLightBlue,
        colorIconHover: theme.cLinkLightBlue,
        colorLink: theme.cLinkLightBlue,
        colorLinkActive: theme.cLinkLightBlue,
        colorLinkHover: theme.cLinkLightBlue,
        colorTextPlaceholder: theme.input_placeholder_color,
        colorTextLabel: theme.cGreyText,
        colorTextHeading: theme.cGreyText,
        colorTextDisabled: theme.cGreyText,
      },
      components: {
        Button: {
          colorPrimary: theme.cOrange,
          paddingContentHorizontal: 35,
        },
        Tooltip: {
          colorTextLightSolid: theme.cTextColor,
          // @ts-expect-error
          colorBgDefault: theme.cWhite,
          colorBgSpotlight: theme.cWhite,
          fontSize: 13,
        },
        Modal: {
          colorText: theme.cSuperBlack,
          colorTextHeading: theme.cSuperBlack,
          titleFontSize: 15,
          fontSizeHeading5: 15,
          // @ts-expect-error
          colorBgDefault: theme.cWhite,
          fontSize: 15,
          padding: 0,
          paddingXS: 0,
          paddingMD: 0,
          paddingLG: 0,
          paddingContentHorizontalXS: 0,
          paddingContentHorizontalMD: 0,
          paddingContentHorizontalLG: 0,
        },
        Checkbox: {
          controlInteractiveSize: 18,
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
)
