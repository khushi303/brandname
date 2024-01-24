import React from 'react'
import { Tel, Map, Msg, Facebook, Instagram, Tweet } from './Iconimg';

const Footer = () => {
    return (
        <>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6'>
                <div className='flex flex-row flex-wrap sm:justify-between py-[50px]'>
                    <ul className='flex flex-col lg:w-[13%] md:w-[23.8%] sm:w-[32%] w-[50%]'>
                        <li className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] md:mb-[20px] mb-[15px]'>Company Info</li>
                        <ul className='flex flex-col gap-[10px]'>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>About Us</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Carrier</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>We are hiring</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Blog</a></li>
                        </ul>
                    </ul>
                    <ul className='flex flex-col lg:w-[15%] md:w-[23.8%] sm:w-[32%] w-[50%] sm:pl-0 pl-[15px]'>
                        <li className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] md:mb-[20px] mb-[15px]'>Legal</li>
                        <ul className='flex flex-col gap-[10px]'>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>About Us</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Carrier</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>We are hiring</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Blog</a></li>
                        </ul>
                    </ul>
                    <ul className='flex flex-col lg:w-[16%] md:w-[23.8%] sm:w-[32%] w-[50%] sm:mt-0 mt-[25px]'>
                        <li className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] md:mb-[20px] mb-[15px]'>Features</li>
                        <ul className='flex flex-col gap-[10px]'>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Business Marketing</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>User Analytic</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Live Chat</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Unlimited Support</a></li>
                        </ul>
                    </ul>
                    <ul className='flex flex-col lg:w-[15%] md:w-[23.8%] sm:w-[32%] w-[50%] md:mt-0 mt-[25px] sm:pl-0 pl-[15px]'>
                        <li className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] md:mb-[20px] mb-[15px]'>Resources</li>
                        <ul className='flex flex-col gap-[10px]'>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>IOS & Android</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Watch a Demo</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>Customers</a></li>
                            <li><a href="" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] hover:text-[#96BB7C] transition-colors duration-300 ease-linear'>API</a></li>
                        </ul>
                    </ul>
                    <div className='lg:w-[33%] w-full lg:mt-0 mt-[25px]'>
                        <p className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] md:mb-[20px] mb-[15px]'>Get In Touch</p>
                        <div className='flex flex-col gap-[10px] sm:items-center lg:justify-center'>
                            <a href="tel:4805550103" target='blank' className='flex items-center justify-start gap-[10px]'>
                                <Tel />
                                <p className='text-[14px] hover:text-[#96BB7C] transition-colors duration-300 ease-linear font-bold tracking-[0.2px] leading-[171.429%] text-[#737373]'>(480) 555-0103</p>
                            </a>
                            <a href="https://www.google.com/maps/search/4517+Washington+Ave.+Manchester,+Kentucky+39495/@37.1536413,-83.7644756,17z/data=!3m1!4b1?entry=ttu" target='blank' className='flex items-center gap-[10px]'>
                                <Map />
                                <p className='text-[14px] hover:text-[#96BB7C] transition-colors duration-300 ease-linear font-bold tracking-[0.2px] leading-[171.429%] text-[#737373]'>4517 Washington Ave. Manchester, Kent</p>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target='blank' className='flex items-center justify-start gap-[10px]'>
                                <Msg />
                                <p className='text-[14px] hover:text-[#96BB7C] transition-colors duration-300 ease-linear font-bold tracking-[0.2px] leading-[171.429%] text-[#737373]'>debra.holt@example.com</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FAFAFA]'>
                <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6 py-[25px]'>
                    <div className='flex flex-wrap md:justify-between md:flex-row flex-col md:gap-0 gap-3'>
                        <p className='text-[14px] pr-5 font-bold text-[#737373] leading-[171.429%] md:text-start text-center tracking-[0.2px]'>Made With Love By Figmaland All Right Reserved </p>
                        <div className='flex gap-[20px] items-center justify-center lg:px-[72px]'>
                            <Facebook />
                            <Instagram />
                            <Tweet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;