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
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';



import './style.css'

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
  const [isOpenAvailFilter, setisOpenAvailFilter] = useState(false);
  const [isOpenSizeFilter, setisOpenSizeFilter] = useState(false);

  return (
    <aside className='sidebar bg-white py-5'>
        <div className="box w-50">
            <h3 className='text-[14px] font-[500] mb-3 flex justify-between w-[100%]'>
              Shop By Category
              <Button className='!text-black !w-[30px] !min-w-[30px] !h-[30px] !rounded-full' onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}>{isOpenCategoryFilter ? <FaAngleUp  /> : <FaAngleDown />}</Button>
            </h3>
            <Collapse isOpened={isOpenCategoryFilter}>
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
        <div className="box w-50 mt-3">
            <h3 className='text-[14px] font-[500] mb-3 flex justify-between w-[100%]'>
              Availability
              <Button className='!text-black !w-[30px] !min-w-[30px] !h-[30px] !rounded-full' onClick={() => setisOpenAvailFilter(!isOpenAvailFilter)}>{isOpenAvailFilter ? <FaAngleUp  /> : <FaAngleDown />}</Button>
            </h3>
            <Collapse isOpened={isOpenAvailFilter}>
              <div className="scroll">
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Available (17)" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="In Stock (17)" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Not Available (1)" />
              </div>
            </Collapse>
            {/* <CategoryCollapse /> */}
        </div>
        <div className="box w-50 mt-3">
            <h3 className='text-[14px] font-[500] mb-3 flex justify-between w-[100%]'>
              Size
              <Button className='!text-black !w-[30px] !min-w-[30px] !h-[30px] !rounded-full' onClick={() => setisOpenSizeFilter(!isOpenSizeFilter)}>{isOpenSizeFilter ? <FaAngleUp  /> : <FaAngleDown />}</Button>
            </h3>
            <Collapse isOpened={isOpenSizeFilter}>
              <div className="scroll">
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Small (17)" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Medium (17)" />
                <FormControlLabel className='w-full' control={<Checkbox  size="small" className='!text-[#FF5252]' />} label="Large (1)" />
              </div>
            </Collapse>
            {/* <CategoryCollapse /> */}
        </div>
        <div className="box w-50 mt-3">
            <h3 className='text-[14px] font-[500] mb-3 flex justify-between w-[100%]'>
              Filter By Price
            </h3>
            <RangeSlider />
             <div className="flex pt-2 pb-2 priceRange">
                <span>
                    From: <strong className="text-sm">Rs: 100</strong>
                </span>
                <span className="ml-auto">
                    To: <strong className="text-sm">Rs: 5000</strong>
                </span>
             </div>
             
               {/* min={0} */}
               {/* max={100} */}
               {/* defaultValue={[25, 75]} */}
               {/* step={5} */}
        </div>
        <div className="box w-50 mt-3">
            <h3 className='text-[14px] font-[500] mb-3 flex justify-between w-[100%]'>
              Filter By Rating
            </h3>
            <div className="rating">
              <Rating className='' name="read-only size-small" defaultValue={5} size="small" readOnly />
            </div>
            <div className="rating">
              <Rating className='' name="read-only size-small" defaultValue={4} size="small" readOnly />
            </div>
            <div className="rating">
              <Rating className='' name="read-only size-small" defaultValue={3} size="small" readOnly />
            </div>
            <div className="rating">
              <Rating className='' name="read-only size-small" defaultValue={2} size="small" readOnly />
            </div>
            <div className="rating">
              <Rating className='' name="read-only size-small" defaultValue={1} size="small" readOnly />
            </div>
        </div>
    </aside>
  )
}

export default Sidebar