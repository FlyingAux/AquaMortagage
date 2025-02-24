'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdCall } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='fixed h-20 w-full bg-customGreen text-white flex items-center justify-between px-6 md:px-12 lg:px-48 z-20'>

        <Link href={'/'} className='text-3xl font-bold tracking-wide'>Aqua</Link>

        <div className='hidden md:flex items-center gap-8'>
          <Link href={'#'} className='text-lg font-semibold'>Buy</Link>
          <Link href={'#'} className='text-lg font-semibold'>Refinance</Link>
          <Link href={'#'} className='text-lg font-semibold'>Rates</Link>
          <Link href={'#'} className='text-lg font-semibold'>Aqua+</Link>
          <Link href={'/about'} className='text-lg font-semibold'>About us</Link>
        </div>

        <div className='hidden md:flex items-center gap-6'>
          <Link href={'#'} className='text-xl border-white border-[1.5px] p-2 rounded-full flex items-center justify-center'>
            <IoMdCall />
          </Link>
          <Link href={'#'} className='text-lg font-semibold'>Sign in</Link>
          <Link href={'#'} className='text-lg bg-customGreen2 border-customGreen2 border-[1.5px] px-5 py-2 rounded-full'>
            Continue
          </Link>
        </div>

  
        <button className='md:hidden text-3xl' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-20 left-0 w-full bg-customGreen text-white flex flex-col items-center gap-5 py-6 md:hidden'>
          <Link href={'#'} className='text-lg font-semibold'>Buy</Link>
          <Link href={'#'} className='text-lg font-semibold'>Refinance</Link>
          <Link href={'#'} className='text-lg font-semibold'>Rates</Link>
          <Link href={'#'} className='text-lg font-semibold'>Aqua+</Link>
          <Link href={'/about'} className='text-lg font-semibold'>About us</Link>
          <Link href={'#'} className='text-xl border-white border-[1.5px] p-2 rounded-full flex items-center justify-center'>
            <IoMdCall />
          </Link>
          <Link href={'#'} className='text-lg font-semibold'>Sign in</Link>
          <Link href={'#'} className='text-lg bg-customGreen2 border-customGreen2 border-[1.5px] px-5 py-2 rounded-full'>
            Continue
          </Link>
        </div>
      )}
    </>
  )
}

export default Nav
