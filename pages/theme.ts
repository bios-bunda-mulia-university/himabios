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
        green: {
            ligtMain: '#1F8843',
            lightSurface: '#D2E7D9',
            lightBorder: '#B4D7C0',
            lightHover: '#1A7138',
            lightPressed: '#0F4421',
            lightFocus: '#D9FBE5', // opacity: 0.2
            darkMain: '#43E97B',
            darkSurface: '#D9FBE5',
            darkBorder: '#C0F8D3',
            darkHover: '#38C266',
            darkPressed: '#21743D',
            darkFocus: '#43E97B', // opacity: 0.2
        }
    },
    semanticTokens: {
        colors: {
            // Change the colors of chakra dark/light mode
            "chakra-body-bg": {
                // _light: yourColor,
                _dark: '#121212',
            }
        }
    }
})

export default theme