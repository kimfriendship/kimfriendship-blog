import { PostMeta } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

// MDX 파일들이 있는 실제 폴더 경로
const POSTS_PATH = path.join(process.cwd(), "src/content");

// 글 하나 가져오기
export async function getPost(slug: string) {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileSource = fs.readFileSync(filePath, "utf-8");

    const { content: mdxSource, data } = matter(fileSource);

    const { content } = await compileMDX({
      source: mdxSource,
      options: {
        parseFrontmatter: false,
      },
    });

    return {
      content,
      meta: data,
    };
  } catch (e) {
    // TODO: 에러 핸들링 개선
    console.warn(`Failed to load post: ${slug}`, e);
    return null;
  }
}

// 글 목록 가져오기
export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_PATH);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(POSTS_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        thumbnail: data.thumbnail || null,
      };
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
