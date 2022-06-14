import './Home.css'
import Posts from '../../components/Posts/Posts'
import SideBar from '../../components/SideBar/SideBar'

export default function Home() {
  return (
    <div className='home'>
      <Posts />
      <SideBar />
    </div>
  )
}
