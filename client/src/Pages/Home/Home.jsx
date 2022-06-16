import './Home.css'
import Posts from '../../components/Posts/Posts'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../axiosCreate';

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/posts")
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts/>
        <SideBar />
      </div>
    </>
  )
}
