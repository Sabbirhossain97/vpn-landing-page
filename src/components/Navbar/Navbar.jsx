import React from 'react'

function Navbar() {
    return (
        <div className='pt-[50px] flex justify-between items-center'>
            <div className='flex items-center gap-[10px]'>
                <img src='/logo.svg' />
                <h3 className='text-[#0B132A] text-[20px] font-medium leading-normal'>Lasles<span className='text-[#0B132A] text-[20px] font-bold leading-normal'>VPN</span></h3>
            </div>
            <div>
                <ul className='flex space-x-[40px] text-[16px] text-[#4F5665]'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className='flex gap-[30px] text-[16px]'>
                <button className='text-[#0B132A] font-medium'>Sign In</button>
                <button className='px-[45px] py-[13px] text-[#F53855] leading-normal font-medium rounded-[50px] border border-[#F53855]'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar