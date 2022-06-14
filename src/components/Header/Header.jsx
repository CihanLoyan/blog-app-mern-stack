import './Header.css';
import { data } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";


export default function Header() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[
          Autoplay, 
          Pagination, 
        ]}
        className="mySwiper"
      >
        {data.images.map( img => (
          <SwiperSlide>
            <img src={ img } alt={img} />
          </SwiperSlide>
          ))}

      </Swiper>
    </>
  )
}
