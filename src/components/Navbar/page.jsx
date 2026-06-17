'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarPage = () => {
    const pathName = usePathname();
    const links = <>
        <li><Link className={pathName === '/'? 'bg-green-900': ''} href='/'>Home </Link></li>
        <li><Link  className={pathName === '/Menu'? 'bg-green-900': ''} href='/Menu'>Menu</Link></li>
        <li><Link  className={pathName === '/about'? 'bg-green-900': ''} href='/about'>About</Link></li>
        <li><Link className={pathName === '/gallery'? 'bg-green-900': ''} href='/gallery'>Gallery</Link></li>
        <li><Link className={pathName === '/contact'? 'bg-green-900': ''} href='/contact'>Contact</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}

                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image
                            src={'/logo.png'}
                            alt='logo'
                            width={100}
                            height={80}
                        ></Image></Link>

                </div>
                <div className=" navbar-center hidden lg:flex">
                    <ul className="flex menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link  href={'/booktable'}><button className="btn bg-green-900">Book a Table</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;