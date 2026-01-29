import React from 'react'
import HomeSlider from '../../components/HomeSlider'
import HomeCatSlider from '../../components/HomeCatSlider'
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from '../../components/AdsBannerSlider'
import ProductsSlider from '../../components/ProductsSlider'
import BlogItem from '../../components/BlogItem'
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer';
import HomeSlider2 from '../../components/HomeSliderV2';
import BannerBoxV2 from '../../components/BannerBoxV2';
import AdsBannerSliderV2 from '../../components/AdsBannerSliderV2';


const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <HomeSlider /> */}
      {/* <HomeSlider2 /> */}
      <section>
        <div className="py-6">
        {/* <div className="container flex items-center"> */}
        <div className="container flex gap-5">
          <div className="part1 w-[70%]">
            <HomeSlider2 />
          </div>
          <div className="part2 w-[30%] flex flex-col items-center justify-between gap-5">
            <BannerBoxV2 info="left" src="./images/BannerBoxV2/1.png" />
            <BannerBoxV2 info="right" src="./images/BannerBoxV2/2.png"/>
          </div>
        </div>
        </div>
      </section>
      <HomeCatSlider />

      <section className='bg-white py-8'>
        <div className="container overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className='text-[22px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="rightSec w-[60%] flex justify-end">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Wellness" />
                  <Tab label="Jewelery" />
                </Tabs>
            </div>
          </div>

          <ProductsSlider items={4}/>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container overflow-hidden">
          <div className="freeShipping w-[80%] mx-auto p-4 border-2 border-[#a83e3e] rounded-sm flex items-center justify-between">
            <div className='col1 flex items-center gap-4'>
              <LiaShippingFastSolid className='transform rotate-y-180 text-5xl'/>
              <span className='text-2xl font-semibold uppercase'>Free Shipping</span>
            </div>

            <div className='col2'>
              <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and Over $200</p>
            </div>

            <div className="col3">
              <p className='font-bold text-2xl'>- Only 200$</p>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden my-4">
          <AdsBannerSliderV2 items={4}/>
        </div>
          
      </section>

      <section className="pb-5 bg-white">
        <div className="container overflow-hidden">
          <h2 className='text-[22px] font-[600]'>Latest Products</h2>
          <ProductsSlider items={6}/>
          <AdsBannerSlider items={4}/>
        </div>
      </section>
      
      
      <section className="pb-5 bg-white">
        <div className="container overflow-hidden">
          <h2 className='text-[22px] font-[600]'>Featured Products</h2>
          <ProductsSlider items={6}/>
          <AdsBannerSlider items={3}/>
        </div>
      </section>

      <section className="blogSection pb-8 bg-white">
        <div className="container overflow-hidden">
          <h2 className='text-[22px] font-[600]'>From The Blog</h2>
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            spaceBetween={30}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-md'>
              <Link to="/" className='w-full'>
                <BlogItem/> 
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home