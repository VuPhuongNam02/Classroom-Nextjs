import {
    extendTheme,
    type ThemeConfig,
    withDefaultColorScheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export const customTheme = ({
    globalStyles,
    colorScheme = "white",
}: {
    globalStyles: {};
    colorScheme: "white" | "black";
}) => {
    return extendTheme(
        { config },
        globalStyles,
        withDefaultColorScheme({ colorScheme }),
    );
};
