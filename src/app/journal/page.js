"use client";

import { useState } from "react";

const days = [
  {
    day: 1,
    title: "環境建置",
    status: "done",
    date: "2026-03-05",
    topics: [
      "安裝 Node.js、VSCode",
      "用 Vite 建立第一個 React 專案",
      "了解專案結構（src/、main.jsx、App.jsx）",
      "推上 GitHub",
    ],
    note: "完成開發環境建置，成功跑起 Vite dev server。",
  },
  {
    day: 2,
    title: "第一個 Component",
    status: "done",
    date: "2026-03-07",
    topics: [
      "JSX 語法基礎",
      "建立 Greeting.jsx（第一個自訂 component）",
      "在 App.jsx 中 import 並使用",
      "確認頁面成功渲染",
    ],
    note: "理解 component 就是 function，回傳 JSX。import/export 的寫法也清楚了。",
  },
  {
    day: 3,
    title: "Props",
    status: "done",
    date: "2026-03-07",
    topics: [
      "Props 是什麼、為什麼需要它",
      "從父層傳資料給子 component",
      "在子 component 接收並使用 props",
      "用 props 讓 Greeting 顯示不同內容",
    ],
    note: "理解 props 就是函式參數，解構寫法、預設值都測試過了。name 改名、傳數字要加 {} 等細節都清楚。",
  },
  {
    day: 4,
    title: "State & useState",
    status: "done",
    date: "2026-03-07",
    topics: [
      "useState Hook 基礎",
      "state vs props 差異",
      "點擊按鈕更新畫面",
      "props 與 state 結合（step）",
      "lifting state up 概念",
    ],
    note: "理解 state 是 component 自己管理的資料，props 是唯讀的。父層把 set 函式傳給子層才能讓子層更新父層 state。",
  },
  {
    day: 5,
    title: "事件處理",
    status: "done",
    date: "2026-03-07",
    topics: [
      "onClick、onChange 事件",
      "controlled input",
      "表單基礎",
      "多欄位表單用物件 state 管理",
      "展開運算子更新欄位",
    ],
    note: "理解 controlled input 的單向資料流。展開運算子複製舊資料再覆蓋對應欄位的寫法很實用。",
  },
  {
    day: 6,
    title: "條件渲染 & 列表",
    status: "done",
    date: "2026-03-08",
    topics: [
      "三元運算子渲染",
      "&& 短路渲染",
      "map() 渲染列表",
      "key 的重要性",
      "React Fragment <>",
    ],
    note: "三元用在有兩種結果，&& 用在顯示或不顯示。&& 左邊不能放數字否則會渲染 0。<> 不產生額外 DOM 元素。",
  },
  {
    day: 7,
    title: "Week 1 整合練習",
    status: "done",
    date: "2026-03-08",
    topics: [
      "Todo List 整合實作",
      "filter 實作刪除功能",
      "Date.now() 當唯一 id",
      "key 不建議用 index",
      "onClick 帶參數要用箭頭函式包住",
    ],
    note: "用 Todo List 串接 Week 1 所有概念。onClick={fn} 和 onClick={fn()} 的差別很重要。key 要用唯一 id 不能用 index。",
  },
  {
    day: 8,
    title: "useEffect 基礎",
    status: "done",
    date: "2026-03-08",
    topics: [
      "useEffect 是什麼、為什麼需要它",
      "dependency array 的作用",
      "component 掛載時執行一次",
      "監聽 todos 變化",
    ],
    note: "useEffect 第二個參數（dependency array）控制執行時機。空陣列只跑一次，有值則監聽變化，沒有則每次渲染都跑。",
  },
  {
    day: 9,
    title: "串接 API",
    status: "done",
    date: "2026-03-08",
    topics: [
      "fetch 基礎",
      "用 useEffect + fetch 拿資料",
      "處理 loading 狀態",
      "res.ok 錯誤處理",
      ".catch() 接住錯誤",
    ],
    note: "fetch 是非同步的，console.log 要在 .then 裡才拿得到資料。res 是 Response 物件，.json() 後才是真正的資料。",
  },
  {
    day: 10,
    title: "自訂 Hook",
    status: "done",
    date: "2026-03-08",
    topics: [
      "為什麼要抽成自訂 Hook",
      "把 fetch 邏輯抽成 useFetch",
      "讓 component 更乾淨",
      "自訂 Hook 命名規則 use 開頭",
    ],
    note: "自訂 Hook 就是普通函式，名稱用 use 開頭，裡面用了內建 Hook 就算。state 所有權還是在使用它的 component，url 沒變 useEffect 不重新執行。",
  },
  {
    day: 11,
    title: "React Router 基礎",
    status: "done",
    date: "2026-03-08",
    topics: [
      "安裝 react-router-dom",
      "建立多頁面（首頁、關於、404）",
      "Link 和 useNavigate",
      "BrowserRouter 包住整個 App",
      "Link 取代 a 標籤不重新整理",
    ],
    note: "Route 定義路徑對應 component，Link 切換路由不重載頁面。useNavigate 用程式碼控制跳頁，Hook 要放在 component 最頂層。",
  },
  {
    day: 12,
    title: "Router 進階",
    status: "done",
    date: "2026-03-08",
    topics: [
      "動態路由（/posts/:id）",
      "useParams 取得路由參數",
      "巢狀路由概念",
      "Outlet 渲染子路由",
    ],
    note: "useParams() 回傳物件，解構取得對應參數。巢狀路由用 Route 包 Route，Outlet 決定子路由渲染位置。Routes 只需要一個在最外層。",
  },
  {
    day: 13,
    title: "表單進階 & 驗證",
    status: "done",
    date: "2026-03-08",
    topics: [
      "表單驗證邏輯",
      "錯誤訊息顯示",
      "送出後的狀態處理",
      "Object.keys 檢查錯誤",
      "useNavigate 送出後跳頁",
    ],
    note: "errors state 用物件存每個欄位錯誤訊息。validate() 回傳錯誤物件，有錯誤就不送出。onChange 的 e 是瀏覽器自動帶入的事件物件。",
  },
  {
    day: 14,
    title: "Week 2 整合練習",
    status: "done",
    date: "2026-03-08",
    topics: [
      "文章列表串接 API",
      "文章詳情動態路由",
      "useFetch 重複使用",
      "模板字串帶入 url 參數",
      "pages/ 與 components/ 職責分離",
    ],
    note: "用 Router + useFetch 串接 API 做出多頁面應用。to={`/posts/${id}`} 不能加引號否則變純字串。pages/ 放路由頁面，components/ 放可重複使用的元件。",
  },
  {
    day: 15,
    title: "useContext 基礎",
    status: "done",
    date: "2026-03-09",
    topics: [
      "為什麼需要 useContext",
      "createContext、useContext 用法",
      "解決 props drilling 問題",
      "具名 export vs default export",
    ],
    note: "Context 解決 props drilling，任何子層都能直接取得資料。具名 export 要加 {}，default export 不用加 {}。",
  },
  {
    day: 16,
    title: "useContext 實作",
    status: "done",
    date: "2026-03-09",
    topics: [
      "建立 ThemeContext 深色/淺色模式",
      "ThemeProvider 管理 state 和函式",
      "Context 搭配 useState",
      "children prop 概念",
    ],
    note: "ThemeProvider 把 theme 和 toggleTheme 一起放進 value 傳出去。控制權在 Provider，component 只負責取用。沒有 useState 的話改值不會重新渲染。",
  },
  {
    day: 17,
    title: "async/await",
    status: "done",
    date: "2026-03-09",
    topics: [
      "async/await 改寫 fetch",
      "try/catch 錯誤處理",
      "finally 不管成功失敗都執行",
      "throw new Error 手動丟出錯誤",
    ],
    note: "async/await 是 ES2017 原生語法，讓非同步看起來像同步。fetch 只有網路錯誤才自動進 catch，HTTP 錯誤要靠 if(!res.ok) throw 手動處理。",
  },
  {
    day: 18,
    title: "Tailwind CSS 基礎",
    status: "done",
    date: "2026-03-09",
    topics: [
      "安裝 Tailwind v4",
      "常用 class（排版、顏色、間距）",
      "清除 Vite 預設 CSS 避免衝突",
      "Tailwind CSS IntelliSense 擴充套件",
    ],
    note: "使用 Tailwind 前先清掉 Vite 預設的 CSS，否則優先級會一直衝突。! 在 v4 移到 class 後面，如 bg-gray-800!。",
  },
  {
    day: 19,
    title: "Tailwind 實戰",
    status: "done",
    date: "2026-03-09",
    topics: [
      "Navbar 樣式",
      "卡片式文章列表",
      "RWD 響應式 grid-cols",
      "flex vs grid 差異",
      "手機優先 md: lg: 前綴",
    ],
    note: "grid 控制欄數版面，flex 控制單一方向排列，實務上常混用。RWD 從小到大寫 grid-cols-1 md:grid-cols-2 lg:grid-cols-3。",
  },
  {
    day: 20,
    title: "環境變數 & 專案整理",
    status: "done",
    date: "2026-03-09",
    topics: [
      ".env 管理 API URL",
      "VITE_ 開頭才能讀取",
      "import.meta.env 取得環境變數",
      "config.js 統一匯出",
      "資料夾改名 Component -> components",
    ],
    note: "Vite 環境變數一定要 VITE_ 開頭。.env 加進 .gitignore 避免推上 GitHub。Windows 改資料夾大小寫要先建新資料夾再移動檔案。",
  },
  {
    day: 21,
    title: "部署到 Vercel",
    status: "done",
    date: "2026-03-10",
    topics: [
      "註冊 Vercel 連結 GitHub",
      "自動偵測 Vite 專案部署",
      "設定環境變數 VITE_API_URL",
      "vercel.json 解決 SPA 路由 404",
      "git push 自動觸發重新部署",
    ],
    note: "Vercel 連結 GitHub 後 git push 就會自動部署。SPA 路由 F5 會 404，要加 vercel.json 把所有路徑導回 index.html 讓 React Router 處理。",
  },
  {
    day: 22,
    title: "Next.js 介紹 & 環境建置",
    status: "done",
    date: "2026-03-11",
    topics: [
      "Next.js 是什麼、CSR vs SSR 差別",
      "建立新專案 create-next-app",
      "App Router 專案結構",
      "page.js、layout.js 用途",
    ],
    note: "Next.js = React + 伺服器端功能。App Router 用資料夾結構決定路由，page.js 是頁面內容，layout.js 是共用外框。",
  },
  {
    day: 23,
    title: "檔案路由系統",
    status: "done",
    date: "2026-03-11",
    topics: [
      "資料夾名稱 = URL 路徑",
      "page.js、layout.js 是什麼",
      "metadata 設定 title/description",
      "next/link 的 href 取代 to",
    ],
    note: "template: '%s | My Next App' 套用在子層頁面。layout.js 同層的 page.js 不會套用 template。[id] 資料夾代表動態路由。",
  },
  {
    day: 24,
    title: "Server Component & Client Component",
    status: "done",
    date: "2026-03-11",
    topics: [
      "Server Component 預設、伺服器執行",
      '"use client" 變成 Client Component',
      "useState/useEffect/onClick 只能在 Client Component",
      "Hydration 概念",
    ],
    note: "預設全部是 Server Component。需要互動才加 use client。Hydration：伺服器先產生 HTML，JS 載入後互動功能才啟用。",
  },
  {
    day: 25,
    title: "資料獲取",
    status: "done",
    date: "2026-03-11",
    topics: [
      "Server Component 直接 async/await fetch",
      "不需要 useEffect",
      "loading.js 自動處理載入狀態",
      "error.js 自動處理錯誤（需加 use client）",
    ],
    note: "fetch 在伺服器執行，F12 Network 看不到。從別頁點進來才是 client-side 導航看得到 fetch。抽共用邏輯用函式不用 Hook。",
  },
  {
    day: 26,
    title: "動態路由 & generateStaticParams",
    status: "done",
    date: "2026-03-11",
    topics: [
      "[id] 資料夾建立動態路由",
      "params props 取得參數",
      "generateStaticParams 預先產生靜態頁面",
      "SSG vs SSR vs CSR 差異",
    ],
    note: "params 名稱對應資料夾 [id] 的名稱。generateStaticParams 在 build 時執行，回傳幾個 id 就執行幾次 PostDetail。開發環境看不出差別，npm run build 後才有效果。",
  },
  {
    day: 27,
    title: "Next.js API Route",
    status: "current",
    date: "",
    topics: ["建立自己的 API endpoint", "route.ts 寫法", "前端呼叫自己的 API"],
    note: "",
  },
  {
    day: 28,
    title: "Week 4 整合練習",
    status: "upcoming",
    date: "",
    topics: [
      "文章列表用 Next.js 重寫",
      "Server Component 串接 API",
      "部署到 Vercel",
    ],
    note: "",
  },
];

