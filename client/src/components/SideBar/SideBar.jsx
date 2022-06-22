import './SideBar.css'
import { data } from '../../data/data'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import api from '../../axiosCreate'

export default function Sidebar() {

  const [cats, setCats] = useState([]); /* Categories bir dizi olduğu için başlangıç değeri olarak dizi verdim. */

  useEffect(() => {
    const getCats = async () => {
      const res = await api.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])

  return (
    <div className='sidebar'>
      <div className="sideBarItem">
        <span className="aboutMe sideBarTitle">Hakkımda</span>
        <img 
          className='sideBarTitleImg'
          src={data.images[2]} 
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
