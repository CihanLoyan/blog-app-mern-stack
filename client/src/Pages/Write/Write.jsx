import './Write.css'
import { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import api from '../../axiosCreate'

export default function Write() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userName: user.userName,
            title,
            desc,
        };
        if (file) {
            const data =new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
              await api.post("/upload", data);
            } catch (err) {}
          }
        try {
            const res = await api.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
          } catch (err) {}
    };

  return (
    <div className='write'>
    {file && (
        <div className="writeImage">
            <img src={URL.createObjectURL(file)} alt="" />
        </div>
    )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon far fa-plus-square"></i>
                </label>
                <input type="file" id='fileInput' style={{"display": "none"}} autoFocus={true} onChange={(e) => setFile(e.target.files[0])} /> {/* Dosya seç butonunu gizledim. */}
                <input type="text" placeholder='Başlık' className='writeInput writeTitle' onChange={ e => setTitle(e.target.value)}/>
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' cols="30" rows="1" placeholder='İçeriği giriniz...' type="text" onChange={ (e) => setDesc(e.target.value)}></textarea>
            </div>
            <button className='publishButton' type='submit'>
                <span className='publishText'>Yayınla</span>
                <span className='publishIcon'>
                    <i class='fa fa-paper-plane'></i>
                </span>
            </button>
        </form>
    </div>
  )
}
