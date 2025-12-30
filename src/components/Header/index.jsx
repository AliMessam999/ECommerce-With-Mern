import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import Search from '../Search'

// cart badge
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoCartOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';

// compare badge
import { GoGitCompare } from "react-icons/go";

// heart
import { CiHeart } from "react-icons/ci";
import Navigation from './Navigation';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Header = () => {
    return (
        <header className='bg-white'>
            <div className="top-strip py-2 border-t-1 border-b-1 border-[#e4e4e4]">
                <div className="container">
                    <div className="flex h-10 items-center justify-between gap-2">
                        <div className="col-1 w-[50%]">
                            <p className='text-[12px] text-[gray] font-[500]'>Get upto 50% off new season styles, limited time only</p>
                        </div>
                        <div className="col-2 w-[50%] flex justify-end gap-4">
                            <ul className='flex gap-4 items-center'>
                                <li className='list-none'>
                                    <Link to="/help-center" className='link text-[13px] font-[500] transition'>Help Center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link to="/order-tracking" className='link text-[13px] font-[500] transition'>Order Tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header py-4 border-b-1 border-[#e4e4e4]">
                <div className="container flex items-center justify-between gap-5">
                    <div className="col1 w-[25%]">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="col2 w-[45%]">
                       <Search/>
                    </div>

                    <div className="col3 w-[30%] flex p-2 justify-end">
                       <ul className='flex gap-4 items-center'>
                            <li className='list-none'>
                                <Link to="/login" className='link text-[13px] font-[500] transition'>Login </Link>
                                /
                                <Link to="/register" className='link text-[13px] font-[500] transition'> Register</Link>
                            </li>
                            |
                        </ul>
                        <ul  className='flex gap-1 items-center'>
                            <li>
                                <IconButton aria-label="cart" className='primary'>
                                    <StyledBadge badgeContent={1} color="secondary">
                                        <Tooltip title="Compare" placement="bottom">
                                            <GoGitCompare  />
                                        </Tooltip>
                                    </StyledBadge>
                                </IconButton>
                            </li>
                            <li>
                                <IconButton aria-label="cart" className='primary'>
                                    <StyledBadge badgeContent={1} color="secondary">
                                        <Tooltip title="Whishlist" placement="bottom">
                                            <CiHeart  />
                                        </Tooltip>
                                    </StyledBadge>
                                </IconButton>
                            </li>
                            <li>
                                <IconButton aria-label="cart" className='primary'>
                                    <StyledBadge badgeContent={4} color="secondary">
                                        <Tooltip title="Cart" placement="bottom">
                                            <IoCartOutline  className=''/>
                                        </Tooltip>
                                    </StyledBadge>
                                </IconButton>
                            </li>
                       </ul>
                    </div>
                </div>
            </div>

            <Navigation />
        </header>
    )
}

export default Header