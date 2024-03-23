import { BellIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export const Sidebar = () => {
    return (
        <div className="w-[354px] h-full absolute left-0 top-[72px] flex border-r">
            <div className="w-[72px] h-full bg-blue-999 flex flex-col justify-between items-center ">
                <div className="flex flex-col items-center justify-start gap-8 pt-8">
                    <BellIcon className="h-10 w-10 text-gray-500 p-1 rounded hover:bg-white/30 duration-100 delay-100" />
                    <BellIcon className="h-10 w-10 text-gray-500 p-1 rounded hover:bg-white/30 duration-100 delay-100" />
                    <BellIcon className="h-10 w-10 text-gray-500 p-1 rounded hover:bg-white/30 duration-100 delay-100" />
                    <BellIcon className="h-10 w-10 text-gray-500 p-1 rounded hover:bg-white/30 duration-100 delay-100" />
                </div>
        
                <div className="rounded-full h-8 w-8">
                    <Image className="rounded-full" src="/image1.png" alt="Profile" width={25} height={25} />
                </div>
            </div>
            <div className="bg-white w-[288px] h-full">
                {/* Content of the sidebar goes here */}
            </div>
        </div>
    );
}
