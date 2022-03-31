import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] cursor-pointer">
            <Link to="/">STACKLINE</Link>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white">
            <li>
              <Link to="/">Домашня</Link>
            </li>
            <li>
              <Link to="/about">Про Сайт</Link>
            </li>
            <button className="mx-7">
              <Link to="/auth">Увійти</Link>
            </button>
          </ul>
        </div>
        <div onClick={handleClick} className="block md:hidden">
          {!nav ? (
            <MenuIcon className="w-6 text-white" />
          ) : (
            <XIcon className="w-6 text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black h-[22vh] text-white font-bold absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute" //top-[-100%]
          }
        >
          <ul>
            <li className="text-xl"><Link to="/">Домашня</Link></li>
            <li className="text-xl"><Link to="/about">Про Сайт</Link></li>
            <button className="m-4 px-24"><Link to="/auth">Увійти</Link></button>
          </ul>
        </div>
      </div>
    </div>
  );
};
