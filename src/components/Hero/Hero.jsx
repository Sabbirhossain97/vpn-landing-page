import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col custom1:flex-row gap-[100px] custom1:gap-[40px] pt-[120px] px-10 xl:px-0'>
            <div className='flex flex-col w-full custom1:w-1/2'>
                <h1 className='text-[50px] text-[#0B132A] font-medium text-center custom1:text-start leading-[70px]'>Want anything to be easy with <span className='text-[50px] font-bold leading-[70px]'>LaslesVPN.</span></h1>
                <h3 className='mt-[20px] text-[#4F5665] text-[16px] font-normal leading-[30px] text-center custom1:text-start'>
                    Provide a network for all your needs with ease and fun using <span className='text-[16px] font-semibold leading-[30px]'>LaslesVPN</span> discover interesting features from us.
                </h3>
                <div className='relative flex justify-center custom1:justify-start'>
                    <button className='text-[#FFF] relative z-10 w-[250px] mt-[50px] text-[16px] font-bold leading-[25px] px-[77.5px] py-[17.5px] bg-[#F53838] rounded-[10px]'>
                        Get Started
                    </button>
                    <div className='absolute flex justify-center z-5 -bottom-[27.5px] rounded-[10px] w-[211px] h-[60px] bg-[rgba(245,56,56,0.3)] blur-[27px]'></div>
                </div>
            </div>
            <div className='w-full custom1:w-1/2 flex justify-center'>
                <img src='/Hero-image.png' />
            </div>
        </div>
    )
}

export default Hero