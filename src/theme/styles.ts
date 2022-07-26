import { mode } from '@chakra-ui/theme-tools'

export const globalStyles = {
    colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        gray: {
            FA: "#e0e0e0",
            F5: "#5f6368"
        },
        primary: "#007b83",
        blue: {
            ff: "#2962ff",
            e8: "#e8f0fe"
        },
        green: {
            b3: "#007b83"
        },
        hover: {
            dark: "",
            light: ""
        }
    },
    global: (props: any) => ({
        body: {
            bg: mode("white", "gray.800")(props),
            fontFamily: `'Roboto', sans-serif`,
            color: "rgba(0,0,0,.87)",
        },
        button: {
            fontFamily: `'Roboto', sans-serif`,
        },
    }),
    heading: {
        fontFamily: `'Roboto', sans-serif`,
    },
    fonts: {
        heading: `'Roboto', sans-serif`,
    },
}