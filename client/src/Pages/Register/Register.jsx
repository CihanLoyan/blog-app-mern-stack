import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <div className='register'>
        <h1 className='registerTitle'>Üye Ol</h1>
        <form className="registerForm">
            <input type="email" className='registerInput' placeholder='Email adresinizi giriniz' />
            <input type="text" className='registerInput' placeholder='Kullanıcı Adı' />
            <input type="password" className='registerInput' placeholder='Şifre' />
            <button type='submit' className='registerButton'>Kaydol</button>
        </form>
        <div className='registerLogin'>
            <span>Zaten bir hesabım var!</span>
            <Link className='registerLoginLink' to="/login">
              <button type='submit' className='registerLoginButton'>Giriş Yap</button>
            </Link>
        </div>
    </div>
  )
}
