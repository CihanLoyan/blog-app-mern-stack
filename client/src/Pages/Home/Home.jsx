import './Home.css'
import Posts from '../../components/Posts/Posts'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import { useState, useEffect } from 'react'
import api from '../../axiosCreate';
import { useLocation } from 'react-router'

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/posts" + search)
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <SideBar />
      </div>
    </>
  )
}
