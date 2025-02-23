import React from 'react'
import Footer from '../Components/Footer'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        {/* Mission Section */}
        <div className="h-screen flex flex-col items-center justify-center text-center gap-6 px-6">
          <h1 className="text-4xl font-semibold text-green-600">Our Mission</h1>
          <h1 className="font-semibold text-4xl md:text-5xl leading-relaxed">
            We’re making homeownership simpler, faster — <br className="hidden md:block" />
            and most importantly, more accessible for all Americans.
          </h1>
        </div>

        {/* Status Quo Section */}
        <div className="flex flex-wrap items-center justify-center gap-16 px-8 py-12">
          {/* Text Content */}
          <div className="max-w-lg flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">The status quo is broken</h1>
            <p className="text-lg tracking-tight text-gray-600 leading-relaxed">
              The traditional processes around homeownership are opaque and stressful.
              Fees aren’t transparent and some are simply outrageous in size.
              Traditional mortgage lending is rife with unnecessary fees and slow, painful processes.
              It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <Link href={''}>
              <span className="inline-block py-4 px-8 rounded-lg bg-green-600 text-lg text-white font-semibold hover:bg-green-800 transition-all">
                Read Vishal's Story
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="w-[90%] md:w-[50vh] flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1637913754840-3c8755479fdd?w=500&auto=format&fit=crop&q=60"
              alt="CEO Vishal Garg"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Change Section */}
        <div className="h-auto md:h-96 w-full bg-green-700 flex items-center justify-center text-white px-6 py-10">
          <div className="max-w-4xl text-center flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-semibold">How we’re changing things</h1>
            <p className="text-lg leading-relaxed font-light">
              Homeownership is a huge part of our economy. Housing overall is a $33 trillion business,
              and mortgages account for $15 trillion. Yet home finance operates in the same way it has
              for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
            </p>
            <p className="text-lg leading-relaxed font-light">
              That’s why Better.com is redefining the homeownership process from the ground up.
              We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default AboutPage
