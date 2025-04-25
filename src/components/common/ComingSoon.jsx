import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

  return (
    <div className="flex justify-center space-x-4">
      <div className="text-center">
        <div className="flip-digit">{String(days).padStart(2, "0")}</div>
        <p className="text-sm uppercase mt-1">Days</p>
      </div>
      <div className="text-center">
        <div className="flip-digit">{String(hours).padStart(2, "0")}</div>
        <p className="text-sm uppercase mt-1">Hours</p>
      </div>
      <div className="text-center">
        <div className="flip-digit">{String(minutes).padStart(2, "0")}</div>
        <p className="text-sm uppercase mt-1">Minutes</p>
      </div>
      <div className="text-center">
        <div className="flip-digit">{String(seconds).padStart(2, "0")}</div>
        <p className="text-sm uppercase mt-1">Seconds</p>
      </div>
    </div>































    
  );
}

const ComingSoon = () => {
  const launchDate = new Date("2025-08-15T00:00:00"); // Correct launch date

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-white bg-richblack-800 px-3 py-4 rounded-md">
      <h1 className="text-4xl md:text-5xl font-bold">We are launching on August 15, 2025!</h1>

      {/* Countdown Timer */}
      <div className="mt-6">
        <MyTimer expiryTimestamp={launchDate} />
      </div>

      <p className="text-gray-300 mt-4">Get notified when we launch!</p>

      {/* Email Subscription */}
      <div className="mt-4 flex">
        <input
          type="email"
          placeholder="Your email address"
          className="p-2 rounded-l-md border-none outline-none w-64 text-black"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
          NOTIFY ME
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex space-x-4 text-white text-xl">
        <FaFacebookF className="cursor-pointer hover:text-blue-500" />
        <FaTwitter className="cursor-pointer hover:text-blue-400" />
        <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
        <FaGoogle className="cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
};

export default ComingSoon;
