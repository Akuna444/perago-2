import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <section className="container mx-auto">
      <nav className="flex flex-col md:flex-row items-center text-center bg-secondary px-4 md:px-8 py-3 text-white justify-between">
        <img src="/logo.png" alt="Logo" width={100} height={100} />
        <div className=" p-2 text-2xl font-extrabold text-white ">
          Perago Systems
        </div>
        <div className="flex gap-3 mt-3 ">
          <FaFacebook className="text-[White] size-[24px]" />
          <FiInstagram className="text-[White] size-[24px]" />
          <PiTelegramLogoBold className="text-[White] size-[24px]" />
          <FaSquareXTwitter className="text-[White] size-[24px]" />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
