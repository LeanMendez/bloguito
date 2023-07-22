import Image from "next/image";
import React from "react";
import Nav from "../Nav";
import { IHeroSection } from "@/types";

const HeroHomeSection: React.FC<IHeroSection> = ( {className} ) => {
  const styles = className ? className : ""
  return (
    <section className={`${styles} pb-2`}>
      <main className={`flex flex-col gap-3 `}>
        <Nav />
        <Image
          className="place-self-center mb-8"
          src={"/Logo.svg"}
          width={521}
          height={192}
          alt="logo bloguito"
        />
        
      </main>
    </section>
  );
};

export default HeroHomeSection;
