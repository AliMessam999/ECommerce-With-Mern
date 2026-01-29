import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import './style.css';
import { Button } from '@mui/material';

const HomeSlider2 = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='w-full !rounded-full'>
          <img src="./images/slider2/1.png" className='!rounded-md' />
          <div className="info absolute w-[50%] h-[100%] p-8 flex right-[30px] items-center flex-col justify-center text-left">
            <h4 className='text-[20px] font-[500] text-left w-[100%]'>Big Savings Days Sale</h4>
            <h2 className='text-[35px] font-[600] text-left mt-5 w-[100%]'>Women Solid Round Green Shirt</h2>
            <h4 className='text-[20px] font-[500] text-left w-[100%] mt-5'>Starting At Only <span className='text-[#FF5252] text-[28px] font-[600]'>$59.00</span></h4>
            <div className="w-[100%]">
              <Button className='!bg-[#FF5252] !text-white !px-5 !py-2 !rounded-md !mt-5 !cursor-pointer'>Shop Now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-full !rounded-full'>
          <img src="./images/slider2/2.png" className=' !rounded-md' />
          <div className="info absolute top-0 right-[30px] w-[50%] h-[100%] p-8 flex items-center flex-col justify-center text-left">
            <h4 className='text-[20px] font-[500] text-left w-[100%]'>Big Savings Days Sale</h4>
            <h2 className='text-[35px] font-[600] text-left mt-5 w-[100%]'>Buy Modern Chair in Black Color</h2>
            <h4 className='text-[20px] font-[500] text-left w-[100%] mt-5'>Starting At Only <span className='text-[#FF5252] text-[28px] font-[600]'>$99.00</span></h4>
            <div className="w-[100%]">
              <Button className='!bg-[#FF5252] !text-white !px-5 !py-2 !rounded-md !mt-5 !cursor-pointer'>Shop Now</Button>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSlider2