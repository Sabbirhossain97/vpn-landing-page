import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#f5f5f5e5] relative pt-[200px] pb-[100px] px-10 custom2:px-10">
            <div className='absolute z-5 bg-[#FFF] rounded-[10px] max-w-[1300px] mx-auto -top-[120px] left-10 right-10 custom2:left-[70px] custom2:right-[70px] flex justify-between'>
                <div className='flex flex-col lg:flex-row justify-between items-center px-[30px] py-[38px] lg:py-[58.5px] w-full'>
                    <div className='flex flex-col'>
                        <div className='text-[#0B132A] text-[24px] sm:text-[35px] text-center lg:text-start font-semibold leading-[45px]'>Subscribe Now for <br /> Get Special Features!</div>
                        <div className='mt-[20px] text-[#4F5665] text-[16px] text-center lg:text-start font-normal leading-[30px]'>Let's subscribe with us and find the fun.</div>
                    </div>
                    <div className='relative mt-5 lg:mt-0'>
                        <button className='text-[#FFF] whitespace-nowrap relative z-10 w-[250px] text-[16px] font-bold leading-[25px] px-[77.5px] py-[17.5px] bg-[#F53838] rounded-[10px]'>
                            Subscribe Now
                        </button>
                        <div className='absolute -bottom-[27.5px] left-5 rounded-[10px] w-[211px] h-[60px] bg-[rgba(245,56,56,0.3)] blur-[27px]'></div>
                    </div>
                </div>
                <div className='absolute -z-2 left-[31px] right-[31px] h-4 border -bottom-[15px] blur-[57px] bg-[#0D1025] opacity-[0.06] rounded-[10px]'></div>
            </div>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="lg:flex lg:justify-between">
                    <div className='flex flex-col items-center lg:items-start mt-8 lg:mt-0'>
                        <div className='flex items-center gap-[10px]'>
                            <img src='/logo.svg' />
                            <h3 className='text-[#0B132A] text-[20px] font-medium leading-normal'>Lasles<span className='text-[#0B132A] text-[20px] font-bold leading-normal'>VPN</span></h3>
                        </div>
                        <div className='mt-[20px] font-normal text-center lg:text-start text-[#4F5665]'>
                            <span className='font-semibold '>LaslesVPN</span> is a private virtual network that <br className='hidden lg:block' /> has unique features and has high security.
                        </div>
                        <div className='flex mt-[30px] -ml-5'>
                            <img src='Facebook.png' />
                            <img src='Twitter.png' className='-ml-3' />
                            <img src='Instagram.png' className='-ml-3' />
                        </div>
                        <div className='mt-[10px] text-[#AFB5C0] text-[16px] font-normal leading-[30px]'>
                            ©2020Lasles<span className='font-semibold leading-[30px]'>VPN</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 mt-8 lg:mt-0 gap-8 sm:gap-[126px] sm:grid-cols-3">
                        <div>
                            <h2 className="text-[18px] font-semibold text-[#0B132A] leading-[30px]">Product</h2>
                            <ul className='flex flex-col gap-[10px] whitespace-nowrap'>
                                <li className='text-[16px] mt-[20px] font-normal text-[#4F5665] leading-[30px]'>Download</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Pricing</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Locations</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Server</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Countries</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[18px] font-semibold text-[#0B132A] leading-[30px]">Engage</h2>
                            <ul className='flex flex-col gap-[10px] whitespace-nowrap'>
                                <li className='text-[16px] mt-[20px] font-normal text-[#4F5665] leading-[30px]'>LaslesVPN ?</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>FAQ</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Tutorials</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>About Us</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Privacy Policy</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Terms of Service</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[18px] font-semibold text-[#0B132A] leading-[30px] whitespace-nowrap">Earn Money</h2>
                            <ul className='flex flex-col gap-[10px] whitespace-nowrap'>
                                <li className='text-[16px] mt-[20px] font-normal text-[#4F5665] leading-[30px]'>Affiliate</li>
                                <li className='text-[16px] font-normal text-[#4F5665] leading-[30px]'>Become Partner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer