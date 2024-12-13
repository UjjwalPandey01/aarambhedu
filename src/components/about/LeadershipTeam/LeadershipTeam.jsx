import React from "react";
import Topbar from "./Topbar";
import TeamGrid from "./TeamGrid";
import VideoSection from "./VideoSection";
import RightSideBar from "./RightSideBar";
import PartnerCorousal from "./PartnerCorousal";

const LeadershipTeam = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-[#85132c] text-white py-6 px-6 lg:px-[9%] md:[8%]">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold ">Leadership Team</h1>
        </div>
      </header>

      <div className=" px-6 lg:px-[9%] md:[8%] py-6 ">

<div className=" flex justify-between flex-col lg:flex-row gap-6 " >
  <div className="flex-1 w-full lg:w-[68%]"> <Topbar /></div>
  <div className="w-full lg:w-[30%]"> <VideoSection /></div>
</div>

        <div className=" gap-6   flex justify-between flex-col lg:flex-row ">
          {/* Team Section */}
          <div className="flex-1 w-full lg:w-[68%]">
           
            <TeamGrid />
            <PartnerCorousal />
          </div>
          {/* Sidebar and Video */}
          <div className="flex flex-col w-full lg:w-[30%] gap-6">
            
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipTeam;
