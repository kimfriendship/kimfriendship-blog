import fs from "fs";
import path from "path";

// MDX 파일들이 있는 실제 폴더 경로
const POSTS_PATH = path.join(process.cwd(), "src/content");

// 글 하나 가져오기
export async function getPost(slug: string) {
  try {
    // MDX를 React 컴포넌트처럼 import
    const post = await import(`@/content/${slug}.mdx`);

    return {
      Content: post.default,
      meta: post.meta || {},
    };
  } catch (e) {
    // TODO: 에러 핸들링 개선
    console.warn(`Failed to load post: ${slug}`, e);
    return null;
  }
}

// 글 목록 가져오기
export function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}
