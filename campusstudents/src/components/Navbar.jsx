"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navbar() {
    const navLink = [{ href: '/students', label: 'Students' }, { href: '/departments', label: 'Departments' }, { href: '/about', label: 'About' }]
    const pathname = usePathname()
    return (
        <nav className='flex py-3.5 pt-4 flex-row items-center justify-around gap-90 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]'>
            <div className='flex  flex-row gap-9 items-center justify-center '>
                <Link className='text-2xl font-semibold' href='/'>Campus Directory</Link>
                {navLink &&
                    navLink.map((i) => (
                        <Link key={i.href} className={i.href === pathname ? 'text-blue-600 font-bold border-b-2 border-amber-400 pb-1' : "text-gray-700 hover:text-blue-600 border-b-2 border-transparent pb-1"} href={i.href}>{i.label}</Link>

                    ))
                }
            </div>
            <button className=' py-2 px-4 pt-1.5 text-1xl [box-shadow:rgba(0,0,0,0.05)_0px_0px_0px_1px,rgb(209,213,219)_0px_0px_0px_1px_inset] cursor-pointer ' >Frontend Practice</button>
        </nav>
    )
}

