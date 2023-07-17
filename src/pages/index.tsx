import { Inter } from "next/font/google";
import { getAllFilesFrontmatter } from "@/lib/mdx";
import { IArticles } from "@/types";
import { GetStaticProps } from "next";
import HeroHomeSection from "../components/sections/Home/HeroHomeSection";
import MainHomeSection from "@/components/sections/Home/MainHomeSection";
import FooterSection from "@/components/sections/FooterSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: IArticles) {
  return (
    <section className={`min-h-screen min-w-full bg-background-light`}>
    <main
      className={`flex flex-col max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto min-h-full justify-between `}
    >
      <HeroHomeSection />
      <MainHomeSection articles={articles} />
      <FooterSection />
    </main>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getAllFilesFrontmatter("blog"); //carpeta hardcodeada, en un futuro refactor implementar Enum con diferentes opciones

  return {
    props: {
      articles,
    },
  };
};
