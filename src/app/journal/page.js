"use client";

import { useState } from "react";

const days = [
  {
    day: 1,
    title: "環境建置",
    status: "done",
    date: "2026-03-05",
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 1,
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
    week: 2,
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
    week: 2,
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
    week: 2,
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
    week: 2,
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
    week: 2,
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
    week: 2,
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
    week: 2,
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
    week: 3,
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
    week: 3,
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
    week: 3,
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
    week: 3,
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
    week: 3,
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
    week: 3,
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
    week: 3,
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
    week: 4,
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
    week: 4,
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
    title: "Server & Client Component",
    status: "done",
    date: "2026-03-11",
    week: 4,
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
    week: 4,
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
    week: 4,
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
    status: "done",
    date: "2026-03-12",
    week: 4,
    topics: [
      "建立 route.js 定義 API endpoint",
      "函式名稱對應 HTTP method（GET/POST/DELETE）",
      "NextResponse.json() 回傳資料與狀態碼",
      "動態路由 [id] + 找不到時回 404",
      "await params 取得路由參數（Next.js 15）",
      "Client Component 用相對路徑 fetch('/api/posts') 呼叫自己的 API",
    ],
    note: "route.js 函式名稱就是 HTTP method，Next.js 自動對應。Next.js 15 的 params 是 Promise，要先 await 才能取值，直接 params.id 會拿到 undefined。Client Component 呼叫自己的 API 用相對路徑，Server Component 要用完整網址。",
  },
  {
    day: 28,
    title: "Week 4 整合練習",
    status: "done",
    date: "2026-03-12",
    week: 4,
    topics: [
      "posts 頁面改用自己的 /api/posts（取代 JSONPlaceholder）",
      "環境變數 NEXT_PUBLIC_BASE_URL 處理 Server Component fetch 網址",
      "Server Component 不能用相對路徑，要用完整網址",
      "404 處理：res.ok 為 false 時提早 return",
      "拿掉 generateStaticParams，改為純 SSR",
    ],
    note: "Server Component fetch 自己的 API 要用完整網址，相對路徑只在 Client Component 有效。環境變數 NEXT_PUBLIC_BASE_URL 讓本機和部署環境都能正確運作，部署到 Vercel 後要記得在 Vercel 設定對應的環境變數。",
  },
  {
    day: 29,
    title: "FastAPI 環境建置",
    status: "done",
    date: "2026-03-12",
    week: 5,
    topics: [
      "安裝 Python、FastAPI、uvicorn",
      "建立第一個 FastAPI 專案",
      "uvicorn main:app --reload 啟動 server",
      "認識自動產生的 API 文件（/docs）",
      "虛擬環境 venv 隔離專案套件",
    ],
    note: "uvicorn main:app 中 main 是檔名、app 是 FastAPI 實例名稱。虛擬環境類似 Node.js 的 node_modules，讓每個專案套件獨立不衝突。/docs 是 FastAPI 自動產生的 API 文件，可以直接在上面測試。",
  },
  {
    day: 30,
    title: "路由基礎",
    status: "done",
    date: "2026-03-13",
    week: 5,
    topics: [
      "練習有帶參數與沒帶參數的 GET 路由",
      "測試 POST 傳送資料新增",
      "FastAPI 型別標註自動驗證，不用自己判斷 type",
      "@app.get() decorator 負責註冊路由，function 名稱不影響路由行為",
      "return dict FastAPI 自動轉 JSON，不需要手動 NextResponse.json()",
    ],
    note: "FastAPI 參數只要加 : int，傳錯型別就自動回錯誤訊息，不用自己寫驗證邏輯。decorator 的概念跟 Next.js route.js 用函式名稱對應 method 不同，FastAPI 用 @app.get/@app.post 對應，function 名稱只是方便閱讀。",
  },
  {
    day: 31,
    title: "Path & Query Parameter",
    status: "done",
    date: "2026-03-13",
    week: 5,
    topics: [
      "Path Parameter：路徑裡的 {變數}，必填",
      "Query Parameter：函式參數沒有對應 {}，有預設值選填，沒有預設值必填",
      "Path 和 Query Parameter 可以同時用",
      "未定義的 Query Parameter 直接忽略",
      "型別錯誤回 422，錯誤訊息在 Response 裡",
      "安裝 Thunder Client 測試 API",
    ],
    note: "Path Parameter 放路徑的 {}，Query Parameter 就是函式裡沒有對應 {} 的參數，FastAPI 自動分辨。未定義的 Query Parameter 直接忽略不報錯。型別錯誤回 422，錯誤訊息在 Response 的 detail 欄位。",
  },
  {
    day: 32,
    title: "Pydantic & Request Body",
    status: "done",
    date: "2026-03-13",
    week: 5,
    topics: [
      "用 Pydantic class 定義 Request Body 欄位型態，繼承 BaseModel",
      "用法類似 Angular 的 interface，有預設值為選填，沒有為必填",
      "GET 通常直接寫 Query Parameter，不需要用 Pydantic class",
      "必填欄位沒填或型態錯誤回傳 422",
      "Pydantic v2 嚴格驗證，int 傳給 str 欄位不會自動轉型直接 422",
    ],
    note: "Pydantic class 抽出去定義的好處是可以重複使用，多個路由需要同樣結構時不用重複寫。Pydantic v2 不會自動轉型是實際測試才發現的，跟 v1 行為不同。GET 帶 Request Body 是反模式，瀏覽器和 proxy 可能直接忽略。",
  },
  {
    day: 33,
    title: "錯誤處理",
    status: "done",
    date: "2026-03-14",
    week: 5,
    topics: [
      "next(generator, 預設值) 判斷參數是否為有效值",
      "raise HTTPException(status_code, detail) 回傳錯誤，status_code 必填",
      "raise 不需要在 try/except 裡，FastAPI 內部自動捕捉 HTTPException",
      "JS throw/try/catch 對應 Python raise/try/except，概念相同關鍵字不同",
    ],
    note: "raise 可以在任何地方使用，不一定要在 try/except 裡。FastAPI 會自動捕捉 HTTPException 並轉成對應的 HTTP 錯誤回應，所以只要 raise 就好，不需要自己處理剩下的事。",
  },
  {
    day: 34,
    title: "CORS 設定",
    status: "done",
    date: "2026-03-14",
    week: 5,
    topics: [
      "跨網域情況下瀏覽器會有 CORS ERROR，是瀏覽器擋的，FastAPI 本身還是回傳 200",
      "用 app.add_middleware(CORSMiddleware, 參數) 解決，FastAPI 自動在每個回應加上 Access-Control-Allow-Origin header",
      "allow_origins 必填；allow_methods 選填預設只允許 GET；allow_headers 選填；allow_credentials 選填預設 False",
      "部署時記得把 Vercel 網址也加進 allow_origins，不然正式環境會被擋",
    ],
    note: "跨網域會有 CORS ERROR 問題，是瀏覽器擋的不是 FastAPI。開發時 API 要記得補上允許的 domain，部署後也要記得更新成正式網址。",
  },
  {
    day: 35,
    title: "Week 5 整合練習",
    status: "done",
    date: "2026-03-14",
    week: 5,
    topics: [
      "練習使用 POST/PUT/DELETE 對假資料進行新增/修改/刪除",
      "假資料新增時 id 不要用 len()+1，要用 max()+1，避免刪除後 id 重複，max() 要給 default=0 避免空列表報錯",
      "enumerate() 會將 index 及對應的值包成一組回傳，用 index 去直接覆蓋修改或 pop() 刪除",
      "PUT 是完整替換整筆資料，之後只改部分欄位會用 PATCH",
      "RESTful 規範應該用對應的 HTTP method（GET/POST/PUT/DELETE），全用 POST 能動但語意不正確",
    ],
    note: "假資料新增要注意 id 重複問題，實務上使用 db 會自動產生 id 不會有這種狀況。RESTful 規範要用對應的 HTTP method，不應該全都使用 POST。",
  },
  {
    day: 36,
    title: "SQLite & SQLAlchemy 基礎",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["SQLite 介紹", "SQLAlchemy 連接資料庫", "建立資料表"],
    note: "",
  },
  {
    day: 37,
    title: "資料庫 CRUD",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["對資料庫做 CRUD", "Session 管理", "Dependency Injection"],
    note: "",
  },
  {
    day: 38,
    title: "假資料換真實資料庫",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["把假資料替換成資料庫查詢", "測試 CRUD 功能"],
    note: "",
  },
  {
    day: 39,
    title: "部署 FastAPI",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["部署到 Railway 或 Render", "環境變數設定", "確認線上 API 正常"],
    note: "",
  },
  {
    day: 40,
    title: "Next.js 接 FastAPI",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["前端改接 FastAPI 網址", "環境變數切換", "端對端測試"],
    note: "",
  },
  {
    day: 41,
    title: "整合測試 & 除錯",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["前後端整合測試", "常見錯誤排查", "效能確認"],
    note: "",
  },
  {
    day: 42,
    title: "作品集整理 & 部署收尾",
    status: "upcoming",
    date: "",
    week: 6,
    topics: ["作品集頁面整理", "README 撰寫", "Vercel 部署收尾"],
    note: "",
  },
];

