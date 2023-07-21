import { useRouter } from 'next/router'

const Genre = () => {
  const router = useRouter()
  const { genre } = router.query

  return <h1>Genre: {genre}</h1>
}

export default Genre
