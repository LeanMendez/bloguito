import FeaturedArticles from "@/components/sections/FeaturedArticles";
import FooterSection from "@/components/sections/FooterSection";
import HeroHomeSection from "@/components/sections/Home/HeroHomeSection";
import SocialMedia from "@/components/sections/SocialMedia";
import { getAllFilesFrontmatter } from "@/lib/mdx";
import { IArticles } from "@/types";
import { GetStaticProps } from "next";
import React from "react";

const index = ({ articles }: IArticles) => {
  return (
    <section
      className={`min-h-screen min-w-full bg-light-secondary-100 justify-between`}
    >
      <div className={`flex flex-col max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto min-h-[900px] justify-between `}>
      <HeroHomeSection className={`banner`} />
      <div className={`flex flex-row  `}>
        <main className={`mt-4 flex-[2_2_0%]`}>
          <h2
            className={`text-4xl font-medium text-primary-700 uppercase mb-4 `}
          >
            Artículos
          </h2>
          <FeaturedArticles colorFont="text-primary-700" articles={articles} />
        </main>
        <aside className={`flex-1`}>
          <SocialMedia colorFont="text-primary-700" />
        </aside>
      </div>
      <FooterSection />
      </div>
    </section>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllFilesFrontmatter("blog"); //carpeta hardcodeada, en un futuro refactor implementar Enum con diferentes opciones

  return {
    props: {
      articles,
    },
  };
};
