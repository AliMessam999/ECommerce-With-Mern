import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';


const AdsBannerSlider = ({items}) => {
    console.log(items);
  return (
    <Swiper
        pagination={{
        type: 'progressbar',
        }}
        spaceBetween={10}
        slidesPerView={items}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
    >
        <SwiperSlide className="rounded-lg">
          <BannerBox image="./images/Banner1.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBox image="./images/Banner2.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBox image="./images/Banner3.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBox image="./images/Banner4.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBox image="./images/Banner5.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBox image="./images/Banner6.png" link={'/'} />
        </SwiperSlide>
        
    </Swiper>
  )
}

export default AdsBannerSlider