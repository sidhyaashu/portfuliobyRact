import {Swiper,SwiperSlide} from 'swiper/react'
import './Slider.scss'
import { Pagination,Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const Slider = () => {
  return (
    <div className="slider_container">
      <Swiper
      modules={[Pagination,Navigation]}
      className="mySwiper"
      navigation={true}
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      >
        <div className="swiper">
        <SwiperSlide><div className="box">1</div></SwiperSlide>
        <SwiperSlide><div className="box">2</div></SwiperSlide>
        <SwiperSlide><div className="box">3</div></SwiperSlide>
        <SwiperSlide><div className="box">4</div></SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider
