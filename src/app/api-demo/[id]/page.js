"use client";

import { useEffect, useState } from "react";

export default function PostDetail({ params }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const { id } = await params;
      const res = await fetch(`/api/posts/${id}`);
      if (!res.ok) {
        setError("找不到文章");
        setLoading(false);
        return;
      }
      const post = await res.json();
      setPost(post);
      setLoading(false);
    }
    fetchPost();
  }, [params]);

  if (loading) return <p>載入中...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed">{post.body}</p>
    </div>
  );
}
