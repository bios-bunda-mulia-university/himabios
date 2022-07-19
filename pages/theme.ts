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
    }
})

export default theme