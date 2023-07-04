import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className={`mt-16`}>
      <main className={`flex flex-col gap-3 mb-16`}>
        <h1 className={`text-5xl font-semibold`}>Bloguito</h1>
        <h2 className={`text-2xl font-thin`}>Un blog creado por Leandro Méndez</h2>
        <p className={`text-lg font-normal max-w-3xl`}>
          Este blog tiene la finalidad de compartir distintos artículos sobre
          tecnología, tutoriales, y demás cosas interesantes que me pasan en el
          día a día en el mundo de sistemas.
        </p>
      </main>
      <aside>
        <Image src={""} alt="" />
      </aside>
    </section>
  );
};

export default HeroSection;
