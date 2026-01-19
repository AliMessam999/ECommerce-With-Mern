import React from 'react'
import { Link } from 'react-router-dom';


const BannerBox = ({image, link}) => {
  return (
    <div className="box p-0 m-0 bannerBox overflow-hidden group">
        <Link to={link}>
            <img src={image} alt="" className="w-full h-full group-hover:scale-105 transition-all duration-300 group-hover:rotate-2 rounded-lg" />
        </Link>
    </div>
  )
}

export default BannerBox