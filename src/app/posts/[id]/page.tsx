import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) return notFound();

  const { Content, meta } = post;

  return (
    <div>
      <h2>{meta.title}</h2>
      <Content />
    </div>
  );
}
