import React, { useState } from 'react';
import CoursePencil from '../assets/png/course-pencil.png';
import { GreenBtn } from './Iconimg';

const Courses = () => {
    const [showmodal, setshowmodal] = useState(false)
    if (showmodal === true) {
        document.body.classList.add("overflow-hidden")

    } else {
        document.body.classList.remove("overflow-hidden")
    }
    return (
        <div id='product' className='xl:py-[160px] lg:pt-[100px] sm:pt-[70px] pt-[50px]'>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6'>
                <p data-aos="fade-down" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-center text-[#96BB7C]'>Practice Advice</p>
                <h2 data-aos="fade-down" className='text-[24px] font-bold leading-[133.333%] tracking-[0.1px] text-[#252B42] text-center mt-[10px] mb-[10px]'>Our Popular Courses</h2>
                <div data-aos="fade-down" className='flex justify-center items-center'>
                    <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-center max-w-[469px] text-[#737373]'><span className='sm:block'>Problems trying to resolve the conflict between</span>
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='xl:mt-[80px] sm:mt-[40px] mt-[25px] max-w-[688px] relative'>
                        <img src={CoursePencil} alt="CoursePencil" className='w-full rounded-[20px]' />
                        <div onClick={() => setshowmodal(true)} className='absolute cursor-pointer top-0 left-0 bottom-0 right-0 flex items-center justify-center'>
                            <GreenBtn />
                        </div>
                    </div>
                </div>
            </div>
            {showmodal ? (
                <>
                    <div onClick={() => setshowmodal(false)} className='fixed z-[7] top-0 left-0 h-full min-h-screen backdrop-blur-sm w-full flex items-center justify-center bg-transparent'>
                        <div onClick={() => setshowmodal(true)} className='bg-white p- rounded-[5px] relative'>
                            <iframe
                                className="sm:w-[550px] w-[300px] sm:h-[380px] h-[230px]"
                                src="https://www.youtube.com/embed/9vxLyJdvM1w?si=-umiukp_wFtOeFjJ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Courses