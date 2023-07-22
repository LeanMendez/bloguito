import { GetStaticPaths, GetStaticProps } from "next";
import { getAllFilesFrontmatter, getFiles, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { IArticleWithExtraData } from "@/types";
import SocialMedia from "@/components/sections/SocialMedia";
import HeroHomeSection from "@/components/sections/Home/HeroHomeSection";
import FeaturedArticles from "@/components/sections/FeaturedArticles";
import Categories from "@/components/sections/Categories";


const Article: React.FC<IArticleWithExtraData> = ({ content, frontmatter, articles}) => {
  const { date, title } = frontmatter;
  return (
    <>
    <section className={`bg-hero-article bg-cover bg-center  min-h-[350px]`}>
    </section>
      <div className={`bg-dark-primary-700 `}>
      <main className="flex flex-row lg:max-w-7xl bg-dark-primary-700 min-h-[calc(100vh-350px)] mx-auto gap-8">
        <article className={`flex-1 bg-light-secondary-100 relative left-0 -top-52`}>
          <HeroHomeSection className="bg-purple-950"/>
        <div className="my-8 mx-auto max-w-2xl prose-base">
          <h2 className={`text-4xl text-center leading-tight font-medium text-primary-700 mb-4`}>{title}</h2>
          <p className={`text-center m-0`}>Publicado el {date} por <strong className={`text-primary-700 font-medium`}>Leandro Méndez</strong></p>
        <hr className="border-2 border-primary-700 my-8"/>
        <MDXRemote {...content} />
        </div>
        </article>
        <aside className={`flex-[0.5_0.5_0%]`}>
          {frontmatter.categories && <Categories categories={frontmatter.categories}/>}
          <SocialMedia/>
          <h3 className={`text-2xl font-medium text-secondary-300 uppercase my-4`}>Artículos destacados</h3>
          <FeaturedArticles colorFont="text-light-secondary-100" cant={4} articles={articles} />
        </aside>
      </main>
      </div>
    
    </>
  );
};

export default Article;


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const { content, frontmatter } = await getPostBySlug("blog", slug);
  const articles = await getAllFilesFrontmatter('blog')
  return {
    props: {
      content,
      frontmatter: {
        slug: params?.slug as string,
        ...frontmatter,
      },
      articles
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
