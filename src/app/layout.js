import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "My Next App",
    template: "%s | My Next App",
  },
  description: "學習 Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-6 px-8 py-4 border-b border-gray-200">
          <Link href="/">首頁</Link>
          <Link href="/about">關於我</Link>
          <Link href="/posts">文章</Link>
          <Link href="/counter">計數測試</Link>
        </nav>
        <main className="max-w-3xl mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
