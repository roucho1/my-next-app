export default async function PostsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">文章列表</h1>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border border-gray-200 rounded-lg">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
