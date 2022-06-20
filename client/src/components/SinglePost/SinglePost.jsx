import './SinglePost.css'
import { useLocation } from 'react-router'
import { useEffect } from 'react';
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom';
import api from '../../axiosCreate'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; /* id'yi aldım. */ 

  const [post, setPost] = useState({})
  const { user } = useContext(Context)

  useEffect(() => {
    const getPost = async () => {
      const res = await api.get("/posts/" + path) /* Yukarıka yakaladığım id'yi belirttiğim url içinde api'ye get isteği atıp res değişkeni içine attım.  */
      setPost(res.data) /* res değişkeni içindeki data'yı setPost'a yolladım. setPost da post'u günceller. Artık aşağıda post ile istediğim id'nin data'larını çağırabilirim. */
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

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && 
          <img src={post.photo} className='singlePostImage' alt="" />
        }
        <div className='singlePostInfo'>
          <div className="singlePostAuthDate">
            <span className='singlePostAuthor'>Yazar: 
            <Link to={`/?user=${post.userName}`} className="singlePostAuthorLink">
              <b>{` ${post.userName}`}</b>
            </Link>
            </span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
          </div>
          <h1 className="singlePostTitle">{post.title}</h1>
          {post.userName === user?.userName && (
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>           
            <i className="singlePostIcon fas fa-eraser" onClick={handleDelete}></i>
          </div>
          )}
        </div>
        <p className="singlePostContent">   
          {post.desc}
        </p>
      </div>
    </div>
  )
}
