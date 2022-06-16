import './SinglePost.css'
import { data } from '../../data/data'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={data.images[1]} className='singlePostImage' alt="" />
        <div className='singlePostInfo'>
          <div className="singlePostAuthDate">
            <span className='singlePostAuthor'>Cihan Loyan</span>
            <span className='singlePostDate'>2 gün önce</span>
          </div>
          <h1 className="singlePostTitle">Blog Yazısı Başlığı</h1>
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>           
            <i class="singlePostIcon fas fa-eraser"></i>
          </div>
        </div>
        <p className="singlePostContent">   
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi culpa sequi assumenda vel iusto eius fuga qui in beatae libero maiores placeat sint, quia ducimus asperiores quis, porro molestiae quas, repudiandae nihil. Accusantium sequi facilis officia, sint dolore reiciendis. Quam, non iure illum quia fugiat sit provident similique cum. Nulla corporis delectus ratione soluta asperiores quam temporibus itaque cum vel? Reiciendis dolorum quidem exercitationem ea accusamus ratione eaque iure consequatur officia a esse magni quo explicabo inventore, deleniti sunt necessitatibus nisi voluptatum suscipit id cumque aperiam sequi amet eveniet! Velit enim eaque suscipit facere odio aspernatur quod laudantium? Impedit nostrum molestiae in obcaecati illo, pariatur velit, nesciunt illum voluptates facere accusamus esse iure officia ad dolore exercitationem dignissimos nulla repellendus? Sequi similique cumque, ipsam qui labore quasi at sit. Numquam iste minima corrupti aut, aspernatur velit voluptate sit? Dicta assumenda libero cupiditate voluptatum ut eius odit, a nesciunt repellat vel fugit autem veritatis eligendi suscipit culpa quisquam omnis, animi sit veniam soluta nihil eaque? Corrupti omnis minima unde nisi nam neque at ullam porro in tempore! Autem voluptate tenetur incidunt rem quod ipsum quos amet laudantium commodi. Earum numquam sequi perspiciatis in, quisquam eaque id vel saepe rem esse corporis quia illum? Eos, fugit voluptas voluptatibus numquam nisi ipsam repudiandae labore inventore eius alias! Quia repellendus iure tempora voluptatum! Veritatis impedit quisquam nihil magni consectetur dignissimos aliquid sunt minus laborum repellat expedita alias sed ad esse doloremque laudantium voluptatibus rem earum eveniet, velit nostrum reprehenderit! Laudantium quibusdam reiciendis itaque vitae, quia saepe unde natus repellendus corrupti, iste magnam quos odio quo sunt commodi? Iusto tempora dicta aliquid sapiente, tenetur quas saepe deleniti quidem a rerum voluptas exercitationem dolorum. Error quasi, dolorum molestiae quaerat nulla atque. Odio, qui ex, praesentium cum ipsam temporibus vel laborum quae autem illo quasi sit.
        </p>
      </div>
    </div>
  )
}
