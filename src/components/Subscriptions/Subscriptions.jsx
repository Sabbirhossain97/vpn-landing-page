
function Subscriptions() {
    return (
        <div className='flex flex-col mx-auto justify-center bg-[#FAFAFA] mt-[80px] relative px-6 sm:px-10 xl:px-0'>
            <div className='max-w-6xl mx-auto mt-[80px]'>
                <div>
                    <h1 className='text-center text-[#0B132A] text-[35px] font-semibold leading-[50px]'>Choose Your Plan</h1>
                    <h3 className='text-center text-[#4F5665] text-[16px] font-normal leadning-[30px] mt-[20px]'>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</h3>
                </div>
                <div className='mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]'>
                    <div className='flex flex-col col-span-1 items-center bg-[#FFF] border-2 border-[#DDD]  rounded-[10px] md:w-[280px] xl:w-[330px]'>
                        <div className='flex flex-col flex-1 items-center justify-between'>
                            <div className='flex flex-col items-center'>
                                <div className='pt-[80px]'>
                                    <img src='/Free.png' />
                                </div>
                                <div className='mt-[30px]'>
                                    <h2 className='text-[18px] text-[#0B132A] font-semibold leading-[30px]'>Free Plan</h2>
                                </div>
                                <div className='mt-[30px]'>
                                    <ul>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Unlimited Bandwith</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Encrypted Connection</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>No Traffic Logs</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Works on All Devices</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pb-[30px] mt-[130px]'>
                                <div className='text-center flex flex-col gap-[20px]'>
                                    <h1 className='text-[#0B132A] text-[25px] font-semibold leading-[30px]'>Free</h1>
                                    <button className='py-[13px] px-[63px] text-[#F53838] text-[16px] font-bold leading-normal rounded-[50px] border-2 border-[#F53838]'>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-2 bg-[#FFF] border-[#DDD] rounded-[10px]'>
                        <div className='flex flex-col flex-1 items-center justify-between'>
                            <div className='flex flex-col items-center'>
                                <div className='pt-[80px]'>
                                    <img src='/Free.png' />
                                </div>
                                <div className='mt-[30px]'>
                                    <h2 className='text-[18px] text-[#0B132A] font-semibold leading-[30px]'>Standard Plan</h2>
                                </div>
                                <div className='mt-[30px]'>
                                    <ul>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Unlimited Bandwith</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Encrypted Connection</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>No Traffic Logs</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Works on All Devices</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Connect Anyware</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pb-[30px]'>
                                <div className='text-center flex flex-col gap-[20px]'>
                                    <h1 className='text-[#0B132A] text-[25px] font-semibold leading-[30px]'>$9 <span className='text-[#4F5665] font-normal'>/ mo</span></h1>
                                    <button className='py-[13px] px-[63px] text-[#F53838] text-[16px] font-bold leading-normal rounded-[50px] border-2 border-[#F53838]'>Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border-2 bg-[#FFF] border-[#F53838] rounded-[10px]'>
                        <div className='flex flex-col flex-1 items-center justify-between'>
                            <div className='flex flex-col items-center'>
                                <div className='pt-[80px]'>
                                    <img src='/Free.png' />
                                </div>
                                <div className='mt-[30px]'>
                                    <h2 className='text-[18px] text-[#0B132A] font-semibold leading-[30px]'>Premium Plan</h2>
                                </div>
                                <div className='mt-[30px]'>
                                    <ul>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Unlimited Bandwith</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Encrypted Connection</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>No Traffic Logs</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Works on All Devices</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Connect Anyware</h3>
                                        </li>
                                        <li className='flex items-center gap-[20px]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                                <path d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z" fill="#2FAB73" />
                                            </svg>
                                            <h3 className='text-[14px] text-[#4F5665] font-normal leading-[30px]'>Get New Features</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pb-[30px]'>
                                <div className='h-auto text-center flex flex-col gap-[20px]'>
                                    <h1 className='text-[#0B132A] text-[25px] font-semibold leading-[30px]'>$12 <span className='text-[#4F5665] font-normal'>/ mo</span></h1>
                                    <div className='relative'>
                                        <button className='py-[13px] relative z-10 px-[63px] bg-[#F53838] text-[#FFF] text-[16px] font-bold leading-normal rounded-[50px] border border-[#F53838]'>Select</button>
                                        <div className='absolute z-5 left-[27px] top-[10px] right-[27px] blur-[27px] -bottom-[27.5px] rounded-[60px] h-[60px] bg-[rgba(245,56,56,0.3)]'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions