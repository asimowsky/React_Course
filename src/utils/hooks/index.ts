// theme.ts
export const lightTheme = {
  token: {
    colorBackground: "#DFDEE9",
    colorPrimary: "#0C111B",
    colorSecondary: "#030406",
    colorAccent: "#E6E6E6",
    colorActive: "#e6effa",
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    colorDimmed: "#4D4D4D",
    colorButton: "#B34BF0",
    colorWhite: "#fff",
  },
  components: {
    Menu: {
      darkItemSelectedBg: "#da9e29",
    },
    Button: {
      defaultHoverColor: "rgb(183, 215, 255)",
    },
  },
};

export const darkTheme = {
  token: {
    colorBackground: "#DFDEE9",
    colorPrimary: "#B34BF0",
    colorSecondary: "#030406",
    colorAccent: "#E6E6E6",
    colorActive: "#e6effa",
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    colorDimmed: "#4D4D4D",
    colorButton: "#B34BF0",
    colorWhite: "#fff",
  },
  components: {
    Menu: {
      darkItemSelectedBg: "#da9e29",
      itemHeight: 40,
      darkPopupBg: "#fff",
    },
    Button: {
      defaultHoverColor: "rgb(183, 215, 255)",
    },
  },
};

export type Theme = typeof lightTheme | typeof darkTheme;
