import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Navigation } from 'swiper/modules';
import BannerBoxV2 from '../BannerBoxV2';


const AdsBannerSliderV2 = ({items}) => {
    console.log(items);
  return (
    <Swiper
        loop={true}
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
          <BannerBoxV2 valid={true} info="left" mirror="" src="./images/BannerBoxV2/1.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBoxV2 valid={true} info="right" mirror="" src="./images/BannerBoxV2/2.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBoxV2 valid={false} info="left" mirror="transform -scale-x-100 group-hover:-scale-x-105" src="./images/BannerBoxV2/3.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBoxV2 valid={true} info="right" mirror="" src="./images/BannerBoxV2/4.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBoxV2 valid={false} info="left" mirror="transform -scale-x-100 group-hover:-scale-x-105" src="./images/BannerBoxV2/5.png" link={'/'} />
        </SwiperSlide>
        
        <SwiperSlide className="rounded-lg">
          <BannerBoxV2 valid={true} info="right" mirror="" src="./images/BannerBoxV2/2.png" link={'/'} />
        </SwiperSlide>
        
    </Swiper>
  )
}

export default AdsBannerSliderV2