import './Register.css';

export default function Register() {
  return (
    <div className='register'>
        <h1 className='registerTitle'>Üye Ol</h1>
        <form className="registerForm">
            <input type="email" className='registerInput' placeholder='Email adresinizi giriniz...' />
            <input type="password" className='registerInput' placeholder='Şifrenizi giriniz...' />
            <button type='submit' className='registerButton'>Kaydol</button>
        </form>
        <div className='registerLogin'>
            <span>Zaten bir hesabım var!</span>
            <button type='submit' className='registerLoginButton'>Giriş Yap</button>
        </div>
    </div>
  )
}
