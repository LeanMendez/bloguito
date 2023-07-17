import React from "react";
import MainHomeArticle from "./MainHomeArticle";
import { IArticles, IMainArticle } from "@/types";
import FeaturedArticles from "../FeaturedArticles";
import SocialMedia from "../SocialMedia";

const MainHomeSection: React.FC<IArticles> = ({ articles }) => {
 const article = articles && articles[0]
  return (
    <section
      className={`flex justify-between border-t-4 border-secondary-300 py-4`}
    >
      <main className={`flex-[1.3_1.3_0%]`}>
        <h2 className={`text-4xl font-medium text-secondary-300 mb-4`}>
          ÚLTIMO ARTICULO
        </h2>
        <MainHomeArticle article={article}/>
      </main>
      <aside className="flex-1">
      <h2 className={`text-2xl font-medium text-secondary-300 uppercase mb-4`}>Artículos destacados</h2>
        <FeaturedArticles colorFont="text-light-secondary-100" cant={3} articles={articles} />
        <SocialMedia  />
      </aside>
    </section>
  );
};

export default MainHomeSection;
