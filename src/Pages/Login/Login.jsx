import './Login.css';

export default function Login() {
  return (
    <div className='login'>
        <h1 className='loginTitle'>Giriş Yap</h1>
        <form className="loginForm">
            <input type="email" className='loginInput' placeholder='Email adresinizi giriniz...' />
            <input type="password" className='loginInput' placeholder='Şifrenizi giriniz...' />
            <button type='submit' className='loginButton'>Giriş Yap</button>
        </form>
        <div className='loginRegister'>
            <span>Üye değil misin?</span>
            <button type='submit' className='loginRegisterButton'>Kaydol</button>
        </div>
    </div>
  )
}
