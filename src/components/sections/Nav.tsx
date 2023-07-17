import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className={`flex flex-col align-middle justify-center place-items-center min-h-[3rem] sticky mt-8 top-0 border-t-4 border-secondary-300`}>
      <ul className={`flex flex-row place-items-start flex-nowrap gap-20 lg:w-[48rem] text-secondary-300  uppercase text-lg ml-8`}>
      <Link href={"/"}><li className="hover:text-light-secondary-100">Inicio</li></Link>
      <Link href={"/blog"}><li className="hover:text-light-secondary-100">Artículos</li></Link>
    </ul>
    </div>
  );
};

export default Nav;
