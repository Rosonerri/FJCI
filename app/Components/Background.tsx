"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
// import img2 from "../../public/pexels-tima-miroshnichenko-5206035.jpg";
const Background = () => {
  return (
    <div
      className="w-full h-[91vh] relative"
      style={{
        backgroundImage: `url(/T-God.jpg)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <div className="absolute w-full h-full opacity-[.7] z-20 flex justify-center items-center bg-black">
        <div className="text w-[95%] h-full grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="w-[100%] h-full flex justify-center items-center flex-col">
              <div className="md:text-[35px] xl:text-[60px] text-white text-[30px] ml-[55px]">
                The Smarter Way to Explore.....
                <TypewriterComponent
                  options={{
                    strings: ["Anything", "AnyWhere", "AnyTime"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-[13px] text-center md:text-[18px] xl:mr-[70px] text-white ml-[30px] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                ea iure reprehenderit veniam. Accusantium temporibus laborum
                officia itaque?
              </p>
              <div className="mt-[50px] flex w-[90%] h-[50px] rounded-[30px] overflow-hidden shadow-md md:w-[95%]">
                <input
                  type="text"
                  className="flex-1 outline-none p-4"
                  placeholder="search template"
                />
                <div className="w-[10%] flex justify-center items-center text-[25px]">
                  <IoSearch className="cursor-pointer text-white" />
                </div>
              </div>
              {/* <button className="hidden xl:block font-[700] border p-2 rounded-md bg-blue-900 text-white mt-[20px]">
                Explore
              </button> */}
            </div>
          </div>
          <div className="overflow-hidden hidden md:flex">
            {/* <Image src={img2} alt="" className="w-[80%]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
