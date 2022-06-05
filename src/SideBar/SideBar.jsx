import './SideBar.css'
import { data } from '../data/data'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sideBarItem">
        <span className="aboutMe sideBarTitle">About Me</span>
        <img 
          className='sideBarTitleImg'
          src={ data.image[2]} 
          alt="" 
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Porro accusantium totam dicta ea ad itaque, 
          molestiae doloremque ullam provident debitis laudantium distinctio mollitia perspiciatis soluta tenetur. 
          Tempora incidunt dolorum aperiam.
        </p>
      </div>
      <div className="sideBarItem">
        <span className='sideBarTitle'>Categories</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Din</li>
          <li className="sideBarListItem">Tarih</li>
          <li className="sideBarListItem">Siyaset</li>
          <li className="sideBarListItem">Teknoloji</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Beni Takip Et</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-instagram-square"></i>
          <i className="sideBarIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  )
}
