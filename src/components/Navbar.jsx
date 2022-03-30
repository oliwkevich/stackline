import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }; 

    return ( 
        <div className='w-full h-[90px] bg-black'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-[#00d8ff]'>STACKLINE</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white'>
                        <li>Домашня</li>
                        <li>Про Сайт</li>
                        <button className='mx-7'>Увійти</button>
                    </ul>
                </div>
                <div onClick={handleClick} className='block md:hidden'>
                    {!nav ? <MenuIcon className='w-6 text-white'/> : <XIcon className='w-6 text-white'/>}                    
                </div>
                <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 h-screen flex justify-center text-center' : 'absolute top-[-100%]'}>
                    <ul>
                        <li className='text-xl'>Домашня</li>
                        <li className='text-xl'>Про Сайт</li>
                        <button className='m-4 px-24'>Увійти</button>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;