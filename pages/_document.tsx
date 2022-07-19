import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { FC } from 'react'
import theme from './theme'

const Document: FC = () => {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document