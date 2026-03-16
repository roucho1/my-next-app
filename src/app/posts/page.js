import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">文章列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
