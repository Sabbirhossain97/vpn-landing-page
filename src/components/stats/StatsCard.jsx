import React from 'react'

function StatsCard() {
    return (
        <div className='flex mt-[104px] justify-between mx-auto relative bg-[#FFF]'>
            <div className='flex justify-center items-center gap-[36.5px] py-[67.5px] w-1/3'>
                <div>
                    <img src='/user.png' />
                </div>
                <div className='flex flex-col gap-[5px] '>
                    <h2 className='text-[#0B132A] text-[25px] font-bold leading-[30px]'>90+</h2>
                    <h3 className='text-[#4F5665] text-[20px] font-normal leading-[30px]'>Users</h3>
                </div>
            </div>
            <div className='h-[125px] my-auto border border-[#EEEFF2]'></div>
            <div className='flex justify-center items-center gap-[36.5px] py-[67.5px] w-1/3'>
                <div>
                    <img src='/location.png' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='text-[#0B132A] text-[25px] font-bold leading-[30px]'>30+</h2>
                    <h3 className='text-[#4F5665] text-[20px] font-normal leading-[30px]'>Locations</h3>
                </div>
            </div>
            <div className='h-[125px] my-auto border border-[#EEEFF2]'></div>
            <div className='flex justify-center items-center gap-[36.5px] py-[67.5px] w-1/3'>
                <div>
                    <img src='/server.png' />
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2 className='text-[#0B132A] text-[25px] font-bold leading-[30px]'>50+</h2>
                    <h3 className='text-[#4F5665] text-[20px] font-normal leading-[30px]'>Servers</h3>
                </div>
            </div>
            <div className='absolute -z-2 top-[52px] left-[36px] right-[36px] blur-[57px] h-[189px] rounded-[10px] bg-[#0D1025] opacity-[0.06]'></div>
        </div>
    )
}

export default StatsCard