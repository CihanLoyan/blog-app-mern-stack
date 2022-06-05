import './Header.css'
import  { data } from '../data/data'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            {/*<span className='headerTitleSmall'>Küçük Başlık</span>*/}
            <span className='headerTitleBig'>Büyük Başlık</span>
        </div>
        <img className='headerImage' src={data.images[1]} alt="" />
    </div>
  )
}
