# my-next-app

使用 next.js 建立的學習demo畫面。

## 技術棧

- Next.js
- React
- Javascript
- Tailwind CSS

## 本機啟動

```bash
# 安裝套件
npm install

# 啟動伺服器
npm run dev
```

## 線上網址

https://my-next-app-theta-tawny.vercel.app/

> API呼叫部分由於 Render Free 方案閒置後會 spin down，第一次請求可能需要等待 50 秒以上。

## 頁面路由

| 路徑        | 說明     |
| ----------- | -------- |
| /           | 首頁     |
| /about      | 關於我   |
| /posts      | 文章列表 |
| /posts/[id] | 文章詳情 |
| /journal    | 學習日誌 |

## 環境變數.env.local

| 變數名稱            | 說明              |
| ------------------- | ----------------- |
| NEXT_PUBLIC_API_URL | FastAPI 的 domain |
