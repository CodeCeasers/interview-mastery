import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-auto text-white p-8">
      <div
        className="text-white mt-7 h-10 w-10 md:h-20 md:w-20 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
