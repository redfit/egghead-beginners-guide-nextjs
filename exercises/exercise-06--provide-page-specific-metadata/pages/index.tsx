// ✍️ import Head from 'next/head'
import Head from 'next/head'

import { ChakraProvider, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <ChakraProvider>
      {/* ✍️ add title and description using the Head component */}
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta name="og:title" content="My Next.js course" key="title" />
      </Head>
      <Head>
        <meta name="og:title" content="My awesome course" key="title" />
      </Head>
      <Heading w="full" textAlign="center">
        This is our homepage content!
      </Heading>
    </ChakraProvider>
  )
}
export default Home
