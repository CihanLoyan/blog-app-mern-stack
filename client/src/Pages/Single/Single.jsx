import Sidebar from '../../components/SideBar/SideBar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './Single.css'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}
