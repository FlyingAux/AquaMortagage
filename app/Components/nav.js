'use client'
import React from 'react'
import Link from 'next/link'
import { IoMdCall } from "react-icons/io";

const Nav = () => {
  return (
    <>
        <div className='fixed h-20 w-full bg-customGreen text-white flex items-center justify-center z-20 overflow-hidden'>
            <div className='left w-[75%] h-[100%] px-48 items-center justify-start flex gap-14'>
                <Link href={'/'} className='text-3xl font-bold leading-3 tracking-wide'>Aqua</Link>
                <h1 className='text-xl font-semibold '>Buy</h1>
                <h1 className='text-xl font-semibold '>Refinance</h1>
                <h1 className='text-xl font-semibold '>Rates</h1>
                <h1 className='text-xl font-semibold '>Aqua+</h1>
                <Link href={'/about'} className='text-xl font-semibold'>About us</Link>
            </div>
            <div className='right w-[50%] h-[100%]  px-52 items-center justify-end flex gap-14'>
                <Link href={''} className='text-xl font-semibold border-white border-[1.5px] flex items-center justify-center px-3 py-3 rounded-full'><IoMdCall /></Link>
                <h1 className='text-xl font-semibold'>Sign in</h1>
                <Link href={''} className='text-lg tracking-wide border-customGreen2 bg-customGreen2 border-[1.5px] flex items-center justify-center px-5 py-3 rounded-full'>Continue</Link>
            </div>
        </div>
    </>
  )
}

export default Nav