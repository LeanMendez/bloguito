export interface IPosts {
  type: string;
}

export interface IGetPostBySlug {
  type: string;
  slug: string;
}

export interface IGetAllFilesFrontmatter {
  type: string;
}

export interface IPostMetadata {
  title: string;
  date: string;
  slug: string;
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

export interface IPostsResult {
  posts: IPostMetadata[];
}

export interface IData {
  title: string;
  date: string;
}
