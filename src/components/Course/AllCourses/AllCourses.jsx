import React from "react";
import CourseCard from "./CourseCard";
import RightSideBar from "../../about/LeadershipTeam/RightSideBar";

const AllCourses = () => {
  const courses = [
    {
      image: "https://media.istockphoto.com/id/943368662/photo/text-self-education-school-supplies-wooden-miniatures-on-green-background.jpg?s=2048x2048&w=is&k=20&c=lItw-fm7VGBA5oQcvABQHUxbCQbL4d4d7sLsvujw_DI=", // Replace with actual image URL
      title: "MBA",
      university: "Manipal University Jaipur",
      duration: "24 Months",
      price: "1,50,000",
      popular: true,
    },
    {
      image: "https://media.istockphoto.com/id/809822422/photo/skill-concept-chalk-board-background.jpg?s=2048x2048&w=is&k=20&c=FixtnQ2vlmGufvo0tGtG5mv0AqXE8qOu02zKTs7CM4k=", // Replace with actual image URL
      title: "B.Tech",
      university: "IIT Delhi",
      duration: "48 Months",
      price: "2,00,000",
      popular: false,
    },
    {
      image: "https://media.istockphoto.com/id/943368662/photo/text-self-education-school-supplies-wooden-miniatures-on-green-background.jpg?s=2048x2048&w=is&k=20&c=lItw-fm7VGBA5oQcvABQHUxbCQbL4d4d7sLsvujw_DI=", // Replace with actual image URL
      title: "MBA",
      university: "Manipal University Jaipur",
      duration: "24 Months",
      price: "1,50,000",
      popular: true,
    },
    {
      image: "https://media.istockphoto.com/id/809822422/photo/skill-concept-chalk-board-background.jpg?s=2048x2048&w=is&k=20&c=FixtnQ2vlmGufvo0tGtG5mv0AqXE8qOu02zKTs7CM4k=", // Replace with actual image URL
      title: "B.Tech",
      university: "IIT Delhi",
      duration: "48 Months",
      price: "2,00,000",
      popular: false,
    },
    {
      image: "https://media.istockphoto.com/id/943368662/photo/text-self-education-school-supplies-wooden-miniatures-on-green-background.jpg?s=2048x2048&w=is&k=20&c=lItw-fm7VGBA5oQcvABQHUxbCQbL4d4d7sLsvujw_DI=", // Replace with actual image URL
      title: "MBA",
      university: "Manipal University Jaipur",
      duration: "24 Months",
      price: "1,50,000",
      popular: true,
    },
    {
      image: "https://media.istockphoto.com/id/809822422/photo/skill-concept-chalk-board-background.jpg?s=2048x2048&w=is&k=20&c=FixtnQ2vlmGufvo0tGtG5mv0AqXE8qOu02zKTs7CM4k=", // Replace with actual image URL
      title: "B.Tech",
      university: "IIT Delhi",
      duration: "48 Months",
      price: "2,00,000",
      popular: false,
    },
    {
      image: "https://media.istockphoto.com/id/943368662/photo/text-self-education-school-supplies-wooden-miniatures-on-green-background.jpg?s=2048x2048&w=is&k=20&c=lItw-fm7VGBA5oQcvABQHUxbCQbL4d4d7sLsvujw_DI=", // Replace with actual image URL
      title: "MBA",
      university: "Manipal University Jaipur",
      duration: "24 Months",
      price: "1,50,000",
      popular: true,
    },
    {
      image: "https://media.istockphoto.com/id/809822422/photo/skill-concept-chalk-board-background.jpg?s=2048x2048&w=is&k=20&c=FixtnQ2vlmGufvo0tGtG5mv0AqXE8qOu02zKTs7CM4k=", // Replace with actual image URL
      title: "B.Tech",
      university: "IIT Delhi",
      duration: "48 Months",
      price: "2,00,000",
      popular: false,
    },
    
    // Add more courses as needed
  ];

  return (
    <><div className="flex justify-between flex-col md:flex-row  lg:flex-row px-6 lg:px-[9%] md:[8%]">
    <div className="min-h-screen bg-gray-100 pt-4 p-2  w-full lg:w-[70%]">
      <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
    <div className=" w-full lg:w-[30%]"><RightSideBar/></div>
   </div>
    </>
  );
};

export default AllCourses;
