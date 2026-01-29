import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const BannerBoxV2 = ({src, info, mirror, valid}) => {
  return (
    <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative'>
        <img className={`w-full h-full object-cover transition-all duration-300 ${valid ? 'group-hover:scale-105' : ''} ${mirror}`} src={src} alt="" />
        <div className={`absolute top-0 p-4 w-40 h-full flex flex-col justify-center ${info === 'left' ? 'left-0' : 'right-[-15px]'}`}>
          <h2 className="title font-[700] text-[16px] mb-3">Samsung Gear VR Camera</h2>
          <p className="price mb-3 font-[500] text-[#FF5252]">$120.00</p>
          <Link className="btn !w-30 !p-0 !m-0">Shop Now</Link>
        </div>
    </div>
  )
}

export default BannerBoxV2