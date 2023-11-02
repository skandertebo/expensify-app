import {ThemeColors} from './types';
import colors from '@styles/colors';
import SCREENS from '@src/SCREENS';

const lightTheme = {
    // Figma keys
    appBG: colors.lightAppBackground,
    splashBG: colors.green400,
    highlightBG: colors.lightHighlightBackground,
    border: colors.lightBorders,
    borderLighter: colors.lightDefaultButtonPressed,
    borderFocus: colors.green400,
    icon: colors.lightIcons,
    iconMenu: colors.green400,
    iconHovered: colors.lightPrimaryText,
    iconSuccessFill: colors.green400,
    iconReversed: colors.lightAppBackground,
    iconColorfulBackground: `${colors.ivory}cc`,
    textSupporting: colors.lightSupportingText,
    text: colors.lightPrimaryText,
    textColorfulBackground: colors.ivory,
    link: colors.blue600,
    linkHover: colors.blue500,
    buttonDefaultBG: colors.lightDefaultButton,
    buttonHoveredBG: colors.lightDefaultButtonHover,
    buttonPressedBG: colors.lightDefaultButtonPressed,
    danger: colors.red,
    dangerHover: colors.redHover,
    dangerPressed: colors.redHover,
    warning: colors.yellow400,
    success: colors.green400,
    successHover: colors.greenHover,
    successPressed: colors.greenPressed,
    transparent: colors.transparent,
    signInPage: colors.green800,
    dangerSection: colors.tangerine800,

    // Additional keys
    overlay: colors.lightBorders,
    inverse: colors.lightPrimaryText,
    shadow: colors.black,
    componentBG: colors.lightAppBackground,
    hoverComponentBG: colors.lightHighlightBackground,
    activeComponentBG: colors.lightBorders,
    signInSidebar: colors.green800,
    sidebar: colors.lightAppBackground,
    sidebarHover: colors.lightBorders,
    heading: colors.lightPrimaryText,
    textLight: colors.white,
    textDark: colors.lightPrimaryText,
    textReversed: colors.darkPrimaryText,
    textBackground: colors.lightHighlightBackground,
    textMutedReversed: colors.lightIcons,
    textError: colors.red,
    offline: colors.lightIcons,
    modalBackground: colors.lightAppBackground,
    cardBG: colors.lightHighlightBackground,
    cardBorder: colors.lightHighlightBackground,
    spinner: colors.lightSupportingText,
    unreadIndicator: colors.green400,
    placeholderText: colors.lightIcons,
    heroCard: colors.blue400,
    uploadPreviewActivityIndicator: colors.lightHighlightBackground,
    dropUIBG: 'rgba(252, 251, 249, 0.92)',
    receiptDropUIBG: 'rgba(3, 212, 124, 0.84)',
    checkBox: colors.green400,
    pickerOptionsTextColor: colors.lightPrimaryText,
    imageCropBackgroundColor: colors.lightIcons,
    fallbackIconColor: colors.green700,
    reactionActiveBackground: colors.green100,
    reactionActiveText: colors.green600,
    badgeAdHoc: colors.pink600,
    badgeAdHocHover: colors.pink700,
    mentionText: colors.blue600,
    mentionBG: colors.blue100,
    ourMentionText: colors.green600,
    ourMentionBG: colors.green100,
    tooltipSupportingText: colors.darkSupportingText,
    tooltipPrimaryText: colors.darkPrimaryText,
    skeletonLHNIn: colors.lightBorders,
    skeletonLHNOut: colors.lightDefaultButtonPressed,
    QRLogo: colors.green400,
    starDefaultBG: 'rgb(254, 228, 94)',
    loungeAccessOverlay: colors.blue800,
    mapAttributionText: colors.black,
    white: colors.white,

    PAGE_BACKGROUND_COLORS: {
        [SCREENS.HOME]: colors.lightHighlightBackground,
        [SCREENS.SAVE_THE_WORLD.ROOT]: colors.tangerine800,
        [SCREENS.SETTINGS.PREFERENCES]: colors.blue500,
        [SCREENS.SETTINGS.WORKSPACES]: colors.pink800,
        [SCREENS.SETTINGS.WALLET]: colors.darkAppBackground,
        [SCREENS.SETTINGS.SECURITY]: colors.ice500,
        [SCREENS.SETTINGS.STATUS]: colors.green700,
        [SCREENS.SETTINGS.ROOT]: colors.lightHighlightBackground,
    },
} satisfies ThemeColors;

export default lightTheme;
