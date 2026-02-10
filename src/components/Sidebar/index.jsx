import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { Button } from '@mui/material';
import { useState } from 'react';
// import CategoryCollapse from '../CategoryCollapse'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


import './style.css'

const Sidebar = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const dropdownClick = () => {
    setIsOpenCategoryPanel(!isOpenCategoryPanel);
  }
  return (
    <aside className='sidebar bg-white py-5'>
        <div className="box w-50">
            <h3 className='text-[14px] font-[500] mb-3 flex justify-between w-[100%]'>
              Shop By Category
              <Button className='!text-black !w-[30px] !min-w-[30px] !h-[30px] !rounded-full' onClick={dropdownClick}>{isOpenCategoryPanel ? <FaAngleUp  /> : <FaAngleDown />}</Button>
            </h3>
            <Collapse isOpened={isOpenCategoryPanel}>
              <div className="scroll">
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Fashion" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Electronics" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Bags" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Footwear" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Groceries" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Beauty" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Wellness" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Jewelery" />
              </div>
            </Collapse>
            {/* <CategoryCollapse /> */}
        </div>
    </aside>
  )
}

export default Sidebar