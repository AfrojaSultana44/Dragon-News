import React from "react";
import logo from "../../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-3">
      <div>
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-[#706F6F] text-[18px] font-normal">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-xl text-[#706F6F] font-medium">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
