import React from 'react'
import './style.css'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const BlogItem = () => {
  return (
    <div className='blogItem group w-full !cursor-pointer'>
      <div className="imgWrapper overflow-hidden rounded-md w-full !cursor-pointer relative">
        <img src="/images/Blogs/Blog1.png" alt="" className='bg-white w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-300' />

        <span className='flex items-center gap-1 justify-center text-white absolute bottom-[15px] right-[15px] bg-[#FF5252] p-1 rounded-md text-[11px] font-semibold'>
          <IoMdTime className='!text-[18px] !font-semibold' /> 05 April 2026
        </span>
      </div>
      <div className="info py-4 bg-white">
        <Link to="/" className='link block !text-left !text-[16px] !font-semibold'>
          Nullam ullamcorper ornare molestie
        </Link>
        {/* <h2 className=''>Nullam ullamcorper ornare molestie</h2> */}
        <p className='text-left text-[12px] text-[rgba(0,0,0,0.6)] mb-2 group'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, incidunt neque? Suscipit sed praesentium harum. Distinctio beatae ut voluptatem suscipit!</p>
        <Link to="/" className='link font-[600] block w-25 !text-left text-[13px] text-[rgba(0,0,0,0.6)] flex gap-1 items-center'>Read More<MdKeyboardDoubleArrowRight className='inline text-[16px]' />
        </Link>
      </div>
    </div>
  )
}

export default BlogItem