import React from 'react'
import './style.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
    <div className='searchBox w-[100%] border h-[50px] bg-[#e5e5e5] rounded p-3 relative'>
        <input type="text" placeholder='Search for products...' className='outline-none w-[100%]'/>
        <Button className="!w-10 !min-w-0 !h-10 !rounded-full !absolute !right-2 !top-1/2 !-translate-y-1/2 !z-10 hover:!bg-gray-300 transition">
            <IoSearch className="text-black text-[30px] !p-0" />
        </Button>

    </div>
  )
}

export default Search