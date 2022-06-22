import { Link } from 'react-router-dom';
import './TopBar.css';
import { useContext } from "react";
import { Context } from "../../Context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);

    const PF = 'http://localhost:5000/images/'

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
                        <Link to="/write">Yaz</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <>
                            <Link to="/settings">
                                <ul className='topRightList'>
                                    <li className='topRightListItem'>   
                                        <img className='topImg' src={PF + user.profilePic} alt="" />
                                    </li>
                                </ul>
                            </Link>
                            <li className="logOut topListItem" onClick={handleLogout}>
                                <Link to="/">{user && "Çıkış"}</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <Link className='link' to="/login">Giriş Yap</Link>
                            <Link className='link' to="/register">Üye Ol</Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}
