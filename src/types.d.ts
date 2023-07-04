import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface IPost{
  frontmatter: IFrontmatter
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

interface IFrontmatter{
  slug: string;
  title: string;
  date: string;
}


export interface IPosts{
  posts: IPost[]
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