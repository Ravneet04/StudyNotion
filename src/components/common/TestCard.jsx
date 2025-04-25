import React from "react";
import { FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";

const TestCard = ({heading,para,s1,s2,s3,}) => {
  return (
    <div className="border-[0.5px] border-gray-400 text-white p-6 rounded-2xl w-80 shadow-lg mt-5">
      <div className="flex items-center space-x-3 mb-4">
        <IoLogoJavascript className="text-2xl text-gray-400 bg-richblack-100  " />
        <h3 className="text-xl font-bold">{heading}</h3>
      </div>
      <p className="text-richblack-300 text-sm mb-4">
        {para}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-richblack-500 text-white text-xs px-3 py-1 rounded-full">{s1}</span>
        <span className="bg-richblack-500 text-white text-xs px-3 py-1 rounded-full">{s2}</span>
        <span className="bg-richblack-500 text-white text-xs px-3 py-1 rounded-full">{s3}</span>
      </div>
      <Link to={"https://form.typeform.com/to/OpZN5e32"} target="_blank">
      <button className="text-richblack-600 bg-white  font-semibold px-4 py-2 w-full rounded-lg hover:bg-gray-300">
        Start Test
      </button>
      </Link>
    </div>
  );
};

export default TestCard;