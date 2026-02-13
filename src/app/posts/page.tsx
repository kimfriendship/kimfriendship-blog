import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="flex items-end gap-4 py-10">
        <h1 className="text-4xl font-bold">포스트</h1>
        <span>({posts.length}개)</span>
      </div>

      <ul>
        {posts.map(({ title, date, description, slug }) => (
          <li key={slug} className="h-43 w-full border-b border-gray-300">
            <a
              href={`/posts/${slug}`}
              className="flex h-full w-full flex-col gap-2 py-8"
            >
              <span className="text-xl font-semibold">{title}</span>
              <p className="line-clamp-2">{description}</p>
              <time className="mt-auto text-xs">{date}</time>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
