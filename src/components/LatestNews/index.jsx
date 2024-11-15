import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-[#F3F3F3] p-3 mt-4">
      <p className="bg-[#D72050] text-[#FFFFFF] text-xl fnt-medium px-3 py-1">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={100} className="text-[#403F3F] text-[18px] font-semibold space-x-10">
       <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corporis.</Link>
       <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corporis.</Link>
       <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, corporis.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
