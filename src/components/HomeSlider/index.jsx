import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomeSlider = () => {
    return (
        <>
            <div className="homeSlider select-none">
                <div className="container">
                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/1.jpg" alt="banner" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/2.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/3.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/4.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/5.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/1.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/2.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/3.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="rounded-[20px] overflow-hidden">
                        <div className="item">
                            <img src="/images/4.jpg" alt="" className="w-full" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeSlider