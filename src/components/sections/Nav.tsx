import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className={`flex flex-col align-middle justify-center place-items-center min-h-[4rem] bg-jet-mine-800 sticky top-0`}>
      <ul className={`flex flex-row place-items-start flex-nowrap gap-20 text-lg lg:w-[48rem]`}>
      <Link href={"/"}><li className={``}>Inicio</li></Link>
      <Link href={"/blog"}><li>Artículos</li></Link>
    </ul>
    </div>
  );
};

export default Nav;
