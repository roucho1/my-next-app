import { NextResponse } from "next/server";
import posts from "@/data/posts";

export async function GET(request, { params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return NextResponse.json({ error: "找不到文章" }, { status: 404 });
  }

  return NextResponse.json(post);
}
