import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
export const Header = () => {
    return (
        <div className="absolute top-0 w-full h-[72px] bg-white flex justify-between items-center border-b">
            <div className="h-full w-full flex items-center">
             <Image src="/karga.png" alt="karga" height={156} width={182}/>
            </div>
            <div className='w-[150px] h-full flex gap-2 items-center'>
                <BellIcon className="h-6 w-6 text-gray-500" />
                <BellIcon className="h-6 w-6 text-gray-500" />
                <Image src="/image1.png" alt="25" height={30} width={50}/>
            </div>
        </div>
        )
}