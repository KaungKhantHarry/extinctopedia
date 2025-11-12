"use client"

import Link from 'next/link'
import { ThemeToggleButton } from '../../../common/ThemeToggleButton'
import { usePathname } from 'next/navigation';

const navBarItems = [
    { name: "Home", link: "/"},
    { name: "Sepcies", link: "/species"},
    { name: "Endangered", link: "/endangered"},
    { name: "Favorites", link: "/favorites"}
];

const NavBar = () => {

    const pathname = usePathname();

    return (
        <nav className='fixed w-full h-[150px] flex flex-col justify-center px-7 bg-gray-100 dark:bg-gray-800 z-50'>
            <div className='h-14 w-auto flex justify-between items-center'>
                <div>
                    <Link href="/" className='font-medium text-4xl text-black dark:text-white'>
                        Extinctopedia
                    </Link>
                </div>
                <div className='w-2xl'>
                    <div className="relative mt-2">
                        <input
                        type="text"
                        className="w-full placeholder:text-slate-800 dark:placeholder:text-slate-300 text-slate-700 text-sm border border-slate-700 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Search Extinct Animals......." />
                        <button className="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd"></path>
                            </svg>
                        </button> 
                    </div>   
                </div>
                <div>
                    <ThemeToggleButton />
                </div>
            </div>
            <hr className='border-gray-800 dark:border-gray-300 my-2'/>
            <div className='h-14 flex justify-start gap-10 items-center'>
                {navBarItems.map(item => (
                    <Link href={item.link} key={item.name}
                        className={`font-medium text-xl hover:text-gray-700 hover:dark:text-gray-300
                                    ${pathname === item.link ? 
                                    "border-b-2 border-gray-600 dark:border-gray-300" : 
                                    ""}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default NavBar
