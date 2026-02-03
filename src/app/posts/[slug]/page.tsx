import { ReadingProgressBar } from "@/components/ReadingProgressBar";
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

  const { content, meta } = post;

  return (
    <>
      <ReadingProgressBar />

      <div className="my-10 flex flex-col gap-8 border-b border-gray-300 pb-4">
        <h1 className="text-4xl font-bold">{meta.title}</h1>
        <time className="text-sm">{meta.date}</time>
      </div>

      {content}
    </>
  );
}
