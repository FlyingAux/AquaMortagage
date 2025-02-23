import React from 'react'
import Footer from '../Components/Footer'
import { PiCalculatorLight } from "react-icons/pi";
import { FaMobileAlt } from "react-icons/fa";
import { TbCirclePercentage } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from 'next/link';

const MortgageLanding = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        {/* Header Section */}
        <div className="h-1/6 flex items-end justify-center">
          <div className="bg-gray-300 h-[2%] rounded-full w-[50%] flex items-center justify-center">
            <div className="h-12 w-12 rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://plus.unsplash.com/premium_photo-1666789257633-900f9dfc227d?w=500&auto=format&fit=crop&q=60"
                className="h-full w-full object-cover" 
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-5/6 flex flex-col items-center justify-start py-24 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
            Hi, I'm Aquarious! <br /> Let's calculate your mortgage.
          </h1>

          {/* Mortgage Calculator Button */}
          <div className="mt-10">
            <Link 
              href="/mortgage" 
              className="flex items-center gap-3 px-8 py-4 text-xl font-semibold rounded-lg border-2 border-gray-500 hover:border-green-800 hover:text-green-900 transition-all"
            >
              <span className="text-5xl text-green-700"><PiCalculatorLight /></span> 
              Calculate your mortgage
            </Link>
          </div>     

          {/* Stats Section */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 max-w-3xl">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">$100B</h1>
              <p className="text-lg text-gray-600">home loans funded entirely online</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold">400K</h1>
              <p className="text-lg text-gray-600">Customers who chose a Better Mortgage</p>
            </div>
          </div>

          {/* Unlock Benefits Section */}
          <div className="mt-8 bg-green-100 rounded-lg p-6 max-w-lg text-lg flex flex-col items-center gap-4 shadow-lg">
            <h1 className="font-semibold">After a few questions, you'll unlock:</h1>
            <div className="flex flex-col gap-2 text-left">
              <p className="flex items-center gap-2"><TbCirclePercentage className="text-green-600 text-xl" /> Personalized interest rates</p>    
              <p className="flex items-center gap-2"><RiMoneyDollarCircleLine className="text-green-600 text-xl" /> Exclusive offers</p> 
              <p className="flex items-center gap-2"><FaMobileAlt className="text-green-600 text-xl" /> A personalized dashboard</p>    
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default MortgageLanding;
