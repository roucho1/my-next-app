export default async function PostDetail({ params }) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
  );
  const post = await res.json();
  if (!res.ok) {
    return <div>找不到文章</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  );
}
