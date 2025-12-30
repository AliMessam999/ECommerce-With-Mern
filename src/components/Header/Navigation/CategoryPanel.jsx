import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { IoMdClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./style.css"


const CategoryPanel = ({openCategoryPanel, isOpenCatPanel}) => {

  const [subMenuIndex , setSubMenuIndex] = React.useState(null);
  const [innerSubMenuIndex , setInnerSubMenuIndex] = React.useState(null);

  const openSubmenu = (index) => {
    if(subMenuIndex === index){
      setSubMenuIndex(null);
    }else{
      setSubMenuIndex(index);
    }
  }
  const openInnerSubmenu = (index) => {
    if(innerSubMenuIndex === index){
      setInnerSubMenuIndex(null);
    }else{
      setInnerSubMenuIndex(index);
    }
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className='categoryPanel select-none'>
      <div className="p-3 pb-0 flex items-center justify-between">
        <h3 className='text-[16px] font-[500]'>Shop By Categories</h3>
        <IoMdClose onClick={openCategoryPanel} className="cursor-pointer p-0 transition-transform duration-400 hover:rotate-90 hover:text-red-700 text-[20px]" />
      </div>

    <div className="scroll">
      <ul className='w-full'>
        <li className='list-none flex items-center relative'>
          <Link to='/' className='w-full'>
            <Button className='w-full !justify-start !px-3 !text-black !text-[16px]'>Fashion</Button>
          </Link>
          {
            subMenuIndex === null ? (
              <FaRegPlusSquare onClick={() => openSubmenu(0)} className='text-[40px] px-3 absolute right-0 cursor-pointer' />
            ) : (
              <FaRegMinusSquare  onClick={() => openSubmenu(null)} className='text-[40px]  px-3 absolute right-0 cursor-pointer' />
            )
          }
          {
            subMenuIndex === 0 && (
              <ul className='submenu absolute top-[100%] left-[0%] w-full pl-3'>
                <li className='list-none flex items-center relative'>
                  <Link to='/' className='w-full'>
                    <Button className='w-full !justify-start !px-3 !text-black !text-[12px]'>Apparel</Button>
              </Link>
              {
                  innerSubMenuIndex === null ? (
                  <FaRegPlusSquare  onClick={() => openInnerSubmenu(0)} className='text-[40px] px-3 absolute right-0 cursor-pointer' />
                ) : (
                  <FaRegMinusSquare  onClick={() => openInnerSubmenu(null)} className='text-[40px]  px-3 absolute right-0 cursor-pointer' />
                )
              }
              {
                innerSubMenuIndex === 0 && (
                  <ul className='inner_submenu absolute top-[100%] left-[0%] w-full pl-3'>
                    <li className='list-none flex items-center mb-1'>
                      <Link to='/' className='link w-full !justify-start !px-3 !text-[12px] transition'>Smart Tablet</Link>
                    </li>
                    <li className='list-none flex items-center mb-1'>
                      <Link to='/' className='link w-full !justify-start !px-3 !text-[12px] transition'>Crepe T-Shirt</Link>
                    </li>
                    <li className='list-none flex items-center mb-1'>
                      <Link to='/' className='link w-full !justify-start !px-3 !text-[12px] transition'>Leather Watch</Link>
                    </li>
                    <li className='list-none flex items-center mb-1'>
                      <Link to='/' className='link w-full !justify-start !px-3 !text-[12px] transition'>Rolling Diamond</Link>
                    </li>
                  </ul>
                )
              }
            </li>
          </ul> 
            )
          }
        </li>
      </ul>
    </div>

    </Box>
  );

  return (
    <div>
      {/* <Drawer open={isOpenCatPanel} onClick={openCategoryPanel}> */}
      <Drawer open={isOpenCatPanel} className='transition-all duration-900'>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default CategoryPanel