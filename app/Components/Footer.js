import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { LuFacebook, LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-400 bg-white">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-24 py-16">

        <div>
          <h1 className="text-3xl font-bold text-customGreen2">Aqua</h1>
          <p className="text-gray-700 mt-4">Aqua is a family of companies serving all your homeownership needs.</p>

          {["Mortgage", "Real Estate", "Cover", "Inspect", "Settlement Service"].map((section, index) => (
            <div key={index} className="mt-6">
              <h2 className="text-lg font-semibold text-gray-400">
                <span className="font-bold text-customGreen2">Aqua</span> {section}
              </h2>
              <p className="text-gray-700 text-sm">
                {section === "Mortgage" && "We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support."}
                {section === "Real Estate" && "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save."}
                {section === "Cover" && "Shop, bundle, and save on insurance coverage for home, auto, life, and more."}
                {section === "Inspect" && "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee."}
                {section === "Settlement Service" && "Get transparent rates when you shop for title insurance all in one convenient place."}
              </p>
            </div>
          ))}
        </div>


        <div>
          <h1 className="text-xl font-bold">Resources</h1>
          {["Home affordability calculator", "Mortgage calculator", "Rent vs buy calculator", "HELOC payment calculator", "Buy a home", "Sell a home", "Get home inspection"].map((item, index) => (
            <p key={index} className="text-gray-700 mt-2 text-sm">{item}</p>
          ))}
        </div>


        <div>
          <h1 className="text-xl font-bold">Company</h1>
          {["About Us", "Careers", "Media", "Partner With Us", "Learning center", "FAQs", "Investor Relations"].map((item, index) => (
            <p key={index} className="text-gray-700 mt-2 text-sm">{item}</p>
          ))}
        </div>


        <div>
          <h1 className="text-xl font-bold">Contact Us</h1>
          <p className="text-gray-700 mt-2 text-sm">hello@aqua.com</p>
          <p className="text-gray-700 mt-2 text-sm">516-634-9948</p>
          <h1 className="text-xl font-bold mt-6">Legal</h1>
          {["NMLS Consumer Access", "Privacy Policy", "Terms of Use", "Disclosures & Licensing", "Affiliated Business", "Browser Disclaimer"].map((item, index) => (
            <p key={index} className="text-gray-700 mt-2 text-sm">{item}</p>
          ))}
        </div>
      </div>

  
      <div className="flex justify-center items-center gap-6 text-2xl py-6 border-t border-gray-300">
        <FaInstagram className="cursor-pointer hover:text-gray-600" />
        <LuFacebook className="cursor-pointer hover:text-gray-600" />
        <LuLinkedin className="cursor-pointer hover:text-gray-600" />
      </div>

      {/* Terms & Legal Info */}
      <div className="px-6 md:px-12 lg:px-24 py-10 text-gray-600 text-sm text-center border-t border-gray-300">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec risus vitae nunc sagittis viverra id in augue.</p>
        <p className="mt-2">Pellentesque eget tempor justo. Mauris sit amet ex diam. Proin purus arcu, vestibulum quis ultricies commodo.</p>
        <p className="mt-4">Any unauthorized use of any proprietary or intellectual property is strictly prohibited.</p>
      </div>
    </div>
  );
};

export default Footer;
