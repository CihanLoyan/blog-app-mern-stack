import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../axiosCreate";
import "./Register.css";

export default function Register() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await api.post("/auth/register", {
        userName,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <h1 className="registerTitle">Üye Ol</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="registerInput"
          placeholder="Kullanıcı Adı"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="registerInput"
          placeholder="Email adresinizi giriniz"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="registerInput"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Kaydol
        </button>
      </form>
      <div className="registerLogin">
        <span>Zaten bir hesabım var!</span>
        <Link className="registerLoginLink" to="/login">
          <button className="registerLoginButton">Giriş Yap</button>
        </Link>
      </div>
      {error && ( /* Yukarıka hata yakalanırsa catch içindeki setError True olur ve bu durumda bu satır çalışır. */
        <span style={{ color: "red", marginTop: "10px" }}>
          Bir hata oluştu!
        </span>
      )}
    </div>
  );
}