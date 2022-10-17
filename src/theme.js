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
};

export const theme = {
    elementColor: {
        background: colors.whiteLilac,
        text: colors.slateGray,
        textTitles: colors.mineShaft,
        buttonBackground: colors.scienceBlue,
        buttonText: colors.white,
    },

    colors,
    breakpoints,
};

export const darkTheme = {
    elementColor: {

    },

    colors,
    breakpoints,
};
