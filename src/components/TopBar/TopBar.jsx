import { Link } from 'react-router-dom';
import './TopBar.css';

export default function TopBar() {
    const user = false;
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
                <li className="topListItem">
                    <Link to="/">AnaSayfa</Link>
                </li>
                <li className="topListItem">
                    <Link to="/">Hakkımızda</Link>
                </li>
                <li className="topListItem">
                    <Link to="/">İletişim</Link>
                </li>
                <li className="topListItem">
                    <Link to="/write">Yaz</Link>
                </li>
                <li className="topListItem">
                    {user && "Çıkış Yap"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <ul className='topRightList'>
                        <li className='topRightListItem'>
                            <img className='topImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        </li>
                    </ul>
                ) : (
                    <>
                        <Link className='link' to="/login">Giriş Yap</Link>
                        <Link className='link' to="/register">Üye Ol</Link>
                    </>
                )
            }
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
