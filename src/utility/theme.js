import {
    PRIMARY,
    PRIMARY_BG,
    TEXT_PRIMARY,
    TEXT_WHITE,
    WHITE,
    MEDIUM_DARK_CYAN_BLUE
  } from './colors';
  
  export const themeLight = {
    colors: {
      statusBar: 'dark-content',
      background: PRIMARY_BG,
      primary: PRIMARY,
      textPrimary: TEXT_PRIMARY,
      textWhite: TEXT_WHITE,
      textGrey: MEDIUM_DARK_CYAN_BLUE,
      card:WHITE,
    },
    fonts: {
      bold: 'Roboto-Bold',
      medium: 'Roboto-Medium',
      regular: 'Roboto-Regular',
      light: 'Roboto-Light',
    },
  };
  
  export const themeDark = {
    dark: true,
    colors: {
      statusBar: 'light-content',
      // background: GHOST_WHITE,
      // primary: PURPLE,
      // secondary: PURPLE_100,
      // textButton: WHITE,
      // text: DARK_CYAN_BLUE,
      // subText: MEDIUM_DARK_CYAN_BLUE,
    },
    // fonts: {
    //   bold: 'Roboto-Bold',
    //   medium: 'Roboto-Medium',
    //   regular: 'Roboto-Regular',
    //   light: 'Roboto-Light',
    // },
  };
  