import React from 'react'

const LiveAction = () => {
    return (
        <div id='contact' className='xl:py-[160px] lg:py-[100px] sm:py-[70px] py-[50px]  bg-[#2D4059]'>
            <div className='container mx-auto xl:max-w-[1074px] lg:px-4 px-6 pb-[20px]'>
                <p data-aos="fade-down" className='text-[14px] font-bold leading-[171.429%] tracking-[0.2px] text-center text-[#96BB7C]'>Newsletter</p>
                <h2 data-aos="fade-down" className='text-[24px] font-bold leading-[133.333%] tracking-[0.1px] text-center text-white my-[10px]'>Video in Live Action</h2>
                <div data-aos="fade-down" className='flex justify-center items-center'>
                    <p className='text-[14px] font-normal leading-[142.857%] tracking-[0.2px] text-center max-w-[469px] text-white'><span className='sm:block'>Problems trying to resolve the conflict between</span>
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div data-aos="fade-down" className='flex items-center justify-center'>
                    <div className='xl:mt-[80px] sm:mt-[40px] mt-[25px] max-w-[688px] w-full flex '>
                        <input type="email" required className='py-[15px] px-[20px] text-[#737373] bg-white w-full outline-none rounded-tl-[5px] rounded-bl-[5px] border-t border-s border-b border-solid border-[#E6E6E6]' placeholder='Your Email' />
                        <button type='send' className='text-[14px] font-normal leading-[200%] tracking-[0.2px] hover:bg-[#96bb7cdb] transition-colors duration-300 ease-linear text-white py-[15px] px-[22.5px] bg-[#96BB7C] border rounded-tr-[5px] rounded-br-[5px] border-solid border-[#E6E6E6]'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveAction