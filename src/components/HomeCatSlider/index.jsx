import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './style.css';

import { Pagination, Navigation } from 'swiper/modules';



const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider'>
      <div className="container overflow-hidden">
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          spaceBetween={10}
          slidesPerView={7}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i1.png" className='!w-[60px] !h-auto  transition-all transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i2.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i3.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i4.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i5.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i6.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i7.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i8.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i1.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='rounded-sm'>
            <Link to="/" className='w-full'>
              <div className="item py-5 px-5 bg-white w-full rounded-sm text-center flex flex-col items-center justify-center">
                <img src="./images/i2.png" className='!w-[60px] !h-auto  transition-all' alt="" />
                <h3 className='text-[16px] font-medium mt-3'>Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>



        </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider