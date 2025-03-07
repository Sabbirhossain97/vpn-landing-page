import { useState } from "react"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='pt-[50px] flex justify-between items-center px-6 sm:px-10 xl:px-0 relative'>
            <div className='flex items-center gap-[10px]'>
                <img src='/logo.svg' />
                <h3 className='text-[#0B132A] text-[20px] font-medium leading-normal'>Lasles<span className='text-[#0B132A] text-[20px] font-bold leading-normal'>VPN</span></h3>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer lg:hidden">
                <svg className="w-6 h-6 text-[#F53838]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className='hidden lg:block'>
                <ul className='flex space-x-[40px] text-[16px] text-[#4F5665]'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className={`${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition duration-300 lg:hidden ease-in-out fixed z-[1000] top-0 left-0 right-0 bg-[#F53838] h-auto`}>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute right-4 top-4 cursor-pointer">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                    </svg>
                </button>
                <ul className='flex flex-col py-10 items-center space-y-[24px] text-[16px] text-white'>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                    <li>
                        <button className='text-white lg:text-[#0B132A] font-medium'>Sign In</button>
                    </li>
                    <li>
                        <button className='px-[45px] py-[13px] text-white lg:text-[#F53855] leading-normal font-medium rounded-[50px] border border-white lg:border-[#F53855]'>Sign Up</button>
                    </li>
                </ul>
            </div>
            <div className='hidden lg:flex gap-[30px] text-[16px]'>
                <button className='text-[#0B132A] font-medium'>Sign In</button>
                <button className='px-[45px] py-[13px] text-[#F53855] leading-normal font-medium rounded-[50px] border border-[#F53855]'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar