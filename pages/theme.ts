import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config: {
        ...config,
    },
    fonts: {
        heading: `'Rubik', sans-serif`,
    },
    colors: {
        transparent: 'transparent',
        darkMode: '#151019',
        lightMode: '#EEEEEE'
    },
    semanticTokens: {
        colors: {
            // Change the colors of chakra dark/light mode
            "chakra-body-bg": {
                _light: "lightMode",
                _dark: "darkMode",
            }
        }
    }
})

export default theme