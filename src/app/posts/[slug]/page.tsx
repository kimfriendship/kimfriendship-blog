import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return notFound();

  const { Content, meta } = post;

  return (
    <div>
      <h2>{meta.title}</h2>
      <Content />
    </div>
  );
}
