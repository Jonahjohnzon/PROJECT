import React from "react";

const Tabone = () => {
  return <div className=" w-full bg-thirdblue h-[300px] relative">
    <div className=" absolute flex justify-center -top-10 w-full">
        <div className=" w-20 h-20 z-20 bg-white rotate-45"></div>
    </div>
    <div className=" w-full flex flex-col justify-center items-center h-full relative z-40">
        <h1 className=" font-bold font-Work text-[33px] mb-5 text-center">"It paid for itself already"</h1>
        <p className=" font-light italic">Jane Smith <span className=" font-bold italic">| Co-Founder</span></p>
    </div>
    <div className=" absolute flex justify-center -bottom-10 w-full">
        <div className=" w-20 h-20 z-20 bg-thirdblue rotate-45"></div>
    </div>
  </div>;
};

export default Tabone;
