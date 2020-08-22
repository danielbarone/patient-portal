import { createMuiTheme } from '@material-ui/core/styles';

import * as colors from '../assets/jss/colors';

const light = createMuiTheme({
    // Background
    BACKGROUND_000: colors.BACKGROUND_LIGHT_000, 
    BACKGROUND_001: colors.BACKGROUND_LIGHT_001,
    // Drawer
    DIVIDER: colors.SNOW_STORM[0],
    DRAWER_BACKGROUNG: colors.SNOW_STORM[2],
    DRAWER_BORDER: colors.SNOW_STORM[0],
    DRAWER_ITEM_HOVER: colors.SNOW_STORM[1],
    DRAWER_TEXT: colors.PRIMARY_LIGHT,
    DRAWER_TEXT_ACTIVE: colors.FROST[3],
    // Inner Drawer
    INNER_DRAWER: 'rgba(236, 239, 244, 0.3)',
    INNER_DRAWER_ITEM_HOVER: colors.SNOW_STORM[1],
    INNER_DRAWER_TEXT: colors.POLAR_NIGHT[0],
    INNER_DRAWER_TEXT_ACTIVE: colors.FROST[3],
    // Billing Content 
    BILLING_BACKGROUND: colors.WHITE,
    // MessagesTabs
    MSG_TABS_CONTAINER: colors.WHITE,
    MSG_TABS_TEXT: colors.PRIMARY_LIGHT,
    MSG_TABS_TABINDICATOR: colors.POLAR_NIGHT[2],
    // ProfileForm
    PROFILE_BOX_FILL: colors.WHITE,
    PROFILE_TEXT: colors.PRIMARY_LIGHT,
    PROFILE_BOX_INDICATOR: colors.POLAR_NIGHT[2],
    // TABLE_DIVIDER
    TABLE_DIVIDER: colors.FROST[1],
    // Invoices
    DUE_DATE: colors.AURORA[1],
    PAID: colors.AURORA[3],
    OVERDUE: colors.AURORA[0],
    ROW_PAID: '',
    ROW_PAID_HOVER: `${colors.BACKGROUND_LIGHT_001} !important`,
    // ROW_OVERDUE: 'rgba(191, 97, 106, 0.8)',
    // ROW_OVERDUE_HOVER: 'rgba(191, 97, 106, 1) !important',
    ROW_TXT_PAID: colors.AURORA[3],
    ROW_TXT_OVERDUE: colors.AURORA[0],
    ROW_DESC_PAID: colors.AURORA[3],
    ROW_DESC_OVERDUE: colors.AURORA[0],
    ROW_OVERDUE: '',
    ROW_OVERDUE_HOVER: `${colors.BACKGROUND_LIGHT_001} !important`,
    DETAILS_PAID: 'rgba(163, 190, 140, 0.2)',
    DETAILS_OVERDUE: 'rgba(191, 97, 106, 0.3)',
    // Global
    PRIMARY: colors.PRIMARY_LIGHT,
    WHITE: colors.WHITE,
    HIGHLIGHT: colors.FROST[1],
    ERROR: colors.AURORA[0],
    SUCCESS: colors.AURORA[3],
    // MONEY: colors.AURORA[3],
    MONEY: colors.FROST[3],
    PRIORITY_1: colors.AURORA[0],
    PRIORITY_2: colors.AURORA[1],
    // Button Primary
    BTN_PRIMARY: colors.FROST[3],
    BTN_PRIMARY_TXT: colors.WHITE,
    BTN_PRIMARY_BORDER: 'solid 1px rgba(0, 0, 0, 0)',
    
    // Button Secondary
    BTN_SECONDARY: colors.WHITE,
    BTN_SECONDARY_TXT: colors.FROST[3],
    BTN_SECONDARY_BORDER: `solid 1px ${colors.FROST[3]}`,

    BTN_PAID_TXT: colors.AURORA[3],
    BTN_OVERDUE_TXT: colors.AURORA[0],
    BTN_PAID_BORDER: `solid 1px ${colors.AURORA[3]}`,
    BTN_OVERDUE_BORDER: `solid 1px ${colors.AURORA[0]}`,

    BTN_OVERDUE_HOVER: 'rgba(191, 97, 106, 0.1)',
    BTN_OVERDUE_TXT_HOVER: 'rgba(191, 97, 106, 0.8)',
    BTN_OVERDUE_BORDER_HOVER: `solid 1px rgba(191, 97, 106, 1)`,
    
    BTN_SECONDARY_HOVER: colors.SNOW_STORM[2],
    BTN_SECONDARY_TXT_HOVER: colors.FROST[1],
    BTN_SECONDARY_BORDER_HOVER: `solid 1px ${colors.FROST[1]}`,

    EXPAND_PAID: colors.AURORA[3],
    EXPAND_OVERDUE: colors.AURORA[0],

    // Buttons
    buttons: {
      primary: {
        color: colors.DARKS[2],
        borderColor: 'transparent',
        transition: 'all 0.3s ease',
        backgroundColor: colors.HIGHLIGHTS[1],
        boxShadow: 'none !important',
        '&:hover': {
          backgroundColor: `${colors.HIGHLIGHTS[1]} !important`,
          color: colors.DARKS[1],
          filter: 'brightness(85%)',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: colors.HIGHLIGHTS[1],
        border: `solid 1px ${colors.HIGHLIGHTS[1]}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: `${colors.WHITES[2]} !important`,
          color: colors.HIGHLIGHTS[1],
          border: `solid 1px ${colors.HIGHLIGHTS[1]}`,
        },
      },
    },
    // Colors
    colors: {
      background: {
        primary: colors.WHITE,
        secondary: colors.WHITES[3],
        tertiary: colors.WHITES[2],
        quaternary: colors.WHITES[0],
        active: colors.WHITES[0],
      },
      divider: {
        primary: colors.WHITES[0],
        secondary: colors.WHITES[0],
        inputBorder: {
          primary: colors.WHITES[0],
          hover: colors.DARKS[4],
          focused: colors.DARKS[4],
        },
      },
      icon: {
        active: colors.HIGHLIGHTS[3],
      },
      text: {
        primary: colors.DARKS[4],
        secondary: colors.HIGHLIGHTS[3],
        error: colors.ERROR,
        highlight: colors.HIGHLIGHTS[1],
        purple: colors.PURPLE,
        success: colors.SUCCESS,
        warning: colors.WARNING,
        white: colors.WHITE,
        yellow: colors.YELLOW,
        input: {
          primary: colors.DARKS[4],
          focused: colors.HIGHLIGHTS[1],
          label: {
            primary: colors.DARKS[4],
            focused: colors.HIGHLIGHTS[1],
          },
        },
      },
    },
    // Icons
    icons: {
      default: {
        color: 'inherit',
      },
    },
    // Material-UI Overrides
    overrides: {
      MuiListItem: {
        root: {
          '&$selected': {
            // backgroundColor: colors.WHITES[0],
            backgroundColor: 'transparent',
            color: colors.HIGHLIGHTS[3],
          },
        },
      },
    },
});

const dark = createMuiTheme({
    // Background
    BACKGROUND_000: colors.BACKGROUND_DARK_000,
    BACKGROUND_001: colors.BACKGROUND_DARK_001,
    // Drawer
    DIVIDER: colors.POLAR_NIGHT[1],
    DRAWER_BACKGROUNG: colors.POLAR_NIGHT[0],
    DRAWER_BORDER: colors.POLAR_NIGHT[1],
    DRAWER_ITEM_HOVER: colors.BACKGROUND_DARK_001,
    DRAWER_TEXT: colors.SNOW_STORM[2],
    DRAWER_TEXT_ACTIVE: colors.FROST[1],
    // Inner Drawer
    INNER_DRAWER_TEXT: colors.WHITE,
    INNER_DRAWER_TEXT_ACTIVE: colors.FROST[1],
    INNER_DRAWER_ITEM_HOVER: colors.POLAR_NIGHT[3],
    // Billing Content 
    BILLING_BACKGROUND: colors.POLAR_NIGHT[0],
    // MessagesTabs
    MSG_TABS_CONTAINER: colors.POLAR_NIGHT[3],
    MSG_TABS_TEXT: colors.SNOW_STORM[2],
    MSG_TABS_TABINDICATOR: colors.SNOW_STORM[0],
    // ProfileForm
    PROFILE_BOX_FILL: colors.POLAR_NIGHT[2],
    PROFILE_TEXT: colors.SNOW_STORM[0],
    PROFILE_BOX_INDICATOR: colors.SNOW_STORM[0],
    // TABLE_DIVIDER
    TABLE_DIVIDER: colors.FROST[1],
    // Invoices
    DUE_DATE: colors.AURORA[2],
    PAID: colors.AURORA[3],
    ROW_PAID: 'rgba(163, 190, 140, 0.3)',
    ROW_PAID_HOVER: 'rgba(163, 190, 140, 0.5) !important',
    ROW_OVERDUE: 'rgba(191, 97, 106, 0.3)',
    ROW_OVERDUE_HOVER: 'rgba(191, 97, 106, 0.5) !important',
    ROW_TXT_PAID: colors.PRIMARY_DARK,
    ROW_TXT_OVERDUE: colors.PRIMARY_DARK,
    ROW_DESC_PAID: colors.AURORA[3],
    ROW_DESC_OVERDUE: colors.AURORA[0],
    DETAILS_PAID: 'rgba(163, 190, 140, 0.1)',
    DETAILS_OVERDUE: 'rgba(191, 97, 106, 0.1)',
    // Global
    PRIMARY: colors.PRIMARY_DARK,
    WHITE: colors.WHITE,
    HIGHLIGHT: colors.FROST[1],
    ERROR: colors.AURORA[0],
    SUCCESS: colors.AURORA[3],
    // MONEY: colors.AURORA[3],
    MONEY: colors.FROST[1],
    PRIORITY_1: colors.AURORA[0],
    PRIORITY_2: colors.AURORA[1],
    // Button Primary
    BTN_PRIMARY: colors.FROST[3],
    BTN_PRIMARY_TXT: colors.WHITE,
    BTN_PRIMARY_BORDER: 'solid 1px rgba(0, 0, 0, 0)',
    // Button Secondary
    BTN_SECONDARY: colors.POLAR_NIGHT[0],
    BTN_SECONDARY_TXT: colors.FROST[1],
    BTN_SECONDARY_BORDER: `solid 1px ${colors.FROST[1]}`,

    BTN_PAID_TXT: colors.AURORA[3],
    BTN_OVERDUE_TXT: colors.AURORA[0],
    BTN_PAID_BORDER: `solid 1px ${colors.AURORA[3]}`,
    BTN_OVERDUE_BORDER: `solid 1px ${colors.AURORA[0]}`,

    BTN_OVERDUE_HOVER: 'rgba(191, 97, 106, 0.1)',
    BTN_OVERDUE_TXT_HOVER: 'rgba(191, 97, 106, 1)',
    BTN_OVERDUE_BORDER_HOVER: `solid 1px rgba(191, 97, 106, 1)`,
    
    BTN_SECONDARY_HOVER: colors.POLAR_NIGHT[3],
    BTN_SECONDARY_TXT_HOVER: colors.FROST[1],
    BTN_SECONDARY_BORDER: `solid 1px ${colors.FROST[3]}`,

    EXPAND_PAID: colors.WHITE,
    EXPAND_OVERDUE: colors.WHITE,
    // Buttons
    buttons: {
      primary: {
        color: colors.DARKS[2],
        borderColor: 'transparent',
        transition: 'all 0.3s ease',
        backgroundColor: colors.HIGHLIGHTS[1],
        boxShadow: 'none !important',
        '&:hover': {
          backgroundColor: `${colors.HIGHLIGHTS[1]} !important`,
          color: colors.DARKS[1],
          filter: 'brightness(85%)',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        color: colors.WHITES[0],
        border: `solid 1px ${colors.DARKS[4]}`,
        transition: 'all 0.3s ease',
        '&:hover': {
          color: colors.HIGHLIGHTS[3],
          border: `solid 1px ${colors.HIGHLIGHTS[3]}`,
        },
      },
    },
    // Colors
    colors: {
      background: {
        primary: colors.DARKS[1],
        secondary: colors.DARKS[0],
        tertiary: colors.DARKS[1],
        quaternary: colors.DARKS[2],
        active: colors.DARKS[2],
      },
      divider: {
        primary: colors.DARKS[2],
        secondary: colors.DARKS[3],
        inputBorder: {
          primary: colors.DARKS[2],
          hover: colors.HIGHLIGHTS[3],
          focused: colors.HIGHLIGHTS[3],
        },
      },
      icon: {
        active: colors.HIGHLIGHTS[1],
      },
      text: {
        primary: colors.WHITES[2],
        secondary: colors.HIGHLIGHTS[1],
        error: colors.ERROR,
        highlight: colors.HIGHLIGHTS[1],
        purple: colors.PURPLE,
        success: colors.SUCCESS,
        warning: colors.WARNING,
        white: colors.WHITE,
        yellow: colors.YELLOW,
        input: {
          primary: colors.WHITES[0],
          focused: colors.HIGHLIGHTS[1],
          label: {
            primary: colors.WHITES[0],
            focused: colors.HIGHLIGHTS[3],
          },
        },
      },
    },
    // Icons
    icons: {
      default: {
        color: 'inherit',
      },
    },
    // Material-UI Overrides
    overrides: {
      MuiListItem: {
        root: {
          '&$selected': {
            // backgroundColor: colors.DARKS[2],
            backgroundColor: 'transparent',
            color: colors.HIGHLIGHTS[1],
          },
        },
      },
    },
});

const theme = mode => (mode === 'dark' ? dark : light);

export default theme;