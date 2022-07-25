import {
    extendTheme,
    type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export const customTheme = ({
    globalStyles,
}: {
    globalStyles: {};
}) => {
    return extendTheme(
        { config },
        globalStyles,
    );
};
