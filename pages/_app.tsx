import "../styles/globals.css"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Layout from "../components/layout"
import { Provider } from "jotai"
config.autoAddCss = false

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function commonLayout(page: any) {
	return <Layout>{page}</Layout>
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || commonLayout

	return getLayout(
		<Provider>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
