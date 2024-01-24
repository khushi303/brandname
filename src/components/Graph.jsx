import React from 'react';
import AdvGirl from '../assets/png/advgirl.png';
import { GreenArrow } from './Iconimg';

const Graph = () => {
    return (
        <div className='xl:pt-[160px] lg:pt-[100px] sm:pt-[70px] pt-[50px] xl:pb-[138px] xl:mt-[61px]'>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6'>
                <div className='flex md:flex-row flex-col-reverse flex-wrap'>
                    <div data-aos="zoom-in" className='md:w-1/2 w-full md:mt-0 mt-8'>
                        <img src={AdvGirl} alt="AdvGirl" className='w-full' />
                    </div>
                    <div data-aos="fade-left" className='md:w-1/2 w-full flex md:justify-end items-center'>
                        <div className='flex flex-col lg:gap-[35px] gap-[20px]'>
                            <div className='bg-[#E74040] w-[94px] h-[7px]'></div>
                            <h2 className='text-[40px] font-bold leading-[125%] tracking-[0.2px] text-[#252B42] md:max-w-[258px]'>Our Popular
                                Courses</h2>
                            <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-[#737373] md:max-w-[351px] mr-[33px]'>Problems trying to resolve the conflict between
                                the two major realms of Classical physics:
                                Newtonian mechanics </p>
                            <button><a href="#learnmore" className='text-[14px] flex items-center gap-2 font-bold tracking-[0.2px] text-[#96BB7C] leading-[171.429%]'>Learn More <GreenArrow /></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph