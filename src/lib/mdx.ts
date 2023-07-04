import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { IPostBySlug } from "@/types"


const root = process.cwd()
const folder = "content"

export const getFiles = (type:string) => fs.readdirSync(path.join(root,folder, type))

export const getPostBySlug: IPostBySlug = async (type, slug) => {
  const mdxSource = fs.readFileSync(path.join(root,folder, type, `${slug}.mdx`), "utf8")
  const {data, content} = await matter(mdxSource)
  const source = await serialize(content, {})

  return {
    content: source,
    frontmatter: {
      slug: slug || null,
      ...data,
    },
  }
}

export const getAllFilesFrontmatter = async (type:string)=> {
  const files = getFiles(type)
  const results = await Promise.all(files.map(async(file)=>{
    const mdxSource = fs.readFileSync(path.join(root, folder, type, `${file}`), "utf8")
    const {data, content} =  await matter(mdxSource)
    const source = await serialize(content, {})
    return {
      content: source,
      frontmatter: {
        ...data,
        slug: file.replace(/\.mdx/,""),
      },
    }
  })
  )
  return results
}