const breakpoints = {
    mobile: 767,
    tablet: 1180,
};

const colors = {
    whiteLilac: "#FBFBFE",
    mineShaft: "#363636",
    white: "#FFFFFF",
    semiBlack: "rgba(54, 54, 54, 0.72)",
    scienceBlue: "#0366D6",
    dogerBlue: "#2188FF",
    slateGray: "#6E7E91",
    black: "#252525",
    grayDark: "rgba(209, 213, 218, 0.1)",
    grayLight: "rgba(209, 213, 218, 0.3)",
    mercury: "#E5E5E5",
    boulder: "#757575",
    blueLight: "rgba(3, 102, 214, 0.2)",
};

const shadows = {
    selected: "inset 0px 2px 0px rgba(20, 70, 32, 0.2)",
    focus: "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;",
    tile: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);",
}

export const theme = {

    background: {
        body: colors.whiteLilac,
        tiles: colors.white,
        button: colors.scienceBlue,
        boxSwitcher: colors.mercury,
        iconWrapper: colors.slateGray,
        iconSwitcher: colors.white,
    },

    text: colors.slateGray,
    textButton: colors.white,
    titles: colors.black,
    titlesPortfolio: colors.scienceBlue,
    links: colors.scienceBlue,
    linkFooter: colors.black,
    iconPortfolio: colors.scienceBlue,
    icons: colors.black,
    borderTiles: colors.grayLight,
    borderHoverTiles: colors.blueLight,
    borderLinks: colors.scienceBlue,
    borderButton: colors.grayLight,
    hoverButton: shadows.focus,
    activeButton: shadows.selected,
    hover: colors.scienceBlue,
    hoverTile: shadows.tile,

    colors,
    breakpoints,
    shadows,
}

export const darkTheme = {
    background: {
        body: colors.black,
        tiles: colors.semiBlack,
        button: colors.dogerBlue,
        boxSwitcher: colors.boulder,
        iconWrapper: colors.white,
        iconSwitcher: colors.black,
    },

    text: colors.white,
    textButton: colors.white,
    titles: colors.white,
    titlesPortfolio: colors.dogerBlue,
    links: colors.dogerBlue,
    linkFooter: colors.white,
    iconPortfolio: colors.dogerBlue,
    icons: colors.white,
    borderTiles: colors.grayDark,
    borderHoverTiles: colors.blueLight,
    borderLinks: colors.dogerBlue,
    borderButton: colors.grayDark,
    hoverButton: shadows.focus,
    activeButton: shadows.selected,
    hover: colors.dogerBlue,
    hoverTile: shadows.tile,

    colors,
    breakpoints,
    shadows,
};
