import React, { useState, useEffect } from 'react';

let navigation = [
    { name: 'HOME', href: '/', current: false},
    { name: 'APPLICATION', href: '/menu', current: false},
    { name: 'ABOUT US', href: '/about', current: false}
]

export const Header = () => {
  // Check the current page
  let currentPath = useLocation();

  return (
    <div>
        <header className="w-full h-24 z-30 fixed flex flex-row justify-between bg-[#373333]">
            <div className="text-white m-2 w-32">
                <img src={LOGO} />
            </div>
            <div className="relative my-8 mx-auto max-md:hidden">
                {navigation.map((item) => (
                    <Link
                        key={item.name} 
                        to={item.href} 
                        className='px-4 py-2 text-white hover:drop-shadow-lg'>
                        {item.name}
                    </Link>
                ))}
            </div>
        </header>
    </div>
  )
}