const statusConfig = {
  done: {
    label: "✓ 完成",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.12)",
    border: "rgba(74,222,128,0.3)",
  },
  current: {
    label: "► 進行中",
    color: "#facc15",
    bg: "rgba(250,204,21,0.12)",
    border: "rgba(250,204,21,0.4)",
  },
  upcoming: {
    label: "○ 待開始",
    color: "#64748b",
    bg: "rgba(100,116,139,0.06)",
    border: "rgba(100,116,139,0.2)",
  },
};

export default function LearningJournal() {
  const [selected, setSelected] = useState(26); // Day 27 index
  const [note, setNote] = useState(days[2].note);
  const [saved, setSaved] = useState(false);

  const completedCount = days.filter((d) => d.status === "done").length;
  const progress = (completedCount / days.length) * 100;

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  const d = days[selected];
  const cfg = statusConfig[d.status];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0f1a",
        fontFamily: "'Courier New', monospace",
        color: "#e2e8f0",
        padding: "32px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 4,
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#475569",
              textTransform: "uppercase",
            }}
          >
            學習日誌
          </span>
          <span style={{ color: "#334155" }}>—</span>
          <span
            style={{ fontSize: 11, color: "#475569", letterSpacing: "0.1em" }}
          >
            React → Next.js → FastAPI
          </span>
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#f1f5f9",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          React 學習 <span style={{ color: "#facc15" }}>進度追蹤</span>
        </h1>

        {/* Progress bar */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
              fontSize: 11,
              color: "#64748b",
            }}
          >
            <span>整體進度</span>
            <span style={{ color: "#4ade80" }}>
              {completedCount} / {days.length} 天完成
            </span>
          </div>
          <div style={{ height: 3, background: "#1e293b", borderRadius: 2 }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #4ade80, #facc15)",
                borderRadius: 2,
                transition: "width 0.6s ease",
              }}
            />
          </div>
        </div>

        {/* Day selector */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 28,
            flexWrap: "wrap",
          }}
        >
          {days.map((d, i) => {
            const c = statusConfig[d.status];
            const isActive = selected === i;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  padding: "6px 14px",
                  border: `1px solid ${isActive ? c.color : "rgba(255,255,255,0.08)"}`,
                  borderRadius: 4,
                  background: isActive ? c.bg : "transparent",
                  color: isActive ? c.color : "#475569",
                  cursor: "pointer",
                  fontSize: 12,
                  fontFamily: "inherit",
                  letterSpacing: "0.05em",
                  transition: "all 0.15s",
                }}
              >
                D{d.day}
              </button>
            );
          })}
        </div>

        {/* Day detail card */}
        <div
          style={{
            border: `1px solid ${cfg.border}`,
            borderRadius: 8,
            background: cfg.bg,
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  color: "#475569",
                  letterSpacing: "0.15em",
                  marginBottom: 4,
                }}
              >
                DAY {d.day} {d.date && `· ${d.date}`}
              </div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#f1f5f9" }}>
                {d.title}
              </div>
            </div>
            <span
              style={{
                fontSize: 11,
                padding: "4px 10px",
                border: `1px solid ${cfg.border}`,
                borderRadius: 3,
                color: cfg.color,
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              {cfg.label}
            </span>
          </div>

          {/* Topics */}
          <div style={{ marginBottom: d.status !== "upcoming" ? 20 : 0 }}>
            {d.topics.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  padding: "5px 0",
                  borderBottom:
                    i < d.topics.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                  fontSize: 13,
                  color: d.status === "upcoming" ? "#475569" : "#cbd5e1",
                }}
              >
                <span style={{ color: cfg.color, marginTop: 1, flexShrink: 0 }}>
                  {d.status === "done"
                    ? "✓"
                    : d.status === "current"
                      ? "›"
                      : "·"}
                </span>
                {t}
              </div>
            ))}
          </div>

          {/* Note area — only for done/current */}
          {d.status !== "upcoming" && (
            <div>
              <div
                style={{
                  fontSize: 11,
                  color: "#475569",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                {d.status === "done" ? "學習筆記" : "當天心得（完成後填寫）"}
              </div>
              {d.status === "done" ? (
                <div
                  style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}
                >
                  {d.note}
                </div>
              ) : (
                <div>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="今天學了什麼？有什麼卡住的地方？"
                    rows={3}
                    style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.3)",
                      border: "1px solid rgba(250,204,21,0.2)",
                      borderRadius: 4,
                      color: "#e2e8f0",
                      fontFamily: "inherit",
                      fontSize: 13,
                      padding: "10px 12px",
                      resize: "vertical",
                      boxSizing: "border-box",
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={handleSave}
                    style={{
                      marginTop: 8,
                      padding: "6px 16px",
                      background: saved
                        ? "rgba(74,222,128,0.15)"
                        : "rgba(250,204,21,0.1)",
                      border: `1px solid ${saved ? "rgba(74,222,128,0.4)" : "rgba(250,204,21,0.3)"}`,
                      color: saved ? "#4ade80" : "#facc15",
                      borderRadius: 3,
                      cursor: "pointer",
                      fontSize: 12,
                      fontFamily: "inherit",
                      letterSpacing: "0.08em",
                      transition: "all 0.2s",
                    }}
                  >
                    {saved ? "✓ 已記錄" : "儲存心得"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            fontSize: 11,
            color: "#334155",
            textAlign: "center",
            letterSpacing: "0.1em",
          }}
        >
          目標：React → Next.js → FastAPI → 作品集部署 Vercel
        </div>
      </div>
    </div>
  );
}
