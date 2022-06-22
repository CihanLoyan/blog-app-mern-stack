import { Link } from 'react-router-dom'
import './Post.css'

export default function Post({post}) {

  const PF = "http://localhost:5000/images/";

  return (
    <div className='post'>
      {post.photo && (
        <img className='postImage' src={PF +  post.photo} alt="" />
      )}
        <div className="postInfo">
            <div className="postCategories">{
              post.categories.map(c => (
                <span className="postCategory">{c.name}</span>
              ))
            }
            </div>
            <div className="postTitle">
              <Link className='postLink' to={`/post/${post._id}`}>
                {post.title}
              </Link>
            </div>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className='postDescription'>{post.desc}</p>
        </div>
    </div>
  )
}
