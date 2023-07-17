import { GetStaticPaths, GetStaticProps } from "next";
import { getFiles, getPostBySlug } from "@/lib/mdx";

import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { IArticle } from "@/types";

const Article: React.FC<IArticle> = ({ content, frontmatter }) => {
  const { date, title } = frontmatter;
  return (
    <>
    <section className={`bg-hero-article bg-cover bg-center  min-h-[450px]`}>
    </section>
      <main className="flex flex-col mx-auto min-w-[800px] min-h-[80vh] prose prose-mine">
        <span
          className={`text-sm py-1 px-6 bg-slate-100 place-self-end text-jet-mine-800`}
        >
          {date}
        </span>
        <h1 className={`mt-8 text-5xl text-slate-200`}>{title}</h1>
        <MDXRemote {...content} />
      </main>
    
    </>
  );
};

export default Article;


















export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const { content, frontmatter } = await getPostBySlug("blog", slug);

  return {
    props: {
      content,
      frontmatter: {
        slug: params?.slug as string,
        ...frontmatter,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getFiles("blog"); //carpeta hardcodeada, en un futuro refactor implementar Enum con diferentes opciones
  const paths = articles.map((article) => ({
    params: {
      slug: article.replace(/\.mdx/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
