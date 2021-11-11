import '../styles/globals.css'
import Head from 'next/head'
import {ThemeProvider} from 'styled-components'
import Theme from '../styles/theme'
import GlobalStyle from '../styles/Global'

function MyApp({ Component, pageProps }) {
	return (
	<>
		<Head>
			<title>Tsotetsi Mosala</title>
		</Head>
		<ThemeProvider theme={Theme}> 
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	</>
)
}

export default MyApp
