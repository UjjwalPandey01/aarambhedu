import React from "react";
import HighlyDemandedCoursesSlider from '../about/HighlyDemanding';
import CourseCorosol from '../about/CourseCorosol';
import SideStudentSay from '../about/SideStudentSay';

const partners = [
  {
    name: "Adup Media LLC",
    description:
      "Our partners are the top companies in their own respective industries, and are known to deliver high-quality services and products. Our partners help us deliver unparalleled services to our clients.",
    tagline: "Media & Marketing Consulting",
    location: "Walnut Creek, CA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEln7S7CwLD1MGIL0lzUfEVOqPL9a7arw6A&s", // Replace with actual image URLs
  },
  {
    name: "Aramiz Company",
    description:
      "We aren’t such an agile and dependable organization just because of our own team; we also have a fantastic network of partners who complement our services and allow us to work harder, better, faster, and stronger.",
    tagline: "Athletic Performance Tracking Devices",
    location: "Escondido, CA",
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Replace with actual image URLs
  },
  {
    name: "Adup Media LLC",
    description:
      "Our partners are the top companies in their own respective industries, and are known to deliver high-quality services and products. Our partners help us deliver unparalleled services to our clients.",
    tagline: "Media & Marketing Consulting",
    location: "Walnut Creek, CA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStEln7S7CwLD1MGIL0lzUfEVOqPL9a7arw6A&s", // Replace with actual image URLs
  },
];

const Partners = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold ">Our Partners</h1>
        </div>
      </header>

      <div className="bg-gray-50 min-h-screen px-6 lg:px-[9%] md:[8%]">
        {/* Main Content */}
        <div className="container mx-auto  py-10 grid md:grid-cols-4 gap-8">
          {/* Partners List */}
          <main className="col-span-3 space-y-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-start p-6"
              >
                {/* Logo */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-32 object-cover rounded-lg mr-6"
                />

                {/* Details */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {partner.name}
                  </h2>
                  <p className="text-gray-500 italic">{partner.tagline}</p>
                  <p className="text-gray-500">{partner.location}</p>
                  <hr />
                  <p className="text-gray-700 mt-4">{partner.description}</p>
                </div>
              </div>
            ))}
          </main>

          {/* Sidebar */}
          <aside className="hidden md:block sm:block col-span-1">
            <div className="flex items-center bg-white shadow-lg justify-center">
              <div className="rounded-lg p-6 w-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Interested in our courses? Share your details and we'll get
                  back to you.
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
                    <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]">
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

            {/* Demanding Courses */}
            <HighlyDemandedCoursesSlider />

            {/* Course Slider */}
            <CourseCorosol />

            {/* Student Feedback */}
            <SideStudentSay />

            {/* Contact Page */}
            <div className="bg-[#85132c] text-white rounded-lg mt-14 p-6">
              <h3 className="text-xl font-semibold mb-4">
                How can we help you?
              </h3>
              <p>
                Contact us at the consulting WP office nearest to you or submit
                a business inquiry online.
              </p>
              <button className="bg-white rounded-lg text-gray-600 p-2 mt-4 font-bold">
                Contact Us
              </button>
            </div>
          </aside>
        </div>

        {/* Mobile Sidebar (visible at the bottom) */}
        <div className="md:hidden block mt-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Interested in our courses? Share your details and we'll get
              back to you.
            </h2>
            <form className="space-y-4 text-black">
              {/* Form Inputs */}
              <input
                type="text"
                placeholder="Enter your name*"
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                required
              />
              <input
                type="email"
                placeholder="yourname@email.com*"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                required
              />
              <div className="flex space-x-2">
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter mobile number*"
                  className="flex-1 px-4 py-2 border w-full border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                  required
                />
              </div>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                required
              >
                <option value="" disabled selected>
                  Select course*
                </option>
              </select>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#85132c]"
                required
              >
                <option value="" disabled selected>
                  Select institution*
                </option>
              </select>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-[#85132c] border-gray-300 rounded focus:ring-[#85132c]"
                  required
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                  I authorize Aarambh Eduversity and its associates to contact me
                  with updates & notifications via email, SMS, WhatsApp, and voice
                  call.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#85132c] text-white rounded-md hover:bg-[#85130c] transition"
              >
                Enroll Now
              </button>
            </form>
          </div>

          {/* Mobile-specific Content */}
          <HighlyDemandedCoursesSlider />
          <CourseCorosol />
          <SideStudentSay />
        </div>
      </div>
    </>
  );
};

export default Partners;
