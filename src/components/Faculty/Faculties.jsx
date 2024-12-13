
import React, { useState } from 'react';
import FacultyProfile from './FacultyProfile';

import WhyOurFaculty from './WhyOurFaculty';

const Faculties = () => {
  
  
  
  // Updated faculty data with department field
  const faculties = [
    {
      name: 'Dr. John Doe',
      designation: 'Professor',
      qualifications: 'PhD in Computer Science',
      expertise: 'Artificial Intelligence, Machine Learning',
      department: 'Mathematics',  // Added department field
      photo: 'https://via.placeholder.com/150',
      experience: '20 years of research and teaching experience in AI and ML.'
    },
    {
      name: 'Dr. Jane Smith',
      designation: 'Associate Professor',
      qualifications: 'PhD in Mechanical Engineering',
      expertise: 'Robotics, Control Systems',
      department: 'Mechanical Engineering',  // Added department field
      photo: 'https://via.placeholder.com/150',
      experience: '15 years in the robotics industry, with multiple patents in robotics.'
    },
    {
      name: 'Dr. John Doe',
      designation: 'Professor',
      qualifications: 'PhD in Computer Science',
      expertise: 'Artificial Intelligence, Machine Learning',
      department: 'Computer Science',  // Added department field
      photo: 'https://via.placeholder.com/150',
      experience: '20 years of research and teaching experience in AI and ML.'
    },
    {
      name: 'Dr. Jane Smith',
      designation: 'Associate Professor',
      qualifications: 'PhD in Mechanical Engineering',
      expertise: 'Robotics, Control Systems',
      department: 'Computer Science',  // Added department field
      photo: 'https://via.placeholder.com/150',
      experience: '15 years in the robotics industry, with multiple patents in robotics.'
    },
    // Add more faculty data as needed with department
  ];
  const [filteredFaculty, setFilteredFaculty] = useState(faculties); // Initial faculty list

  // Filter function based on selected department
  const handleFilter = (department) => {
    if (department) {
      setFilteredFaculty(faculties.filter(faculty => faculty.department === department));
    } else {
      setFilteredFaculty(faculties);  // Show all if no department is selected
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-[9%] md:[8%]">
      <div className="flex align-middle justify-between py-7">
        <h2 className="text-3xl font-bold text-[#85132c] mb-8">
        Our Faculties
        </h2>
        <button className="bg-[#58132c] text-white  font-semibold rounded-full hover:scale-105  py-0 px-4 mb-8">
        Join as Faculty
        </button>
      </div>

     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFaculty.map((faculty, idx) => (
          <FacultyProfile key={idx} {...faculty} />
        ))}
      </div>

      <WhyOurFaculty />
    </div>
  );
};

export default Faculties;
