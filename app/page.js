'use client'
import React from 'react'
import Link from 'next/link'
import { MdOutlineTimer } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import ReviewCard from './Components/Reviews';
import { IoStarSharp } from "react-icons/io5";
import Footer from './Components/Footer';
const page = () => {
  return (
    <>
      <div className='section-1 min-h-screen w-full bg-customGreen'>
        <div className='relative h-screen w-full'>
          <div className='h-[100%] flex items-center justify-center gap-[60vh] relative overflow-hidden'>
            <img src='https://media.better.com/better-com/homepage/hero-variant-c.webp' className='h-[70%] absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2'/>
            <div className='min-h-10 min-w-40  mt-96 flex flex-col items-center justify-center gap-1 mr-10'>
              <Link href={'/start'} className='text-lg tracking-wide border-customGreen2 bg-customGreen2 border-[1.5px] flex items-center justify-center px-8 py-3 rounded-full'>Start Calculating</Link>
              <h1 className='flex items-center justify-center gap-1 text-white mt-1'><MdOutlineTimer /> 3 min | Hassel Free</h1>
            </div>
            <div className='min-h-10 min-w-40 mt-96 flex flex-col items-center justify-center gap-1 mr-10'>
              <div className='flex items-center justify-center text-yellow-400 text-3xl gap-1'>
              <FcGoogle />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarHalfOutline />
              </div>
              <h1 className='flex items-center text-[14px] justify-center gap-1 text-white'>4.6 stars | 3177 Google reviews</h1>
            </div>
          </div>
          <h1 className='text-8xl tracking-wide leading-[12vh] w-full text-center text-customGreen2 font-bold absolute -translate-x-1/2 -translate-y-1/2 top-[35%] left-1/2'>Mortgage calculation <br/> made simple</h1>
        </div>
      </div>

      
      <div className='h-screen w-full bg-white flex'>
        <div className='Review-left h-[100%] w-[50%] flex items-center justify-center'>
          <ReviewCard></ReviewCard>
        </div>
        <div className='Review-right h-[100%] w-[50%] flex items-start justify-center px-10 flex-col gap-10'>
          <h1 className='text-8xl tracking-wide font-semibold'>Find out why <br/> we’re better.</h1>
          <div className='flex flex-col gap-3 items-start justify-center '>
            <Link href={''} className='border-customGreen2 bg-customGreen2 border-[1.5px] flex items-center justify-center px-5 py-3 rounded-full text-xl'>see all our stories</Link>
            <h1 className='flex items-center justify-center gap-1'><IoStarSharp /> <span className='font-semibold'>Trustpilot Excellent 4.4 </span> out of 5</h1>
          </div>
        </div>
      </div>


    <Footer></Footer>
    </>
  )
}

export default page