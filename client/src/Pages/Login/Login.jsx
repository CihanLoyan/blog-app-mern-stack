import { useContext, useRef, useState } from 'react';
import{ Context } from '../../Context/Context'
import { Link } from 'react-router-dom';
import './Login.css';
import api from '../../axiosCreate'


export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFatching } = useContext(Context)

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({type: "LOGIN_START"});
    try {
      const res = await api.post("/auth/login", {
        userName: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE"});
      setError(true);
    }
  }
  return (
    <div className='login'>
        <h1 className='loginTitle'>Giriş Yap</h1>
        <form className="loginForm" onSubmit={handleSubmit} >
            <input type="text" className='loginInput' placeholder='Kullanıcı Adı' ref={userRef} />
            <input type="password" className='loginInput' placeholder='Şifre' ref={passwordRef} />
            <button type='submit' className='loginButton' disabled={isFatching} >Giriş Yap</button>
        </form>
        <div className='loginRegister'>
            <span>Üye değil misin?</span>
            <Link className='loginRegisterLink' to="/register">
              <button className='loginRegisterButton'>Hemen Üye Ol</button>
            </Link>
        </div>
        {error && ( /* Yukarıka hata yakalanırsa catch içindeki setError True olur ve bu durumda bu satır çalışır. */
        <span style={{ color: "red", marginTop: "10px" }}>
          Bir hata oluştu!
        </span>
      )}
    </div>
  )
}
