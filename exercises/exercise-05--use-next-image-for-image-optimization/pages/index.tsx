// ✍️ import the Image component from 'next/image'
import Image from 'next/image'

// ✍️ import "lazar.png" statically
import lazar from '../lazar.png'

const ICON_URL =
  'https://ca.slack-edge.com/T3AD86FUL-U05FLFQLH6D-70815a0f5c02-512'

const Home = () => {
  return (
    <>
      <Image src={lazar} alt="Lazar" />
      <Image src={ICON_URL} alt="Lazar" width={550} height={550} />
    </>
  )
}

export default Home
