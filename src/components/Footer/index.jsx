import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaGiftSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GrRefresh } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";



// CheckBox
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Footer = () => {
  return (
    <>
        <footer className='py-10 bg-white border-t border-[#e5e5e5]'>
            <div className="container">
                <div className="flex items-center justify-center gap-10 py-8 pb-8">
                    <div className="col flex items-center justify-center flex-col group w-[15%]" >
                        <LiaShippingFastSolid className='text-5xl group-hover:text-[#FF5252] transition-all duration-300 group-hover:-translate-y-3'/>
                        <h3 className='text-[16px] font-semibold'>Free Shipping</h3>
                        <p className='text-[13px] font-[400]'>For All Orders Over $100</p>
                    </div>
                    <div className="col flex items-center justify-center flex-col group w-[15%]" >
                        <GrRefresh className='text-5xl group-hover:text-[#FF5252] transition-all duration-300 group-hover:-translate-y-3'/>
                        <h3 className='text-[16px] font-semibold'>30 Days Return</h3>
                        <p className='text-[13px] font-[400]'>For an Exchange Product</p>
                    </div>
                    <div className="col flex items-center justify-center flex-col group w-[15%]" >
                        <RiSecurePaymentLine className='text-5xl group-hover:text-[#FF5252] transition-all duration-300 group-hover:-translate-y-3'/>
                        <h3 className='text-[16px] font-semibold'>Safe Payment</h3>
                        <p className='text-[13px] font-[400]'>100% Secure Payment</p>
                    </div>
                    <div className="col flex items-center justify-center flex-col group w-[15%]" >
                        <LiaGiftSolid className='text-5xl group-hover:text-[#FF5252] transition-all duration-300 group-hover:-translate-y-3'/>
                        <h3 className='text-[16px] font-semibold'>Special Gifts</h3>
                        <p className='text-[13px] font-[400]'>Our First Order Product</p>
                    </div>
                    <div className="col flex items-center justify-center flex-col group w-[15%]" >
                        <TfiHeadphoneAlt className='text-5xl group-hover:text-[#FF5252] transition-all duration-300 group-hover:-translate-y-3'/>
                        <h3 className='text-[16px] font-semibold'>24/7 Support</h3>
                        <p className='text-[13px] font-[400]'>For All Orders Over $100</p>
                    </div>
                </div>
                <hr />
                <div className="footer flex py-12">
                    <div className="part1 w-[25%] border-r border-[#e5e5e5]">
                        <h2 className='text-[20px] font-[600] mb-4'>Contact Us</h2>
                        <p className='text-[13px] font-[400] mb-2'>Classyshop - Mega Super Store <br /> 507-Union Trade Center France</p>
                        <p className="mb-2"><Link to="mailto:alimeesam999@gmail.com" className="link text-[13px]">alimeesam999@gmail.com</Link></p>
                        <span className="link text-[22px] font-[600] block text-[#FF5252] mb-5">+251 912 345 678</span>

                        <div className="flex items-center gap-2">
                            <IoChatboxOutline className="text-[50px] text-[#FF5252]"/>
                            <span className="text-[18px] font-[700]">Online Chat <br /> Get Expert Help</span>
                        </div>
                    </div>

                    <div className="part2 w-[40%] flex ml-5">
                        <div className="part2_col1 w-[50%]">
                            <h2 className='text-[20px] font-[600] mb-4'>Products</h2>
                            <ul className='list'>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Prices Drop</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>New Products</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Best Sales</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Contact Us</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Sitemap</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Stores</Link></li>
                            </ul>
                        </div>
                        <div className="part2_col2 w-[50%]">
                            <h2 className='text-[20px] font-[600] mb-4'>Our Company</h2>
                            <ul className='list'>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Delivery</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Legal Notice</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Terms & Conditions</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>About Us</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Secure Payment</Link></li>
                                <li className='list-none  mb-2'><Link to="/" className='link text-[14px] w-full'>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="part3 w-[35%] flex flex-col ml-5">
                        <h2 className='text-[18px] font-[600] mb-4'>Subscribe To Newsletter</h2>
                        <p className='text-[13px] font-[400] mb-2'>Get e-mail updates about our latest shop and special offers.</p>
                        <form action="">
                            <input type="text" className='w-full h-[35px] border border-[#e5e5e5] outline-[#e5e5e5] pl-4 pr-4 rounded-sm placeholder:text-[13px] placeholder:font-[400]' placeholder='Your Email Address' />
                            <Button className='btn-org !mt-4 !h-[35px] !border !bg-[#FF5252] !text-white !pl-4 !pr-4 !rounded-sm !mb-4'>Subscribe</Button>
                            <br />
                            <FormControlLabel className='block !text-gray-400' control={<Checkbox className='!text-[#FF5252]' />} label="I agree to the terms & conditions and the Privacy Policy" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
        <div className="bottomStrip border-t bg-white border-[rgba(0,0,0,0.2)] py-3">
            <div className="container flex items-center justify-between">
                <ul className='flex items-center gap-2'>
                    <li className='list-none group'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#b8b6b6] bg-white group-hover:bg-[#FF5252] group-hover:border-[#FF5252] transition-all'>
                            <FaFacebookF className='!text-[18px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#b8b6b6] bg-white group-hover:bg-[#FF5252] group-hover:border-[#FF5252] transition-all'>
                            <AiOutlineYoutube className='!text-[18px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#b8b6b6] bg-white group-hover:bg-[#FF5252] group-hover:border-[#FF5252] transition-all'>
                            <FaPinterestP className='!text-[18px] group-hover:text-white' />
                        </Link>
                    </li>
                    <li className='list-none group'>
                        <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full flex items-center justify-center border border-[#b8b6b6] bg-white group-hover:bg-[#FF5252] group-hover:border-[#FF5252] transition-all'>
                            <FaInstagram className='!text-[18px] group-hover:text-white' />
                        </Link>
                    </li>
                </ul>

                <p className='text-[13px] font-[400]'>© 2026 by <span className='text-[#FF5252]'>Ecommerce</span>. All Rights Reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Footer