
import React from "react";
import CoreValues from "./CoreValues";
import VisionMision from "./Vision_Mission";

import Marquee from "react-fast-marquee";
import SideStudentSay from "./SideStudentSay";
import HighlyDemandedCoursesSlider from "./HighlyDemanding";
import CourseCorosol from '../about/CourseCorosol'

const About_eduversity = () => {
  

  

  

 

  const videoAboutEduversity = {
    videoUrl: "https://www.youtube.com/embed/UIDwl_kP2MU", // Replace with your actual video ID
    description: "Hear from our alumni about Aarambh Eduversity.",
  };

  return (
    <>
       {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container  mx-auto ">
          <h1 className="text-3xl font-bold">About Us</h1>
         
        </div>
      </header>

      {/* section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-[9%] md:[8%]">
        <div className="container   ">
          {/* About Eduversity Section */}
          <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-8 ">
            {/* Brief Introduction */}
            <div className="bg-white lg:w-[65] w-full shadow-lg rounded-lg p-6 transition-transform transform">
              <h3 className="font-semibold text-lg text-[#85132c]">Brief Introduction to Aarambh Eduversity</h3>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                incidunt eos aliquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tempore incidunt eos aliquam.
              </p>
            </div>
            {/* <VideoSection/> */}
            {/* Video About Eduversity */}
            <div className="bg-white  w-full lg:w-2/6 ">
              <div className="relative" style={{ paddingTop: "60.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={videoAboutEduversity.videoUrl}
                  title="About Eduversity Video"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
            </div>
           
          </div>

          {/* Vision, Mission, and Core Values */}
          <div className="flex flex-col lg:flex-row justify-between my-8 space-y-6 lg:space-y-0  space-x-1  ">
            <div className="w-full lg:w-[65%]">
              <VisionMision />
              <CoreValues />
              {/* Marquee Section */}
              <div className="mt-8">
                <Marquee>
                  {[
                    "ada.jpg",
                    "allstate.jpg",
                    "amazon.jpg",
                    "anz.jpg",
                    "carvoviant.jpg",
                    "delhivery.jpg",
                    "deloitte.jpg",
                    "dhira.jpg",
                    "statxo.jpg",
                    "volvo.jpg",
                    "tata.jpg",
                    "techMahindra.jpg",
                    "pepsico.jpg",
                    "paypal.jpg",
                    "no broker.jpg",
                    "muthoot.jpg",
                    "mygate.jpg",
                    "multiplier.jpg",
                    "maveric.jpg",
                    "labvantage.jpg",
                    "kpmg.jpg",
                    "jws.jpg",
                    "jio.jpg",
                    "insurancedekho.jpg",
                    "genpect.jpg",
                    "gainars.jpg",
                  ].map((img, index) => (
                    <img
                      key={index}
                      src={`/images/${img}`}
                      alt={img.split(".")[0]}
                      className="h-20 object-contain px-6"
                    />
                  ))}
                </Marquee>
              </div>
            </div>
            {/* right side start */}
           
            {/* Enrollment Form */}
            <div className="w-full lg:w-[34%]">
              <div className="flex items-center justify-center  ">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Interested in our courses? Share your details and we'll get back to you.
                  </h2>
                  <form className="space-y-4 text-black">
                    {/* Name Input */}
                    <input
                      type="text"
                      placeholder="Enter your name*"
                      className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                      required
                    />

                    {/* Email Input */}
                    <input
                      type="email"
                      placeholder="yourname@email.com*"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                      required
                    />

                    {/* Phone Input */}
                    <div className="flex space-x-2">
                      <select
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                      >
                        <option value="+91">+91</option>
                        {/* Add other country codes as needed */}
                      </select>
                      <input
                        type="tel"
                        placeholder="Enter mobile number*"
                        className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                        required
                      />
                    </div>

                    {/* Course Select */}
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                      required
                    >
                      <option value="" disabled selected>
                        Select course*
                      </option>
                      {/* Add course options */}
                    </select>

                    {/* Institution Select */}
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                      required
                    >
                      <option value="" disabled selected>
                        Select institution*
                      </option>
                      {/* Add institution options */}
                    </select>

                    {/* Checkbox */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        className="h-4 w-4 text-[#85132c] border-gray-300 rounded focus:ring-[#85132c]"
                        required
                      />
                      <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                        I authorize Aarambh Eduversity and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-[#85132c] text-white rounded-md hover:bg-[#85130c] transition"
                    >
                      Enroll Now
                    </button>
                  </form>
                </div>
              </div>
              <HighlyDemandedCoursesSlider/>
              <CourseCorosol/>
                  {/* students says */}
           <SideStudentSay/>
                  {/* students says end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_eduversity;
