import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { pid, comment } = router.query

  return (
    <h1>
      {pid}, {comment}
    </h1>
  )
}

export default Comment
