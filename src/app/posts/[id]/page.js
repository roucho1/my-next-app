export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (r) => r.json(),
  );

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function PostDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  );
}
