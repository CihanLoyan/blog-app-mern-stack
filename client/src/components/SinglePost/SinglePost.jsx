import './SinglePost.css'
import { useLocation } from 'react-router'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom';
import api from '../../axiosCreate'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; /* id'yi aldım. */ 

  const { user } = useContext(Context)
  const [post, setPost] = useState({})
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState(false)

  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await api.get("/posts/" + path) /* Yukarıka yakaladığım id'yi belirttiğim url içinde api'ye get isteği atıp res değişkeni içine attım.  */
      setPost(res.data) /* res değişkeni içindeki data'yı setPost'a yolladım. setPost da post'u günceller. Artık aşağıda post ile istediğim id'nin data'larını çağırabilirim. */
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await api.delete(`/posts/${post._id}`, {
        data: { userName: user.userName },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/posts/${post._id}`, {
        userName: user.userName, 
        title, 
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && 
          <img src={PF + post.photo} className='singlePostImage' alt="" />
        }
        <div className='singlePostInfo'> 
          <div className="singlePostAuthDate" id='auth-date'>
            <span className='singlePostAuthor'>Yazar: 
            <Link to={`/?user=${post.userName}`} className="singlePostAuthorLink">
              <b>{` ${post.userName}`}</b>
            </Link>
            </span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          {
            updateMode ? (
              <input type="text" value={title} className="singlePostTitleUpdate" onChange={(e) => setTitle(e.target.value)} />
              ) : (
              <>
                <h1 className="singlePostTitle">{title}</h1>
                <div className="singlePostEdit">
                {post.userName === user?.userName && (
                  <>
                    <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>           
                    <i className="singlePostIcon fas fa-eraser" onClick={handleDelete}></i>
                  </>
                )}
                </div>
              </>
            )
          }
        </div>
        {
          updateMode ? (
              <textarea value={desc} className="singlePostContentUpdate" onChange={(e) => setDesc(e.target.value)} />
          ) : (
              <p className="singlePostContent">{desc}</p>
          )
        }

        {
          updateMode && (
            <button className='singlePostUpdateButton' type='submit' onClick={handleUpdate}>
              <span className='singlePostUpdateButtonText'>Yayınla</span>
              <span className='singlePostUpdateButtonIcon'>
                  <i class='fa fa-paper-plane'></i>
              </span>
            </button>
          )
        }
      </div>
    </div>
  )
}
