export const globalStyles = {
  colors: {
    transparent: "transparent",
    black: "#000000",
    white: "#ffffff",
    gray: {
      FA: "#e0e0e0",
      F5: "#5f6368",
      C8: "#0000008C",
      C3: "#3C4043",
    },
    grayBg: "#171923",
    grayCard: "#2D3748",
    primary: "#007b83",
    blue: {
      ff: "#2962ff",
      e8: "#e8f0fe",
    },
    green: {
      b3: "#007b83",
    },
    blackCustom: {
      "26": "#262626",
    },
    hover: {
      dark: "",
      light: "",
    },
  },

  heading: {
    fontFamily: `'Roboto', sans-serif`,
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      html: {
        padding: 0,
        margin: 0,
        height: "100%",
      },
      body: {
        fontFamily: `'Roboto', sans-serif`,
      },
      button: {
        fontFamily: `'Roboto', sans-serif`,
      },
    }),
  },
};
