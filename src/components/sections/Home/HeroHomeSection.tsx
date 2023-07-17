import Image from "next/image";
import React from "react";
import Nav from "../Nav";
import { IHeroSection } from "@/types";

const HeroHomeSection: React.FC<IHeroSection> = ( {className} ) => {
  const styles = className ? className : ""
  return (
    <section className={`${styles} pb-12`}>
      <main className={`flex flex-col gap-3 `}>
        <Nav />
        <Image
          className="place-self-center mb-8"
          src={"/Logo.svg"}
          width={521}
          height={192}
          alt="logo bloguito"
        />
        <p
          className={`text-lg text-light-secondary-100 font-normal tracking-tight`}
        >
          Este blog tiene la finalidad de compartir distintos artículos sobre
          tecnología, tutoriales, y demás cosas interesantes que me pasan en el
          día a día en el mundo de sistemas.
        </p>
      </main>
    </section>
  );
};

export default HeroHomeSection;
