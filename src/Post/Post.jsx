import './Post.css'
import { data } from '../data/data'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImage' src={data.images[1]} alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCategory">Kategori</span>
            </div>
            <div className="postTitle">
                Blog Başlığı
            </div>
            <hr />
            <span className="postDate">1 saat önce</span>
            <p className='postDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit fugit exercitationem illo obcaecati harum nihil sequi enim pariatur libero voluptatibus aperiam in quod voluptatem doloremque dolore vero iure cum, omnis officiis inventore. Omnis aut ut voluptatibus, soluta unde eius at. Quibusdam, odit deserunt unde sint quia mollitia possimus provident quam porro neque error voluptate recusandae laboriosam doloribus pariatur itaque natus cum dolore iure reprehenderit officiis dolores illo. Quam odit suscipit ipsa quis totam eum perferendis dolorum unde doloribus, obcaecati earum hic assumenda a error, magnam est. Deserunt, quam dolor aperiam, dolorum rem nam similique impedit rerum adipisci consequuntur officia repellat.</p>
        </div>
    </div>
  )
}
