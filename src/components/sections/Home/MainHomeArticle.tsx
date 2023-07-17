import { IMainArticle } from "@/types";
import Image from "next/image";
import React from "react";

const MainHomeArticle:React.FC<IMainArticle> = ({article}) => {
  return (
    <>
      <h3 className={`font-semibold text-xl text-light-secondary-100 max-w-md`}>
        {article.frontmatter.title}
      </h3>
      <p className={`font-normal text-base text-light-secondary-100 max-w-md`}>
        {article.frontmatter.description}
      </p>
      <Image
        className={`my-2 rounded-lg`}
        src={"/strapi.png"}
        width={340}
        height={290}
        alt="article image"
      />
    </>
  );
};

export default MainHomeArticle;
