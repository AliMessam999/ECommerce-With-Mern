import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';


const ProductItem = () => {
  return (
    <div className='productItem shadow-lg rounded-md w-full   bg-[#F0F0F0]'>
      <div className="group imgWraper w-full overflow-hidden rounded-md rounded-b-none relative">
        <Link to="/">
          <div className="img">
            <img src="./images/Product1.jpg" alt="" className='w-full' />
            <img src="./images/Product1.5.jpg" alt="" className='w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110'/>
          </div>
        </Link>
        <span className='discount flex items-center absolute top-2 left-2 z-50 bg-[#FE614D] text-[10px] text-white p-1 rounded-lg font-[500]'>20%</span>

        <div className="actions absolute top-[-200px] right-[-15px] flex items-center flex-col gap-4 z-50 w-[80px] transition-all duration-300 group-hover:top-2 ">
          <Tooltip title="Wishlist" placement="left-start">
          <Button className='!w-[35px] !min-w-[35px] !h-[35px] !rounded-full !bg-white !text-[black] hover:!bg-[#FE614D] hover:!text-white'><CiHeart/></Button>
          </Tooltip>
          <Tooltip title="Compare" placement="left-start">
          <Button className='!w-[35px] !min-w-[35px] !h-[35px] !rounded-full !bg-white !text-[black] hover:!bg-[#FE614D] hover:!text-white'><IoGitCompareOutline/></Button>
          </Tooltip>
          <Tooltip title="Details" placement="left-start">
          <Button className='!w-[35px] !min-w-[35px] !h-[35px] !rounded-full !bg-white !text-[black] hover:!bg-[#FE614D] hover:!text-white'><MdZoomOutMap/></Button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3 py-5 w-full">
        <h6 className='text-[14px] text-[#333] text-left'><Link to="/" className='link transition-all duration-300 hover:text-[#000]'>  Soylent Green</Link></h6>
        <h3 className='text-[16px] text-[#333] text-left title mt-2 font-[500] text-[rgba(0,0,0,0.9)] mb-2'><Link to="/" className='link transition-all duration-300 hover:text-[#000]'>Siril Geogette Pink Color Saree with Blouse Piece</Link></h3>
        <Stack spacing={1}>
          <Rating name="read-only size-small" defaultValue={3} size="small" readOnly />
          <div className="flex items-center gap-4">
            <span className="oldPrice line-through text-gray-400">$58.00</span>
            <span className="newPrice text-[#FE614D] font-semibold">$58.00</span>
          </div>
        </Stack>
      </div>
    </div>
  )
}

export default ProductItem