const phases = [
  {
    id: "react",
    label: "React",
    weeks: [1, 2, 3],
    color: "#61dafb",
    accent: "#0ea5e9",
  },
  {
    id: "nextjs",
    label: "Next.js",
    weeks: [4],
    color: "#a78bfa",
    accent: "#8b5cf6",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    weeks: [5, 6],
    color: "#4ade80",
    accent: "#22c55e",
  },
];

const weekLabels = {
  1: "React 基礎",
  2: "Hooks & Router",
  3: "Context & 部署",
  4: "Next.js",
  5: "FastAPI 基礎",
  6: "整合作品集",
};

const STATUS = {
  done: {
    label: "完成",
    icon: "✓",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.25)",
  },
  current: {
    label: "進行中",
    icon: "▶",
    color: "#facc15",
    bg: "rgba(250,204,21,0.08)",
    border: "rgba(250,204,21,0.35)",
  },
  upcoming: {
    label: "待開始",
    icon: "○",
    color: "#475569",
    bg: "rgba(71,85,105,0.04)",
    border: "rgba(71,85,105,0.15)",
  },
};

function MiniMap({ days, selected, onSelect }) {
  const weeks = [...new Set(days.map((d) => d.week))];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {weeks.map((w) => (
        <div key={w} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              fontSize: 9,
              color: "#334155",
              width: 14,
              textAlign: "right",
              letterSpacing: "0.05em",
            }}
          >
            W{w}
          </span>
          <div style={{ display: "flex", gap: 3 }}>
            {days
              .filter((d) => d.week === w)
              .map((d, i) => {
                const idx = days.indexOf(d);
                const s = STATUS[d.status];
                const isActive = selected === idx;
                return (
                  <button
                    key={i}
                    onClick={() => onSelect(idx)}
                    title={`Day ${d.day}: ${d.title}`}
                    style={{
                      width: 20,
                      height: 20,
                      border: `1.5px solid ${isActive ? s.color : "transparent"}`,
                      borderRadius: 3,
                      background:
                        d.status === "done"
                          ? `${s.color}22`
                          : d.status === "current"
                            ? `${s.color}33`
                            : "rgba(255,255,255,0.03)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      color: isActive ? s.color : s.color + "88",
                      transition: "all 0.15s",
                      transform: isActive ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {d.day}
                  </button>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

function PhaseBar({ days }) {
  const completedCount = days.filter((d) => d.status === "done").length;
  const currentIdx = days.findIndex((d) => d.status === "current");

  return (
    <div
      style={{
        display: "flex",
        gap: 0,
        height: 4,
        borderRadius: 2,
        overflow: "hidden",
        marginBottom: 4,
      }}
    >
      {days.map((d, i) => {
        const phase = phases.find((p) => p.weeks.includes(d.week));
        const color =
          d.status === "done"
            ? phase?.color
            : d.status === "current"
              ? phase?.color
              : "rgba(255,255,255,0.06)";
        return (
          <div
            key={i}
            style={{
              flex: 1,
              background: color,
              opacity:
                d.status === "done" ? 0.7 : d.status === "current" ? 1 : 1,
              transition: "all 0.3s",
            }}
          />
        );
      })}
    </div>
  );
}

export default function LearningTracker() {
  const [selected, setSelected] = useState(() => {
    const currentIdx = days.findIndex((d) => d.status === "current");
    if (currentIdx !== -1) return currentIdx;
    const upcomingIdx = days.findIndex((d) => d.status === "upcoming");
    if (upcomingIdx !== -1) return upcomingIdx;
    return days.length - 1; // 都沒有就選最後一天
  });
  const [filterWeek, setFilterWeek] = useState(null);
  const [noteText, setNoteText] = useState(days[selected]?.note || "");
  const [saved, setSaved] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const d = days[selected];
  const cfg = STATUS[d.status];
  const phase = phases.find((p) => p.weeks.includes(d.week));

  const completedCount = days.filter((d) => d.status === "done").length;
  const progress = (completedCount / days.length) * 100;

  const visibleDays = filterWeek
    ? days.filter((day) => day.week === filterWeek)
    : days;

  function selectDay(idx) {
    setSelected(idx);
    setAnimKey((k) => k + 1);
    setSaved(false);
    setNoteText(days[idx].note || "");
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const prevDay = selected > 0 ? () => selectDay(selected - 1) : null;
  const nextDay =
    selected < days.length - 1 ? () => selectDay(selected + 1) : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#060b14",
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        color: "#cbd5e1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 2px; }
        .day-btn:hover { transform: scale(1.05) !important; }
        .nav-btn:hover { background: rgba(255,255,255,0.06) !important; }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        textarea:focus { outline: none; }
        textarea::placeholder { color: #334155; }
      `}</style>

      {/* Scanline overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(180deg, transparent, rgba(100,200,255,0.03), transparent)",
            animation: "scanline 8s linear infinite",
          }}
        />
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
          padding: "28px 20px 40px",
        }}
      >
        {/* ── HEADER ── */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {phases.map((p) => (
              <span
                key={p.id}
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: p.color,
                  padding: "2px 8px",
                  border: `1px solid ${p.color}44`,
                  borderRadius: 2,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {p.label}
              </span>
            ))}
            <span
              style={{
                fontSize: 10,
                color: "#1e293b",
                marginLeft: "auto",
                letterSpacing: "0.1em",
              }}
            >
              → Vercel
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#f8fafc",
                  margin: 0,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                }}
              >
                學習進度追蹤
              </h1>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 11,
                  color: "#475569",
                  letterSpacing: "0.05em",
                }}
              >
                Day {completedCount} / {days.length} &nbsp;·&nbsp;{" "}
                {Math.round(progress)}% 完成
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { label: "已完成", val: completedCount, color: "#4ade80" },
                {
                  label: "進行中",
                  val: days.filter((d) => d.status === "current").length,
                  color: "#facc15",
                },
                {
                  label: "待開始",
                  val: days.filter((d) => d.status === "upcoming").length,
                  color: "#475569",
                },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: s.color,
                      lineHeight: 1,
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "#334155",
                      letterSpacing: "0.1em",
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 16 }}>
            <PhaseBar days={days} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6,
              }}
            >
              {phases.map((p) => (
                <div
                  key={p.id}
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: p.color,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 9,
                      color: p.color + "99",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 220px",
            gap: 20,
            alignItems: "start",
          }}
        >
          {/* LEFT: Day detail */}
          <div>
            {/* Week filter tabs */}
            <div
              style={{
                display: "flex",
                gap: 4,
                marginBottom: 14,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setFilterWeek(null)}
                style={{
                  padding: "4px 12px",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  border: `1px solid ${filterWeek === null ? "#475569" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 3,
                  background:
                    filterWeek === null ? "rgba(71,85,105,0.2)" : "transparent",
                  color: filterWeek === null ? "#94a3b8" : "#334155",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                ALL
              </button>
              {[...new Set(days.map((d) => d.week))].map((w) => {
                const ph = phases.find((p) => p.weeks.includes(w));
                return (
                  <button
                    key={w}
                    onClick={() => setFilterWeek(filterWeek === w ? null : w)}
                    style={{
                      padding: "4px 12px",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      border: `1px solid ${filterWeek === w ? ph?.color + "88" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: 3,
                      background:
                        filterWeek === w ? ph?.color + "18" : "transparent",
                      color: filterWeek === w ? ph?.color : "#334155",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    W{w}
                  </button>
                );
              })}
            </div>

            {/* Day grid */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                marginBottom: 20,
              }}
            >
              {visibleDays.map((day) => {
                const idx = days.indexOf(day);
                const s = STATUS[day.status];
                const ph = phases.find((p) => p.weeks.includes(day.week));
                const isActive = selected === idx;
                return (
                  <button
                    key={idx}
                    className="day-btn"
                    onClick={() => selectDay(idx)}
                    style={{
                      width: 42,
                      height: 42,
                      border: `1.5px solid ${isActive ? ph?.color || s.color : day.status === "done" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
                      borderRadius: 5,
                      background: isActive
                        ? `${ph?.color || s.color}20`
                        : day.status === "done"
                          ? "rgba(255,255,255,0.03)"
                          : "transparent",
                      color: isActive
                        ? ph?.color || s.color
                        : day.status === "done"
                          ? "#64748b"
                          : "#2d3748",
                      cursor: "pointer",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      fontWeight: isActive ? 700 : 400,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.12s",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{ fontSize: 8, color: "inherit", opacity: 0.6 }}
                    >
                      D
                    </span>
                    <span style={{ lineHeight: 1 }}>{day.day}</span>
                    {day.status === "current" && (
                      <div
                        style={{
                          position: "absolute",
                          top: 3,
                          right: 3,
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#facc15",
                          animation: "pulse 1.5s ease-in-out infinite",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Detail card */}
            <div
              key={animKey}
              style={{
                border: `1px solid ${cfg.border}`,
                borderRadius: 8,
                background: cfg.bg,
                padding: "22px 24px",
                animation: "fadeSlide 0.25s ease-out forwards",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Phase accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${phase?.color || cfg.color}88, transparent)`,
                }}
              />

              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 18,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 5,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        color: phase?.color || "#475569",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      DAY {d.day}
                    </span>
                    {d.date && (
                      <span style={{ fontSize: 10, color: "#334155" }}>
                        · {d.date}
                      </span>
                    )}
                    <span
                      style={{
                        fontSize: 9,
                        padding: "2px 7px",
                        border: `1px solid ${cfg.border}`,
                        borderRadius: 2,
                        color: cfg.color,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {cfg.icon} {cfg.label}
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#f1f5f9",
                      margin: 0,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {d.title}
                  </h2>
                </div>

                {/* Nav arrows */}
                <div style={{ display: "flex", gap: 4 }}>
                  <button
                    className="nav-btn"
                    onClick={prevDay}
                    disabled={!prevDay}
                    style={{
                      width: 28,
                      height: 28,
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 4,
                      background: "transparent",
                      color: prevDay ? "#64748b" : "#1e293b",
                      cursor: prevDay ? "pointer" : "default",
                      fontSize: 12,
                      fontFamily: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s",
                    }}
                  >
                    ‹
                  </button>
                  <button
                    className="nav-btn"
                    onClick={nextDay}
                    disabled={!nextDay}
                    style={{
                      width: 28,
                      height: 28,
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 4,
                      background: "transparent",
                      color: nextDay ? "#64748b" : "#1e293b",
                      cursor: nextDay ? "pointer" : "default",
                      fontSize: 12,
                      fontFamily: "inherit",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s",
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Topics */}
              <div
                style={{
                  marginBottom: d.note || d.status === "current" ? 18 : 0,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    color: "#334155",
                    letterSpacing: "0.15em",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  學習主題
                </div>
                {d.topics.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      padding: "6px 0",
                      borderBottom:
                        i < d.topics.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : "none",
                      fontSize: 12.5,
                      color: d.status === "upcoming" ? "#334155" : "#94a3b8",
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        color: phase?.color || cfg.color,
                        flexShrink: 0,
                        marginTop: 1,
                        fontSize: 10,
                      }}
                    >
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

              {/* Note */}
              {d.status !== "upcoming" && (
                <div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "#334155",
                      letterSpacing: "0.15em",
                      marginBottom: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    {d.status === "done" ? "學習筆記" : "當天心得"}
                  </div>
                  {d.status === "done" ? (
                    <div
                      style={{
                        fontSize: 12.5,
                        color: "#64748b",
                        lineHeight: 1.7,
                        padding: "12px 14px",
                        background: "rgba(0,0,0,0.2)",
                        borderRadius: 4,
                        borderLeft: `2px solid ${phase?.color || "#475569"}44`,
                      }}
                    >
                      {d.note}
                    </div>
                  ) : (
                    <div key={selected}>
                      <textarea
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="今天學了什麼？哪裡卡住了？有什麼收穫？"
                        rows={4}
                        style={{
                          width: "100%",
                          background: "rgba(0,0,0,0.3)",
                          border: `1px solid ${cfg.border}`,
                          borderRadius: 4,
                          color: "#e2e8f0",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 12,
                          padding: "10px 12px",
                          resize: "vertical",
                          lineHeight: 1.6,
                        }}
                      />
                      <button
                        onClick={handleSave}
                        style={{
                          marginTop: 8,
                          padding: "6px 18px",
                          background: saved
                            ? "rgba(74,222,128,0.12)"
                            : "rgba(250,204,21,0.08)",
                          border: `1px solid ${saved ? "rgba(74,222,128,0.35)" : "rgba(250,204,21,0.25)"}`,
                          color: saved ? "#4ade80" : "#facc15",
                          borderRadius: 3,
                          cursor: "pointer",
                          fontSize: 11,
                          fontFamily: "'JetBrains Mono', monospace",
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
          </div>

          {/* RIGHT: Mini map + Phase summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Mini map */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                background: "rgba(255,255,255,0.02)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: "#334155",
                  letterSpacing: "0.15em",
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                全覽
              </div>
              <MiniMap days={days} selected={selected} onSelect={selectDay} />
            </div>

            {/* Roadmap */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 8,
                background: "rgba(255,255,255,0.02)",
                padding: "16px",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: "#334155",
                  letterSpacing: "0.15em",
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                學習路線
              </div>
              {phases.map((p) => {
                const phaseDays = days.filter((d) => p.weeks.includes(d.week));
                const phaseCompleted = phaseDays.filter(
                  (d) => d.status === "done",
                ).length;
                const phaseProgress = (phaseCompleted / phaseDays.length) * 100;
                const hasStarted =
                  phaseCompleted > 0 ||
                  phaseDays.some((d) => d.status === "current");
                return (
                  <div key={p.id} style={{ marginBottom: 12 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 5,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          color: hasStarted ? p.color : "#334155",
                          fontWeight: 600,
                        }}
                      >
                        {p.label}
                      </span>
                      <span style={{ fontSize: 10, color: "#334155" }}>
                        {phaseCompleted}/{phaseDays.length}
                      </span>
                    </div>
                    <div
                      style={{
                        height: 3,
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: 2,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${phaseProgress}%`,
                          background: p.color,
                          borderRadius: 2,
                          transition: "width 0.5s ease",
                          opacity: hasStarted ? 0.8 : 0.2,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 12,
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                  fontSize: 9,
                  color: "#1e3a5f",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                }}
              >
                → FastAPI → Portfolio → Vercel
              </div>
            </div>

            {/* Week label */}
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: 8,
                padding: "14px 16px",
                background: `${phase?.color || "#475569"}08`,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  color: "#334155",
                  letterSpacing: "0.15em",
                  marginBottom: 6,
                  textTransform: "uppercase",
                }}
              >
                當前章節
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: phase?.color || "#475569",
                  fontWeight: 600,
                }}
              >
                Week {d.week}
              </div>
              <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>
                {weekLabels[d.week] || "—"}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 28,
            textAlign: "center",
            fontSize: 10,
            color: "#1e293b",
            letterSpacing: "0.1em",
          }}
        >
          React ─── Next.js ─── FastAPI ─── Portfolio ─── Vercel
        </div>
      </div>
    </div>
  );
}
