import './TopBar.css';

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-youtube"></i>
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className="topListItem">AnaSayfa</li>
                <li className="topListItem">Hakkımızda</li>
                <li className="topListItem">İletişim</li>
                <li className="topListItem">Yaz</li>
                <li className="topListItem">Çıkış Yap</li>
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
