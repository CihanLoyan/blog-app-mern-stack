import './Home.css'
import Posts from '../../components/Posts/Posts'
import SideBar from '../../components/SideBar/SideBar'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  )
}
