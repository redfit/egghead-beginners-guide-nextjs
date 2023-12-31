import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  )
}

export default App
