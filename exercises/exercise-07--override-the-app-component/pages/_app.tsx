import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  pageProps.title = 'My awesome course'
  return <Component {...pageProps} />
}

export default App
