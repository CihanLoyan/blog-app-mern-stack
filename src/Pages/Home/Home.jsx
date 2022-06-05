import Header from '../../Header/Header'
import './Home.css'
import Posts from '../../Posts/Posts'
import SideBar from '../../SideBar/SideBar'

export default function Home() {
  return (
    <>  {/* fragment */}
      <Header />
      <div className='home'>
        <Posts />
        <SideBar />
      </div>
    </>
  )
}
