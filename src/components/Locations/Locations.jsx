import React from 'react'

function Locations() {
    return (
        <div className='pt-[150px] bg-[#FAFAFA] mx-auto px-6 sm:px-10 xl:px-0'>
            <div className='text-center px-5'>
                <h1 className='text-[35px] text-[#0B132A] font-semibold leading-[50px]'>Huge Global Network <br className='hidden md:block' /> of Fast VPN</h1>
                <h3 className='mt-[20px] text-[#4F5665] text-[16px] font-normal leading-[30px]'>See <span className='text-[#4F5665] font-medium'>LaslesVPN</span> everywhere to make it easier for you when you move <br className='hidden md:block' /> locations.</h3>
            </div>
            <div className='mt-[155px] flex justify-center'>
                <img src='/Map.png' alt='map' />
            </div>
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[47.5px] mt-[110px] max-w-[1300px] mx-auto'>
                    <div className='flex items-center'><img src="Netflix.png" /></div>
                    <div className='flex items-center'><img src="reddit.png" /></div>
                    <div className='flex items-center'><img src="amazon.png" /></div>
                    <div className='flex items-center'><img src="discord.png" /></div>
                    <div className='flex items-center'><img src="spotify.png" /></div>
                </div>
            </div>
        </div>
    )
}

export default Locations