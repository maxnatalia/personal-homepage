const breakpoints = {
    mobile: 767,
    tablet: 1180,
  };

const colors = {
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    slateGray: "#6E7E91",
    mineShaft: "#252525",
    white: "#FFFFFF",
    scienceBlue: "#0366D6",
    iron: "#D1D5DA",
    dogerBlue: "#2188FF",
    blueHover: "rgba(209, 213, 218, 0.3)",
    semiDark: "rgba(54, 54, 54, 0.72)",
    gray: "#4C534B",
    shadowSkills: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);"
    
};

export const theme = {
    elementColor: {
        background: colors.whiteLilac,
        text: colors.slateGray,
        textTitles: colors.mineShaft,
        buttonBackground: colors.scienceBlue,
        buttonText: colors.white,
        boxSwitcher: colors.iron,
        buttonHover: colors.blueHover,
        iconWrapper: colors.slateGray,
        iconFill: colors.white,
        borderBottom: colors.iron,
        backgroundSkills: colors.white,
        boxShadowSkills: colors.shadowSkills,
    },

    colors,
    breakpoints,
};

export const darkTheme = {
    elementColor: {
        background: colors.mineShaft,
        text: colors.white,
        textTitles: colors.white,
        buttonBackground: colors.dogerBlue,
        buttonText: colors.white,
        boxSwitcher: colors.gray,
        buttonHover: colors.blueHover,
        iconWrapper: colors.white,
        iconFill: colors.mineShaft,
        borderBottom: colors.iron,
        backgroundSkills: colors.semiDark,
        boxShadowSkills: colors.shadowSkills,
    },

    colors,
    breakpoints,
};
