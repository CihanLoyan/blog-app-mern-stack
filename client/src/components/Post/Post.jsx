import { Link } from 'react-router-dom'
import './Post.css'
import { data } from '../../data/data'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImage' src={data.images[1]} alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Kategori</span>
            </div>
            <div className="postTitle">
              <Link className='postLink' to="/post/:id">Blog Başlığı</Link>
            </div>
            <span className="postDate">1 saat önce</span>
            <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit cumque sint tempore tenetur soluta quia eligendi cum unde earum omnis non vitae qui dolorem placeat veniam porro deleniti quam ducimus, quas dolor facilis repellat. Mollitia quod illum eaque facere labore aliquam ipsum aspernatur ab officia, officiis nostrum unde libero. Aliquam alias eaque odit distinctio officiis nesciunt recusandae molestias enim, quis totam pariatur quam aut libero ipsam incidunt, assumenda veniam fugit sed. Explicabo, magni vel. Optio similique expedita neque modi autem quaerat excepturi laudantium dicta impedit? Cum culpa illo tempore animi, eos pariatur alias cupiditate quis ad, explicabo perferendis architecto!</p>
        </div>
    </div>
  )
}
