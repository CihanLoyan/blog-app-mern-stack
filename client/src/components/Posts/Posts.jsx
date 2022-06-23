import './Posts.css'
import Post from '../Post/Post'

export default function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map(post => (
        <Post key={post._id} post={post}/>
      ))}
    </div>
  )
}
