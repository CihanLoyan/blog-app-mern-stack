import './Settings.css'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import api from '../../axiosCreate'
import { data } from '../../data/data'

export default function Settings() {
  const [file, setFile] = useState(null)
  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  
  const { user, dispatch } = useContext(Context)
  const PF = 'http://localhost:5000/images/'

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "UPDATE_START"})
    const updatedUser = {
        userId: user._id,
        userName,
        email,
        password,
    };
    if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilePic = filename;
        try {
          await api.post("/upload", data);
        } catch (err) {}
      }
      try {
        const res = await api.put("/users/" + user._id, updatedUser);
        setSuccess(true)
        dispatch({type: "UPDATE_SUCCESS", payload: res.data })
      } catch (err) {
        dispatch({type: "UPDATE_FAILURE"})
      }
}

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsProfile">
            <div className="settingsProfilePicture">
              <label htmlFor="fileInput"> {/* label'a tıklandığında aşağıda id'si fileInput olan input'u çalıştırır. */}
                <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
              </label>
            </div>
            <input type="file" id='fileInput' style={{display: 'none'}} onChange={e => setFile(e.target.files[0])} /> {/* label'a bağladığım için buton görünümünü gizledim. */}
          </div>
          <input type="text" placeholder={user.userName} onChange={e => setUsername(e.target.value)} />
          <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder='***********' onChange={e => setPassword(e.target.value)} />
          <button className="settingsButton" type='submit'>Güncelle</button>
          {
            success && (
              <span style={{color: 'green', fontFamily: 'Varela Round', fontSize: '1rem'}}>Bilgileriniz güncellendi</span>
            )
          }
        </form>
      </div>
    </div>
  )
}
