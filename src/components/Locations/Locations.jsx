import React from 'react'

function Locations() {
    return (
        <div className='pt-[150px] bg-[#FAFAFA] mx-auto px-10 xl:px-0'>
            <div className='text-center'>
                <h1 className='text-[35px] text-[#0B132A] font-semibold leading-[50px]'>Huge Global Network <br className='hidden md:block' /> of Fast VPN</h1>
                <h3 className='mt-[20px] text-[#4F5665] text-[16px] font-normal leading-[30px]'>See <span className='text-[#4F5665] font-medium'>LaslesVPN</span> everywhere to make it easier for you when you move <br className='hidden md:block' /> locations.</h3>
            </div>
            <div className='mt-[155px] flex justify-center'>
                <img src='/Map.png' />
            </div>
            <div>
                <div className="flex items-center flex-wrap justify-center gap-[47.5px] mt-[110px]">
                    <img src="Netflix.png" />
                    <img src="reddit.png" className="w-[190px] h-[60px]" />
                    <img src="amazon.png" className='h-44' />
                    <img src="discord.png" className="w-[190px] h-[60px]" />
                    <img src="spotify.png" className="w-[190px] h-[60px]" />
                </div>
            </div>
        </div>

    )
}

export default Locations