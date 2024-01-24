import React, { useState } from 'react';
import { BtnArrow } from './Iconimg';
import Headerimg from '../assets/png/heroimg.png';
import Headersq1 from '../assets/png/header-sq-1.png';
import Headersq2 from '../assets/png/header-sq-2.png';

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div className='relative'>
            <div className='container mx-auto xl:max-w-[980px] lg:px-4 px-6 relative z-[4]'>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex gap-[87px] items-center relative z-[5]'>
                        <p className='sm:text-[24px] text-[20px] font-bold leading-[133.333%] tracking-[0.1px] text-[#252B42]'>Brandname</p>
                        <ul className={`${nav ? "left-[-100%]" : "left-0 z-[6] bg-[#ffffff]"} flex items-center gap-[21px] flex-row max-lg:fixed max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all duration-300 ease-linear`}>
                            <li><a href="#home" onClick={() => setNav(!nav)} className='text-[14px] hover:text-[#96BB7C] transition-all duration-300 ease-linear font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] after:absolute after:w-0 hover:after:w-full hover:after:left-0 after:bg-[#96BB7C] after:h-[3px] relative after:left-[50%] after:bottom-[-3px] after:rounded-[2px] after:transition-all after:duration-300 after:ease-linear'>Home</a></li>
                            <li><a href="#product" onClick={() => setNav(!nav)} className='text-[14px] hover:text-[#96BB7C] transition-all duration-300 ease-linear font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] after:absolute after:w-0 hover:after:w-full hover:after:left-0 after:bg-[#96BB7C] after:h-[3px] relative after:left-[50%] after:bottom-[-3px] after:rounded-[2px] after:transition-all after:duration-300 after:ease-linear'>Product</a></li>
                            <li><a href="#pricing" onClick={() => setNav(!nav)} className='text-[14px] hover:text-[#96BB7C] transition-all duration-300 ease-linear font-bold leading-[171.429%] tracking-[0.2px] text-[#737373] after:absolute after:w-0 hover:after:w-full hover:after:left-0 after:bg-[#96BB7C] after:h-[3px] relative after:left-[50%] after:bottom-[-3px] after:rounded-[2px] after:transition-all after:duration-300 after:ease-linear'>Pricing</a></li>
                            <li><a href="#contact" onClick={() => setNav(!nav)} className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] hover:text-[#96BB7C] transition-all duration-300 ease-linear text-[#737373] after:absolute after:w-0 hover:after:w-full hover:after:left-0 after:bg-[#96BB7C] after:h-[3px] relative after:left-[50%] after:bottom-[-3px] after:rounded-[2px] after:transition-all after:duration-300 after:ease-linear'>Contact</a></li>
                            <li className='lg:hidden block'>
                                <button className='text-[14px] font-bold leading-[157.143%] tracking-[0.2px] text-[#96BB7C]'>Login</button>
                            </li>
                            <li className='lg:hidden block'>
                                <button className='flex items-center sm:gap-[15px] gap-[8px] sm:py-[15px] py-[12px] px-[20px] sm:px-[25px] rounded-[5px] bg-[#96BB7C] hover:bg-[#83a36c] hover:shadow-[0_15px_40px_-10px_rgba(150,187,124,.3)] transition-all duration-300 ease-in-out'><p className='text-[14px] text-nowrap font-bold leading-[157.143%] tracking-[0.2px] text-white'>JOIN US</p> <span><BtnArrow /></span></button>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:flex hidden items-center sm:gap-[45px] gap-[30px]'>
                        <button className='text-[14px] font-bold leading-[157.143%] tracking-[0.2px] text-[#96BB7C]'>Login</button>
                        <button className='flex items-center group sm:gap-[15px] gap-[8px] sm:py-[15px] py-[12px] px-[20px] sm:px-[25px] rounded-[5px] bg-[#96BB7C] hover:bg-[#94b87a]  hover:shadow-[0px_13px_19px_0px_rgba(150,187,124,.3)] transition-all duration-300 ease-in-out'><p className='text-[14px] text-nowrap font-bold leading-[157.143%] tracking-[0.2px] text-white'>JOIN US</p> <span><BtnArrow /></span></button>
                    </div>
                    <div onClick={() => setNav(!nav)} className='lg:hidden w-[27px] h-[21px] relative z-[6] flex justify-between flex-col'>
                        <span className={`${nav ? '' : "rotate-[50deg] translate-y-[15px]"} bg-[#96BB7C] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                        <span className={`${nav ? '' : "hidden"} bg-[#96BB7C] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                        <span className={`${nav ? '' : "rotate-[-50deg] translate-y-[-50%]"} bg-[#96BB7C] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}></span>
                    </div>
                </div>
            </div>
            <div id='home' className='container mx-auto xl:max-w-[1320px] lg:px-4 px-6 xl:pt-[140px] sm:pt-[50px] pt-[35px] xl:pb-[35px]'>
                <div className='flex flex-row flex-wrap items-center justify-center relative z-[5]'>
                    <div data-aos="fade-right" className='lg:w-1/2 w-full flex items-center lg:justify-center'>
                        <div className='flex flex-col lg:gap-[30px] gap-[20px]'>
                            <p className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#96BB7C]'>Join Us</p>
                            <h2 className='xl:text-[58px] text-[40px] font-bold leading-[137.931%] tracking-[0.2px] text-[#252B42] lg:max-w-[542px]'>HIGH QUALITY COURSES </h2>
                            <p className='text-[20px] font-normal leading-[150%] tracking-[0.2px] text-[#737373] lg:max-w-[458px]'>Every day brings with it a fresh set of learning possibilities.</p>
                            <div className='flex gap-[10px] items-center'>
                                <button className='text-[14px] font-bold leading-[157.143%] tracking-[0.2px] text-white bg-[#96BB7C] px-[40px] py-[15px] rounded-[5px] hover:shadow-[0_15px_40px_-10px_rgba(150,187,124,.4)] transition-all duration-300 ease-in-out'>Join Us</button>
                                <button className='text-[14px] font-bold leading-[157.143%] text-[#96BB7C] tracking-[0.2px] bg-transparent border border-solid border-[#96BB7C] px-[40px] py-[15px] rounded-[5px] hover:shadow-[0_15px_40px_-10px_rgba(150,187,124,.4)] transition-all duration-300 ease-in-out'>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full flex items-center lg:justify-end justify-center lg:mt-0 sm:mt-10 mt-8'>
                        <div data-aos="zoom-in" className='max-w-[535px]'>
                            <img src={Headerimg} alt="Headerimg" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl:max-w-[179px] max-w-[120px] md:block hidden absolute top-0 right-0'>
                <img src={Headersq1} alt="headersq1" className='w-full' />
            </div>
            <div className='xl:max-w-[111.606px] max-w-[80px] md:block hidden absolute top-0 left-0'>
                <img src={Headersq2} alt="headersq1" className='w-full' />
            </div>
        </div>
    )
}

export default Header;