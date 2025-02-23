import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <>
        <div className='min-h-screen w-full border-t-gray-400 border-[1px]'>
            <div className='flex w-full h-[80vh] items-start justify-center py-16 gap-2'>
                <div className='flex flex-col h-[70%] items-start ml-24 text-left gap-4 w-[40%]'>
                    <h1 className='text-3xl font-bold text-customGreen2'>Aqua</h1>
                    <h1 className=''>Aqua is a family of companies serving all your homeownership needs.</h1>
                    <h1 className='text-xl font-semibold text-gray-400'><span className='font-bold text-customGreen2 text-xl'>Aqua</span> Mortgage</h1>
                    <h1 className=''>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</h1>
                    <h1 className='text-xl font-semibold text-gray-400'><span className='font-bold text-customGreen2 text-xl'>Aqua</span> Real state</h1>
                    <h1 className=''>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</h1>
                    <h1 className='text-xl font-semibold text-gray-400'><span className='font-bold text-customGreen2 text-xl'>Aqua</span> Cover</h1>
                    <h1 className=''>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</h1>
                    <h1 className='text-xl font-semibold text-gray-400'><span className='font-bold text-customGreen2 text-xl'>Aqua</span> Inspect</h1>
                    <h1 className=''>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</h1>
                    <h1 className='text-xl font-semibold text-gray-400'><span className='font-bold text-customGreen2 text-xl'>Aqua</span> Settlement Service</h1>
                    <h1 className=''>Get transparent rates when you shop for title insurance all in one convenient place.</h1>
                </div>

                <div className='flex flex-col h-[70%] items-start ml-24 text-left w-[20%] gap-4'>
                    <h1 className='text-xl font-bold'>Resources</h1>
                    <h1 className=''>Home affordability calculator</h1>
                    <h1 className=''>Mortgage calculator</h1>
                    <h1 className=''>Free mortgage calculator</h1>
                    <h1 className=''>Mortgage calculator with taxes</h1>
                    <h1 className=''>Mortgage calculator with PMI</h1>
                    <h1 className=''>Rent vs buy calculator</h1>
                    <h1 className=''>HELOC payment calculator</h1>
                    <h1 className=''>HELOC vs cash-out refinance calculator</h1>
                    <h1 className=''>Buy a home</h1>
                    <h1 className=''>Sell a home</h1>
                    <h1 className=''>Get home inspection</h1>
                </div>

                <div className='flex flex-col h-[70%] items-start ml-24 text-left w-[20%] gap-4'>
                    <h1 className='text-xl font-bold'>Company</h1>
                    <h1 className=''>About Us</h1>
                    <h1 className=''>Careers</h1>
                    <h1 className=''>Media</h1>
                    <h1 className=''>Partner With Us</h1>
                    <h1 className=''>Learning center</h1>
                    <h1 className=''>FAQs</h1>
                    <h1 className=''>Investor Relations</h1>
                </div>

                <div className='flex flex-col h-[70%] items-start ml-24 text-left w-[20%] gap-4'>
                    <h1 className='text-xl font-bold'>Contact Us</h1>
                    <h1 className=''>hello@aqua.com</h1>
                    <h1 className=''>516-634-9948</h1>
                    <h1 className=''>FAQ</h1>
                    <h1 className=''>Glossary</h1>
                    <h1 className='text-xl font-bold'>Legal</h1>
                    <h1 className=''>NMLS Consumer Access</h1>
                    <h1 className=''>Privacy Policy</h1>
                    <h1 className=''>Terms of Use</h1>
                    <h1 className=''>Disclosures & Licensing</h1>
                    <h1 className=''>Affiliated Business</h1>
                    <h1 className=''>Browser Disclaimer</h1>
                </div>
            </div>


            <div className='h-[20vh] w-full text-3xl flex gap-3 items-end justify-start'>
                <div className='flex gap-3 ml-28 mb-16'> 
                    <FaInstagram />
                    <LuFacebook />
                    <LuLinkedin />
                </div>
            </div>


            <div className='flex items-start justify-center h-[30vh] w-full px-28'>
                <h1 className='flex flex-col text-[1.5vh] tracking-tight'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue. Pellentesque eget tempor justo. Mauris sit amet ex diam. Proin purus arcu, vestibulum quis ultricies commodo, finibus sit amet leo. Donec ac tellus a sem aliquam tincidunt sit amet sit amet quam. Fusce sed nisi sagittis, rutrum lacus a, elementum nisi. Nulla tempus, eros id efficitur gravida, magna orci laoreet arcu, a vehicula magna leo et orci. Sed faucibus laoreet vulputate. Donec euismod nulla sit amet ligula vehicula, ac porttitor augue volutpat. Vivamus interdum purus vel blandit finibus.</span>
                    <br/>
                    <span>Morbi quis porta lorem. Aenean tincidunt tempus tellus a pulvinar. Vestibulum nunc lorem, venenatis et diam sed, mollis consequat diam. Nulla et metus augue. Aliquam augue purus, consequat nec fringilla nec, tempor vel lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur in ultricies ex, non tincidunt erat. Nulla dolor ante, rhoncus at iaculis ac, posuere vel lectus. Fusce massa massa, viverra at rhoncus id, tempus quis mi. Donec non dui consectetur, volutpat turpis tempor, blandit ante. Nunc ut turpis non ante tincidunt vestibulum id in ligula.</span>
                    <br/>
                    <span>Duis et libero quam. Fusce dui velit, egestas a varius et, consequat vitae sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi lacinia est sed porttitor tristique. Mauris gravida, libero ac aliquet facilisis, felis lorem sollicitudin neque, at convallis velit elit et neque. Suspendisse potenti. Praesent ac suscipit ex, nec bibendum ligula. Morbi ut arcu urna.</span>
                </h1>
            </div>


            <div className='h-[80vh] w-full flex items-start justify-center'>
                <div className='h-[90%] w-[90%] border-t-gray-400 border-t-[1px] py-14'>
                    <h1 className='flex flex-col text-[1.5vh] tracking-tight'>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue. Pellentesque eget tempor justo. Mauris sit amet ex diam. Proin purus arcu, vestibulum quis ultricies commodo, finibus sit amet leo. Donec ac tellus a sem aliquam tincidunt sit amet sit amet quam. Fusce sed nisi sagittis, rutrum lacus a, elementum nisi. Nulla tempus, eros id efficitur gravida, magna orci laoreet arcu, a vehicula magna leo et orci. Sed faucibus laoreet vulputate. Donec euismod nulla sit amet ligula vehicula, ac porttitor augue volutpat. Vivamus interdum purus vel blandit finibus.</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue. Pellentesque eget tempor justo. Mauris sit amet ex diam. Proin purus arcu, vestibulum quis ultricies commodo, finibus sit amet leo. Donec ac tellus a sem aliquam tincidunt sit amet sit amet quam. Fusce sed nisi sagittis, rutrum lacus a, elementum nisi. Nulla tempus, eros id efficitur gravida, magna orci laoreet arcu, a vehicula magna leo et orci. Sed faucibus laoreet vulputate. Donec euismod nulla sit amet ligula vehicula, ac porttitor augue volutpat. Vivamus interdum purus vel blandit finibus.</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue. Pellentesque eget tempor justo. Mauris sit amet ex diam. Proin purus arcu, vestibulum quis ultricies commodo, finibus sit amet leo. Donec ac tellus a sem aliquam tincidunt sit amet sit amet quam. Fusce sed nisi sagittis, rutrum lacus a, elementum nisi. Nulla tempus, eros id efficitur gravida, magna orci laoreet arcu, a vehicula magna leo et orci. Sed faucibus laoreet vulputate. Donec euismod nulla sit amet ligula vehicula, ac porttitor augue volutpat. Vivamus interdum purus vel blandit finibus.</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque eget tempor justo</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.</span>
                        <br/>
                        <span className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.Pellentesque</span>
                        <br/>
                        <span className=''>Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</span>
                    </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer