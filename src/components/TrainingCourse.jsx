import React from 'react';
import { Timer, PencilJoker } from './Iconimg';

const TrainingCourse = () => {
    return (
        <div className='xl:py-[160px] lg:pt-[100px] sm:pt-[70px] pt-[50px]'>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6'>
                <p data-aos="fade-down" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-center text-[#96BB7C]'>Practice Advice</p>
                <h2 data-aos="fade-down" className='text-[40px] font-bold leading-[125%] tracking-[0.2px] text-[#252B42] text-center mt-[10px] mb-[10px]'>Most Popular Courses</h2>
                <div data-aos="fade-down" className='flex justify-center items-center'>
                    <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-center max-w-[469px] text-[#737373]'><span className='sm:block'>Problems trying to resolve the conflict between</span>
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-center gap-[30px] xl:mt-[80px] sm:mt-[40px] mt-[25px]'>
                    <div data-aos="flip-right" className='w-full max-w-[328px]'>
                        <div className='px-[40px] py-[35px] cursor-pointer shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] transition-shadow duration-300 ease-linear hover:shadow-[6px_13px_19px_10px_rgba(0,0,0,0.07)] bg-white flex flex-col items-center justify-center gap-[20px] w-full'>
                            <Timer />
                            <h3 className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] text-center'>training Courses</h3>
                            <div className='bg-[#E74040] h-[2px] w-[50px]'></div>
                            <p className='text-center text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-[#737373] max-w-[136px]'>The gradual
                                accumulation and
                                small-scale..</p>
                        </div>
                    </div>
                    <div data-aos="flip-left" className='w-full max-w-[328px]'>
                        <div className='px-[40px] py-[35px] cursor-pointer shadow-[0px_13px_19px_0px_rgba(0,0,0,0.07)] transition-shadow duration-300 ease-linear hover:shadow-[6px_13px_19px_10px_rgba(0,0,0,0.07)] bg-white flex flex-col items-center justify-center gap-[20px] w-full'>
                            <PencilJoker />
                            <h3 className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] text-center'>2,769 online courses</h3>
                            <div className='bg-[#E74040] h-[2px] w-[50px]'></div>
                            <p className='text-center text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-[#737373] max-w-[136px]'>The gradual
                                accumulation and
                                small-scale..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingCourse;