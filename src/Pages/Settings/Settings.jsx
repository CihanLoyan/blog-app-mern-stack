import Sidebar from '../../components/SideBar/SideBar'
import './Settings.css'
import { data } from '../../data/data'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Hesabını Güncelle</span>
          <span className="settingsDeleteTitle">Hesabını Sil</span>
        </div>
        <form action="" className="settingsForm">
          <div className="settingsProfile">
            <div className="settingsProfilePicture">
              <img src={data.images[2]} alt="" />
              <label htmlFor="fileInput"> {/* label'a tıklandığında aşağıda id'si fileInput olan input'u çalıştırır. */}
                <i className="settingsProfilePictureIcon fa-solid fa-user"></i>
              </label>
            </div>
            <input type="file" id='fileInput' style={{display: 'none'}}/> {/* label'a bağladığım için buton görünümünü gizledim. */}
          </div>
          <input type="text" placeholder='Kullanıcı Adı' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='***********' />
          <button className="settingsButton">Güncelle</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
