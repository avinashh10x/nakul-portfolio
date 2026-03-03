import React from "react";
import { meData } from "@/data/siteData";

function Me() {
  return (
    <div className="relative w-full h-screen flex overflow-hidden ">
      {/* Huge Text Background */}

      <div className="w-[40%] h-full text-black flex items-center justify-end">
        <img
          src={meData.image}
          alt={meData.name}
          className="h-[50%]! w-[100%]! scale-120 "
        />
        <h1 className="absolute z-20 text-[10vw] font-bold text-white mix-blend-difference leading-none tracking-tighter select-none uppercase pointer-events-none">
          {meData.name}
        </h1>
      </div>
      <div className="w-[60%] h-full text-black  p-10 flex items-center">
        <div>
          <h3 className="text-6xl font-bold">{meData.heading}</h3>
          <br />
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-[#444]">
            {meData.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
