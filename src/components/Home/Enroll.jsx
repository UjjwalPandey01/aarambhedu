import React from "react";

function EnrollmentForm() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
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
  );
}

export default EnrollmentForm;
