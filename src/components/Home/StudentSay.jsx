import React, { useState, useRef, useEffect } from "react";

const StudentSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4); // Default for large screens
  const sliderRef = useRef(null);

  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Devaynee Sharma",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 1",
      shortDescription:
        "I have learned key skills in the finance sector through this MBA...",
      fullDescription:
        "I have learned key skills in the finance sector through this MBA, which will help my current career. As this is a management degree, I have improved my problem-solving skills.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Sarita Yadav",
      subtitle: "Online MBA, MAHE",
      batch: "Batch 1",
      shortDescription:
        "I currently work in the pharmaceutical domain. However, I...",
      fullDescription:
        "I currently work in the pharmaceutical domain. However, I wanted to gain new skills, which is why I decided to pursue this MBA. The learning experience has been great so far.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Amit Gupta",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 2",
      shortDescription: "The MBA program has greatly improved my confidence...",
      fullDescription:
        "The MBA program has greatly improved my confidence and business skills. The faculty support and learning environment have been exceptional.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300",
      title: "Priya Singh",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 2",
      shortDescription:
        "With this MBA, I have developed a deeper understanding of...",
      fullDescription:
        "With this MBA, I have developed a deeper understanding of the management domain. It has been a transformative experience for my career.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300",
      title: "Rahul Verma",
      subtitle: "Online MBA, MUJ",
      batch: "Batch 3",
      shortDescription: "This program has elevated my career opportunities...",
      fullDescription:
        "This program has elevated my career opportunities in unimaginable ways. The projects and teamwork taught me real-world business strategies.",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300",
      title: "Nikita Chauhan",
      subtitle: "Online MBA, MAHE",
      batch: "Batch 3",
      shortDescription:
        "The MBA course helped me transition into management smoothly...",
      fullDescription:
        "The MBA course helped me transition into management smoothly. I gained valuable skills and insights into managing business operations.",
    },
  ];

  const totalCards = cards.length;

  useEffect(() => {
    // Adjust visibleCards based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(4); // Large screens
      else if (window.innerWidth >= 640) setVisibleCards(2); // Medium screens
      else setVisibleCards(1); // Small screens
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Auto-scroll
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < totalCards - visibleCards ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [totalCards, visibleCards]);

  return (
    <div className="relative py-6 lg:py-11 p-6 lg:px-[9%] md:[8%] w-full mx-auto">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-[#85132c]">
        Student <span className="italic">speak</span>
      </h2>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        {/* Cards Wrapper */}
        <div
          ref={sliderRef}
          className="flex transition-transform space-x-6 duration-500 px-20"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-2 bg-white border rounded-lg shadow-md"
              style={{
                width: `${100 / visibleCards}%`, // Adjust card width dynamically
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold text-[#85132c]">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700">{card.subtitle}</p>
                <p className="text-xs text-gray-500">{card.batch}</p>

                <p className="text-sm text-gray-800 mt-2">
                  {card.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSay;
