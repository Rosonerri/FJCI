import React from "react";
import Image from "next/image";
import img from "../../../public/signup.jpg";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {  MdEmail, MdPerson2 } from "react-icons/md";
import Button from "@/app/Components/Button";
const page = () => {
  return (
    <div className="bg-[#262626] h-[100vh] w-full flex justify-center items-center">
      <div className="w-[1000px] h-[85%] md:h-[80%] lg:h-[90%] bg-[rgb(129, 129, 39)] rounded-[10px] grid grid-cols-1 md:grid-cols-5 overflow-hidden shadow-md">
        <div className="hidden md:flex md:col-span-2">
          <Image src={img} alt="" />
        </div>
        <div className="md:col-span-3 flex justify-center items-center">
          <div className="w-[90%] border h-[70%] flex justify-center flex-col items-center md:h-[90%] shadow-md rounded-md bg-white">
            <div className="font-bold">Sign In Here</div>
            <div className="w-[80%] h-[70%]">
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Email</div>
                <div className="p-1 flex w-[100%] border h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdEmail className="text-[18px] mr-[5px]" />
                  <input
                    type="text"
                    placeholder="Enter your email here"
                    className="flex-1 text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="text-[11px] font-[600]">Password</div>
                <div className="p-1 flex w-[100%] border h-[35px] rounded justify-center items-center bg-slate-200">
                  <MdPerson2 className="text-[18px] mr-[5px]" />
                  <input
                    type="text"
                    placeholder="Enter your password here"
                    className="flex-1 text-[14px] font-semibold italic outline-none h-full bg-slate-200"
                  />
                </div>
              </div>

              <div className="w-full flex justify-center items-center mt-[25px]">
                {" "}
                <Button className="font-bold text-black border text-[13px] bg-yellow-400 hover:bg-yellow-100 transition-all duration-500 hover:text-yellow-500">
                  Login
                </Button>
              </div>
              <div className="mt-[15px] flex">
                <div className="text-[11px] italic mr-[5px]">
                  You Don't Have An Account?
                </div>
                <Link href="/register">
                  <div className="text-[10px] italic font-semibold text-yellow-700">
                    SignUp
                  </div>
                </Link>
              </div>
              <div className="w-full flex justify-center items-center mt-[15px]">
                <div className="h-[1px] w-[100px] bg-[grey] mr-[5px]" />
                <div className="mr-[5px]">OR</div>
                <div className="h-[1px] w-[100px] bg-[grey]" />
              </div>
              <div className="flex md:w-full md:justify-around mt-[20px] text-[15px] justify-between gap-1">
                <Button
                  icon={<FaGoogle />}
                  className="bg-white text-black border text-[13px]"
                >
                  Google
                </Button>
                <Button icon={<FaFacebook />} className="text-[13px]">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
