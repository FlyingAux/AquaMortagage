'use client'
import React from 'react'
import Link from 'next/link'
import { MdOutlineTimer } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import ReviewCard from './Components/Reviews';
import { IoStarSharp } from "react-icons/io5";
import Footer from './Components/Footer';

const Page = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-customGreen flex flex-col items-center justify-center relative text-center">
        
        <img 
          src="https://media.better.com/better-com/homepage/hero-variant-c.webp" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70%] w-auto object-cover max-w-full"
          alt="Mortgage Banner"
        />

        <h1 className="absolute top-[30%] w-full text-4xl md:text-6xl lg:text-8xl font-bold text-customGreen2 leading-tight px-4">
          Mortgage calculation <br className='hidden md:block'/> made simple
        </h1>

        <div className="absolute bottom-10 flex flex-wrap justify-center gap-6 md:gap-16 px-4">

          <div className="flex flex-col items-center">
            <Link 
              href="/start" 
              className="text-lg border-customGreen2 bg-customGreen2 border-[1.5px] px-6 md:px-8 py-3 rounded-full transition-all hover:bg-opacity-80"
            >
              Start Calculating
            </Link>
            <h1 className="text-white flex items-center gap-1 mt-2 text-sm md:text-base">
              <MdOutlineTimer /> 3 min | Hassle Free
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center text-yellow-400 text-2xl md:text-3xl gap-1">
              <FcGoogle />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarFullOutline />
              <TiStarHalfOutline />
            </div>
            <h1 className="text-white text-sm md:text-base mt-1">
              4.6 stars | 3177 Google reviews
            </h1>
          </div>

        </div>
      </div>

      <div className="min-h-screen w-full bg-white flex flex-wrap">

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <ReviewCard />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-6 md:px-10 gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold">
            Find out why <br className='hidden md:block'/> we’re better.
          </h1>
          <div className="flex flex-col gap-3">
            <Link 
              href="/" 
              className="border-customGreen2 bg-customGreen2 border-[1.5px] px-5 py-3 rounded-full text-lg md:text-xl transition-all hover:bg-opacity-80"
            >
              See all our stories
            </Link>
            <h1 className="flex items-center gap-2 text-sm md:text-lg">
              <IoStarSharp className="text-yellow-400" /> 
              <span className="font-semibold">Trustpilot Excellent 4.4</span> out of 5
            </h1>
          </div>
        </div>
        
      </div>

      <Footer />
    </>
  )
}

export default Page;
