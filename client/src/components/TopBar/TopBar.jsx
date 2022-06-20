import { Link } from 'react-router-dom';
import './TopBar.css';
import { useContext } from "react";
import { Context } from "../../Context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    };

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
                    <li className="logOut topListItem" onClick={handleLogout}>
                        <Link to="/">{user && "Çıkış"}</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <ul className='topRightList'>
                            <li className='topRightListItem'>   
                                <img className='topImg' src={user.profilePicture} alt="" />
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
