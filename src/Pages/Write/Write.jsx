import './Write.css'
import { data } from '../../data/data'

export default function Write() {
  return (
    <div className='write'>
        <div className="writeImage">
            <img src={data.images[2]} alt="" />
        </div>
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon far fa-plus-square"></i>
                </label>
                <input type="file" id='fileInput' style={{"display": "none"}}/> {/* Dosya seç butonunu gizledim. */}
                <input type="text" placeholder='Başlık' className='writeInput writeTitle'/>
            </div>
            <div className="writeFormGroup">
                <textarea className='writeInput writeText' cols="30" rows="1" placeholder='İçeriği giriniz...' type="text"></textarea>
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
