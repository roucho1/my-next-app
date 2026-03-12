"use client";

import Link from "next/link";
import { useState } from "react";

export default function ApiDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPosts() {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
    setLoading(false);
  }

  return (
    <div>
      <h1>API Demo</h1>
      <button onClick={fetchPosts}>載入文章</button>
      {loading && <p>載入中...</p>}
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/api-demo/${post.id}`}
          className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition"
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
}
