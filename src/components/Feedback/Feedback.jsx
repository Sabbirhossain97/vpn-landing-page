import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Feedback() {
    return (
        <div className='pt-[124px] pb-[200px] bg-[#FAFAFA] px-6 sm:px-10 custom2:px-0'>
            <div className='text-center'>
                <h1 className='text-[35px] text-[#0B132A] font-semibold leading-[50px]'>Trusted by Thousands of <br className='hidden md:block' /> Happy Customer</h1>
                <h3 className='mt-[20px] text-[#4F5665] text-[16px] font-normal leading-[30px]'>These are the stories of our customers who have joined us with great <br className='hidden md:block' /> pleasure when using this crazy feature.</h3>
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={60}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        pagination: { enabled: false },
                        navigation: true,
                    },
                    640: {
                        slidesPerView: 1,
                        pagination: { enabled: true },
                    },
                    874: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                className="mt-[60px] max-w-[1300px] relative"
                style={{
                    "--swiper-pagination-color": "#F53838",
                    "--swiper-pagination-bullet-inactive-color": "#DDE0E4",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "10px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    "--swiper-pagination-bullet-width": "10px",
                    "--swiper-pagination-bullet-border-radius": "50%",
                    "--swiper-pagination-bullet-height": "10px",
                    "--swiper-pagination-bottom": "-30px",
                    "--swiper-pagination-left": "50%",
                    "--swiper-pagination-transform": "translateX(-50%)",
                }}
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-[20px] h-auto lg:h-[230px] rounded-[10px] border-2 border-[#F53838] bg-[#FFF] cursor-move">
                        <div className='p-[30px]'>
                            <div className='flex flex-col sm:flex-row items-center justify-between'>
                                <div className='flex flex-col items-center sm:flex-row gap-[30px] sm:gap-[20px]'>
                                    <img src='avatar-1.png' className='w-[50px] h-[50px]' />
                                    <div className='flex flex-col items-center sm:items-start'>
                                        <h1 className='text-[#0B132A] text-[18px] font-semibold'>Viezh Robert</h1>
                                        <h3 className='text-[#4F5665] text-[14px] font-normal'>Warsaw, Poland</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px] mt-2 sm:mt-0'>
                                    <h3 className='text-[#0B132A] text-[16px] font-normal leading-[30px]'>4.5</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250" />
                                    </svg>
                                </div>
                            </div>
                            <div className='mt-[10px]'>
                                <h2 className='text-[#0B132A] text-[16px] text-center sm:text-start font-normal leading-[30px] line-clamp-2 lg:line-clamp-4'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-[20px] h-auto lg:h-[230px] rounded-[10px] border-2 border-[#DDD] bg-[#FFF] cursor-move">
                        <div className='px-[30px] pt-[30px] pb-[42px]'>
                            <div className='flex flex-col sm:flex-row items-center justify-between'>
                                <div className='flex flex-col items-center sm:flex-row gap-[30px] sm:gap-[20px]'>
                                    <img src='avatar-2.png' className='w-[50px] h-[50px]' />
                                    <div className='flex flex-col items-center sm:items-start'>
                                        <h1 className='text-[#0B132A] text-[18px] font-semibold'>Yessica Christy</h1>
                                        <h3 className='text-[#4F5665] text-[14px] font-normal'>Shanxi, China</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <h3 className='text-[#0B132A] text-[16px] font-normal leading-[30px]'>4.5</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250" />
                                    </svg>
                                </div>
                            </div>
                            <div className='mt-[10px]'>
                                <h2 className='text-[#0B132A] text-[16px] text-center sm:text-start  font-normal leading-[30px] line-clamp-2 lg:line-clamp-4'>“I like it because I like to travel far and still can connect with high speed.”.</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-[20px] h-auto lg:h-[230px] rounded-[10px] border-2 border-[#DDD] bg-[#FFF] cursor-move">
                        <div className='px-[30px] pt-[30px] pb-[47px]'>
                            <div className='flex flex-col sm:flex-row items-center justify-between'>
                                <div className='flex flex-col items-center sm:flex-row gap-[30px] sm:gap-[20px]'>
                                    <img src='avatar-3.png' className='w-[50px] h-[50px]' />
                                    <div className='flex flex-col items-center sm:items-start'>
                                        <h1 className='text-[#0B132A] text-[18px] font-semibold'>Kim Young Jou</h1>
                                        <h3 className='text-[#4F5665] text-[14px] font-normal'>Seoul, South Korea</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <h3 className='text-[#0B132A] text-[16px] font-normal leading-[30px]'>4.5</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250" />
                                    </svg>
                                </div>
                            </div>
                            <div className='mt-[10px]'>
                                <h2 className='text-[#0B132A] text-[16px] text-center sm:text-start  font-normal leading-[30px] line-clamp-2 lg:line-clamp-4'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col gap-[20px] h-auto lg:h-[230px] rounded-[10px] border-2 border-[#F53838] bg-[#FFF] cursor-move">
                        <div className='p-[30px]'>
                            <div className='flex flex-col sm:flex-row items-center justify-between'>
                                <div className='flex flex-col items-center sm:flex-row gap-[30px] sm:gap-[20px]'>
                                    <img src='avatar-1.png' className='w-[50px] h-[50px]' />
                                    <div className='flex flex-col items-center sm:items-start'>
                                        <h1 className='text-[#0B132A] text-[18px] font-semibold'>Viezh Robert</h1>
                                        <h3 className='text-[#4F5665] text-[14px] font-normal'>Warsaw, Poland</h3>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px] mt-2 sm:mt-0'>
                                    <h3 className='text-[#0B132A] text-[16px] font-normal leading-[30px]'>4.5</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M14.1891 6.41802L10.2219 5.84146L8.44844 2.24615C8.4 2.14771 8.32031 2.06802 8.22187 2.01959C7.975 1.89771 7.675 1.99927 7.55156 2.24615L5.77812 5.84146L1.81094 6.41802C1.70156 6.43365 1.60156 6.48521 1.525 6.56334C1.43244 6.65847 1.38143 6.78646 1.38319 6.91918C1.38495 7.0519 1.43933 7.1785 1.53437 7.27115L4.40469 10.0696L3.72656 14.0211C3.71066 14.1131 3.72083 14.2076 3.75592 14.294C3.79102 14.3805 3.84963 14.4554 3.92511 14.5102C4.00059 14.565 4.08992 14.5976 4.18297 14.6042C4.27602 14.6108 4.36907 14.5913 4.45156 14.5477L8 12.6821L11.5484 14.5477C11.6453 14.5993 11.7578 14.6165 11.8656 14.5977C12.1375 14.5508 12.3203 14.293 12.2734 14.0211L11.5953 10.0696L14.4656 7.27115C14.5437 7.19459 14.5953 7.09459 14.6109 6.98521C14.6531 6.71177 14.4625 6.45865 14.1891 6.41802Z" fill="#FEA250" />
                                    </svg>
                                </div>
                            </div>
                            <div className='mt-[10px]'>
                                <h2 className='text-[#0B132A] text-[16px] text-center sm:text-start font-normal leading-[30px] line-clamp-2 lg:line-clamp-4'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="navigation-buttons mt-10">
                    <button className="custom-prev">
                        <FaArrowLeft />
                    </button>
                    <button className="custom-next">
                        <FaArrowRight />
                    </button>
                </div>
            </Swiper>

        </div>
    )
}

export default Feedback