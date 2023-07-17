import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface IArticle{
  frontmatter: IFrontmatter
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

export interface IMainArticle {
  article: IArticle
}

interface IFrontmatter{
  description: string;
  slug: string;
  title: string;
  date: string;
}


export interface IArticles extends ICustom{
  articles: IArticle[]
}


export interface IHeroSection {
  className?: string;
}


interface ICustom{
  colorFont?:string;
  cant?: number;

}

export interface ISocialMediaSection {
  colorFont?: string;
}










export interface IPostBySlug {
  (type: string, slug: string): Promise<IPostData>;
}

interface IPostData {
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
  [key: string]: any; 
}


export interface Ipaths{
params: IParams
}

export interface IParams {
    slug: string;
}