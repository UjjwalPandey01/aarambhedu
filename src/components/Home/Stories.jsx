import React, { useState, useRef } from "react";

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const videos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1", // Replace with actual YouTube video URL
      title: "Learner Testimonial: Devyani's Journey With Online BBA (MUJ)",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube video URL
      title: "Learner Testimonial: Akhil's Journey With Online MBA (MUJ)",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3", // Replace with actual YouTube video URL
      title: "Learner Testimonial: Ritu's Story with Online MCA (MAHE)",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4", // Replace with actual YouTube video URL
      title: "Learner Testimonial: Rahul's Transition with Online MBA (MUJ)",
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5", // Replace with actual YouTube video URL
      title: "Learner Testimonial: Nikita's Experience with Online BBA (MUJ)",
    },
  ];

  // Calculate the number of visible videos based on screen size
  const getVisibleVideos = () => {
    if (window.innerWidth >= 1024) return 3; // Desktop
    if (window.innerWidth >= 640) return 2; // Tablet
    return 1; // Mobile
  };

  const [visibleVideos, setVisibleVideos] = useState(getVisibleVideos());

  // Update visibleVideos on window resize
  React.useEffect(() => {
    const handleResize = () => setVisibleVideos(getVisibleVideos());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalVideos = videos.length;
  const maxIndex = totalVideos - visibleVideos;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full py-6 lg:py-11 p-6 lg:px-[9%] md:[8%] w-screen-lg mx-auto ">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-left text-[#85132c] ">
        Our <span className="italic">stories</span>
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Previous Button */}
        <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20"
        aria-label="Previous Slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

        {/* Video Wrapper */}
        <div
          ref={sliderRef}
          className="flex transition-transform px-11 space-x-6 duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleVideos)}%)`,
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              {/* Embed YouTube Video */}
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.videoUrl}
                  
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-48 w-full object-cover"
                  title={video.title}
                ></iframe>
              </div>
              {/* Video Title */}
              <p className="text-center text-sm font-medium mt-2 text-gray-800">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-20"
        aria-label="Next Slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-4">
        {Array(Math.ceil(totalVideos / visibleVideos))
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "text-[#85132c]" : "text-[#85132c]"
              }`}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Stories;
