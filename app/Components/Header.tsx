import React from "react";
import Button from "./Button";
import { MdAppRegistration, MdPerson2 } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-white flex justify-center items-center">
      <div className="w-[95%] h-full flex justify-between items-center">
        <div className="font-bold text-[black] h-[70px] w-[70px] flex justify-center items-center shadow-md rounded-[50%] border cursor-pointer">
          FJCI
        </div>
        <div className="h-full w-[50%] md:w-[38%] lg:w-[20%] flex justify-between items-center">
          <Link href="/login">
            <Button
              icon={<MdPerson2 />}
              className="text-white bg-yellow-500 font-bold"
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button
              icon={<MdAppRegistration />}
              className="font-bold text-black bg-white border"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
