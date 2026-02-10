import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const CategoryCollapse = () => {
  const [subMenuIndex, setSubMenuIndex] = React.useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = React.useState(null);

  const openSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
      setInnerSubMenuIndex(null); // Close inner menu when opening new main menu
    }
  }

  const openInnerSubmenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  }

  return (
    <div className="scroll bg-white shadow-sm rounded-lg border border-gray-100">
      <ul className='w-full divide-y divide-gray-100'>
        <li className='list-none'>
          {/* Main Category Item */}
          <div className='w-full flex items-center justify-between hover:bg-gray-50 px-3 py-3 rounded-t-lg'>
            <Link to='/' className='w-full'>
              <Button className='w-full !justify-start !px-0 !text-black !text-[16px] !font-medium !normal-case !bg-transparent hover:!bg-transparent'>
                Fashion
              </Button>
            </Link>
            {subMenuIndex === null ? (
              <FaRegPlusSquare 
                onClick={() => openSubmenu(0)} 
                className='text-[20px] cursor-pointer text-gray-500 hover:text-black transition-colors' 
              />
            ) : (
              <FaRegMinusSquare 
                onClick={() => openSubmenu(null)} 
                className='text-[20px] cursor-pointer text-gray-500 hover:text-black transition-colors' 
              />
            )}
          </div>

          {/* Submenu Container */}
          {subMenuIndex === 0 && (
            <div className='w-full bg-white'>
              <ul className='w-full'>
                <li className='list-none border-t border-gray-100'>
                  {/* Submenu Item */}
                  <div className='w-full flex items-center justify-between hover:bg-gray-50 px-6 py-3'>
                    <Link to='/' className='w-full'>
                      <Button className='w-full !justify-start !px-0 !text-black !text-[14px] !font-normal !normal-case !bg-transparent hover:!bg-transparent'>
                        Apparel
                      </Button>
                    </Link>
                    {innerSubMenuIndex === null ? (
                      <FaRegPlusSquare 
                        onClick={() => openInnerSubmenu(0)} 
                        className='text-[18px] cursor-pointer text-gray-500 hover:text-black transition-colors' 
                      />
                    ) : (
                      <FaRegMinusSquare 
                        onClick={() => openInnerSubmenu(null)} 
                        className='text-[18px] cursor-pointer text-gray-500 hover:text-black transition-colors' 
                      />
                    )}
                  </div>

                  {/* Inner Submenu */}
                  {innerSubMenuIndex === 0 && (
                    <div className='w-full bg-gray-50'>
                      <ul className='w-full py-2 space-y-1'>
                        <li className='list-none'>
                          <Link 
                            to='/' 
                            className='block w-full px-10 py-2.5 text-[13px] text-gray-700 hover:text-black hover:bg-white hover:shadow-sm transition-all duration-200'
                          >
                            Smart Tablet
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link 
                            to='/' 
                            className='block w-full px-10 py-2.5 text-[13px] text-gray-700 hover:text-black hover:bg-white hover:shadow-sm transition-all duration-200'
                          >
                            Crepe T-Shirt
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link 
                            to='/' 
                            className='block w-full px-10 py-2.5 text-[13px] text-gray-700 hover:text-black hover:bg-white hover:shadow-sm transition-all duration-200'
                          >
                            Leather Watch
                          </Link>
                        </li>
                        <li className='list-none'>
                          <Link 
                            to='/' 
                            className='block w-full px-10 py-2.5 text-[13px] text-gray-700 hover:text-black hover:bg-white hover:shadow-sm transition-all duration-200'
                          >
                            Rolling Diamond
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </li>
        
        {/* Add more main categories here if needed */}
        <li className='list-none'>
          <div className='w-full flex items-center justify-between hover:bg-gray-50 px-3 py-3'>
            <Link to='/' className='w-full'>
              <Button className='w-full !justify-start !px-0 !text-black !text-[16px] !font-medium !normal-case !bg-transparent hover:!bg-transparent'>
                Electronics
              </Button>
            </Link>
            <FaRegPlusSquare className='text-[20px] text-gray-300 cursor-not-allowed' />
          </div>
        </li>
        
        <li className='list-none'>
          <div className='w-full flex items-center justify-between hover:bg-gray-50 px-3 py-3'>
            <Link to='/' className='w-full'>
              <Button className='w-full !justify-start !px-0 !text-black !text-[16px] !font-medium !normal-case !bg-transparent hover:!bg-transparent'>
                Home & Garden
              </Button>
            </Link>
            <FaRegPlusSquare className='text-[20px] text-gray-300 cursor-not-allowed' />
          </div>
        </li>
        
        <li className='list-none'>
          <div className='w-full flex items-center justify-between hover:bg-gray-50 px-3 py-3 rounded-b-lg'>
            <Link to='/' className='w-full'>
              <Button className='w-full !justify-start !px-0 !text-black !text-[16px] !font-medium !normal-case !bg-transparent hover:!bg-transparent'>
                Sports
              </Button>
            </Link>
            <FaRegPlusSquare className='text-[20px] text-gray-300 cursor-not-allowed' />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CategoryCollapse