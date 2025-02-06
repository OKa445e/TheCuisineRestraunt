import React from "react";
import "../../index.css";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden h-[350px]"
        >
          <div className="w-full h-[180px] bg-gray-300 rounded-lg shimmer-img mb-4"></div>
          <div className="mx-4 mb-3 h-[20px] bg-gray-300 rounded-md shimmer-title"></div>
          <div className="mx-4 h-[20px] bg-gray-300 rounded-md shimmer-description mb-4"></div>

          <div className="absolute top-0 left-[-100%] right-[-100%] bottom-0 bg-gradient-to-r from-white/20 via-white/60 to-white/20 animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
