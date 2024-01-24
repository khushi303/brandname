import React from 'react';
import Pencilimg from '../assets/png/clientpencil.png';
import yellpencil from '../assets/png/clientyellpencil.png';
import { HeartSvg, CartSvg, EyeSvg, StarSvg, DownloadSvg, ClientGreenArrow } from './Iconimg';

const ClientMatter = () => {
    return (
        <div className='xl:py-[160px] lg:pt-[100px] sm:pt-[70px] pt-[50px]'>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6'>
                <p data-aos="fade-down" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-center text-[#96BB7C]'>Practice Advice</p>
                <h2 data-aos="fade-down" className='text-[40px] font-bold leading-[125%] tracking-[0.2px] text-center text-[#252B42] mt-[10px] mb-[10px]'>Every Client Matters</h2>
                <div data-aos="fade-down" className='flex justify-center items-center'>
                    <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-center max-w-[469px] text-[#737373]'><span className='sm:block'>Problems trying to resolve the conflict between</span>
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex sm:flex-row flex-col justify-center md:items-start items-center gap-[15px] xl:mt-[80px] sm:mt-[40px] mt-[25px]'>
                    <div data-aos="fade-down" className='max-w-[349px]'>
                        <div className='relative'>
                            <img src={Pencilimg} alt="Pencilimg" className='w-full' />
                            <button className='absolute top-[20px] left-[20px] text-[14px] font-bold tracking-[0.2px] leading-[171.429%] text-white px-[10px] rounded-[3px] bg-[#E74040] hover:bg-[#b64949] transition-colors duration-300 ease-linear shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)]'>Sale</button>
                            <div className='flex gap-[10px] items-center justify-center absolute left-0 right-0 bottom-[8%]'>
                                <HeartSvg />
                                <CartSvg />
                                <EyeSvg />
                            </div>
                        </div>
                        <div className='px-[25px] pt-[25px] pb-[35px] flex-col items-start flex gap-[10px]'>
                            <div className='flex items-center justify-between w-full'>
                                <p className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#96BB7C]'>Books Liberary</p>
                                <button className='p-[5px] bg-[#2D4059] hover:bg-[#96BB7C] transition-colors duration-300 ease-linear rounded-[20px] flex items-center gap-[5px]'><StarSvg /> <span className='text-[12px] font-normal leading-[133.333%] tracking-[0.2px] text-white'>4.9</span></button>
                            </div>
                            <p className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] max-w-[131px]'>Get Quality Education</p>
                            <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-[#737373]'>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.</p>
                            <div className='flex gap-[10px] items-center'>
                                <DownloadSvg />
                                <p className='text-[14px] font-bold leading-[171.429%] text-[#737373] tracking-[0.2px]'>15 Sales</p>
                            </div>
                            <div className='px-[3px] py-[5px] flex items-center gap-[5px]'>
                                <p className='text-[16px] font-bold leading-[150%] text-[#BDBDBD] tracking-[0.1px]'>$16.48</p>
                                <p className='text-[16px] font-bold leading-[150%] text-[#FFAB71] tracking-[0.1px]'>$6.48</p>
                            </div>
                            <button className='px-[20px] py-[10px] flex items-center gap-[10px]  border border-solid border-[#96BB7C] rounded-[37px] hover:shadow-[0_15px_40px_-10px_rgba(150,187,124,.4)] transition-all duration-300 ease-in-out'> <p className='text-[14px] font-bold leading-[#171.429%] tracking-[0.2px] text-[#96BB7C]'>Learn More </p><ClientGreenArrow /></button>
                        </div>
                    </div>
                    <div data-aos="fade-down" className='max-w-[349px]'>
                        <div className='relative'>
                            <img src={yellpencil} alt="yellpencil" className='w-full' />
                            <button className='absolute top-[20px] left-[20px] text-[14px] font-bold tracking-[0.2px] leading-[171.429%] text-white px-[10px] rounded-[3px] bg-[#E74040] hover:bg-[#b64949] transition-colors duration-300 ease-linear shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)]'>Sale</button>
                            <div className='flex gap-[10px] items-center justify-center absolute left-0 right-0 bottom-[8%]'>
                                <HeartSvg />
                                <CartSvg />
                                <EyeSvg />
                            </div>
                        </div>
                        <div className='px-[25px] pt-[25px] pb-[35px] flex-col items-start flex gap-[10px]'>
                            <div className='flex items-center justify-between w-full'>
                                <p className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-[#96BB7C]'>Training Courses</p>
                                <button className='p-[5px] bg-[#2D4059] rounded-[20px] hover:bg-[#96BB7C] transition-colors duration-300 ease-linear flex items-center gap-[5px]'><StarSvg /> <span className='text-[12px] font-normal leading-[133.333%] tracking-[0.2px] text-white'>4.9</span></button>
                            </div>
                            <p className='text-[16px] font-bold leading-[150%] tracking-[0.1px] text-[#252B42] max-w-[131px]'>Video in Live Action</p>
                            <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-[#737373]'>We focus on ergonomics and meeting
                                you where you work. It's only a
                                keystroke away.</p>
                            <div className='flex gap-[10px] items-center'>
                                <DownloadSvg />
                                <p className='text-[14px] font-bold leading-[171.429%] text-[#737373] tracking-[0.2px]'>15 Sales</p>
                            </div>
                            <div className='px-[3px] py-[5px] flex items-center gap-[5px]'>
                                <p className='text-[16px] font-bold leading-[150%] text-[#BDBDBD] tracking-[0.1px]'>$16.48</p>
                                <p className='text-[16px] font-bold leading-[150%] text-[#FFAB71] tracking-[0.1px]'>$6.48</p>
                            </div>
                            <button className='px-[20px] py-[10px] flex items-center gap-[10px]  border border-solid border-[#96BB7C] rounded-[37px] hover:shadow-[0_15px_40px_-10px_rgba(150,187,124,.4)] transition-all duration-300 ease-in-out'> <p className='text-[14px] font-bold leading-[#171.429%] tracking-[0.2px] text-[#96BB7C]'>Learn More </p><ClientGreenArrow /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientMatter;