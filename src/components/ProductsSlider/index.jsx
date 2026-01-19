import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';

const ProductsSlider = ({ items }) => {
  return (
    <div className='productsSlider'>
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
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className='rounded-sm !bg-[transparent]'>
          <ProductItem />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default ProductsSlider