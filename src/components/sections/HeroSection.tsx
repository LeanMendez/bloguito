import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className={`mt-8`}>
      <main className={`flex flex-col gap-3 mb-16`}>
        <h1 className={`text-6xl font-semibold text-pink-mine-500`}>Blogu<strong className={`text-slate-50 font-extralight`}>[<span className={`text-moonstone-mine-500 font-semibold`}>IT</span>]</strong>o</h1>
        <h2 className={`text-2xl font-medium text-yellow-mine-500 tracking-wider`}>Un blog creado por Leandro Méndez</h2>
        <p className={`text-lg font-light max-w-xl`}>
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
