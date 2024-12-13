import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HighlightsSection = () => {
  const achievements = [
    { title: "10,000+ Alumni", description: "Join a growing network of professionals." },
    { title: "Global Partnerships", description: "Collaborations with industry leaders." },
    { title: "Award-Winning Programs", description: "Recognized for excellence in education." },
  ];

 

  

  return (
    <div className="highlights-section bg-gray-50 py-10 px-3 lg:px-[9%]">
      {/* Achievements */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 ">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="relative text-center p-4 border rounded-lg shadow-lg group overflow-hidden"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-[#85132c]">{item.title}</h3>
            {/* Description (Hidden initially, shown on hover) */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#85132c] bg-opacity-80 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-300">
              <p className="text-white text-sm px-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default HighlightsSection;
