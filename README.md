# 📖 tofu1201.me 

> 「在會考學業、程式碼與兒少權益倡議之間，劃出屬於國中世代的痕跡。」

本專案為 **Tofu (tofu1201.me)** 的個人官方網站，採用**實體線圈手帳與便利貼（Physical Notebook & Post-it Sticky Notes）**視覺風格，記錄身為 **116 會考生**、**新竹縣兒少代表 (115/08/10 上任)** 與 **程式設計者** 的學習歷程與兒少政策倡議。

---

## 🎨 網站設計亮點 (Design Features)

- **實體線圈手帳介面**：置身於真實木質書桌上的活頁線圈筆記本（Spiral Binder）與象牙色質感內頁。
- **Post-it 便利貼與紙膠帶細節**：經典莫蘭迪色彩便利貼、半透明透光紙膠帶（Washi Tape）與手作剪貼質感。
- **流暢 3D 擬真翻頁動態**：切換頂部手帳索引頁籤（Bookmark Index Tabs）時，呈現自然重力感的 3D 翻頁效果。
- **行動裝置 100% 響應式最佳化 (Mobile RWD)**：手機畫面上自動轉換為單欄直向滑動卡片與手帳選單按鈕。
- **SEO 與 OpenGraph 完整配置**：內建 JSON-LD `Person` 與 `WebSite` 結構化資料，提升 `tofu1201.me` 搜尋引擎排名。

---

## 📚 頁面結構與內容

1. **封面首頁 (Cover Page)**：純淨獨立的個人手帳封面與便利貼索引。
2. **核心身份 (Identities)**：116 會考生、新竹縣兒少代表、程式設計者 3 大柱石。
3. **個人歷程 (Chronicle)**：115/08/10 正式上任新竹縣兒少代表時間軸紀錄。
4. **兒少提案與回覆 (Proposals & Gov Responses)**：兒少政策【提案內容】與【政府部門處室回覆】時間軸紀錄。
5. **程式作品 (Projects)**：Python 腳本工具、HTML5 與 CSS3 自主學習作品集。
6. **專題文章 (Blog)**：兒少權益與學習心得隨筆（準備中）。
7. **聯絡資訊 (Contact)**：留言筆記表單與 `tofu1201.me` 複製功能。

---

## 🛠️ 技術棧 (Tech Stack)

- **前端框架**：React 18 + TypeScript + Vite
- **CSS 樣式系統**：Tailwind CSS + Vanilla CSS (手帳動態與質感)
- **圖示庫**：Lucide React Icons
- **Serverless API / 後端**：Cloudflare Pages Functions (`/api/contact`)
- **部署平台**：Cloudflare Pages (自動化 CI/CD + 自訂網域 SSL)

---

## 🚀 本地開發與建置 (Local Development)

### 1. 複製儲存庫
```bash
git clone https://github.com/tofu1201/tofu1201.me.git
cd tofu1201.me
```

### 2. 安裝依賴套件
```bash
npm install
```

### 3. 啟動本地開發伺服器
```bash
npm run dev
```
開啟瀏覽器訪問 `http://localhost:5173/`。

### 4. 建置生產環境版本 (Production Build)
```bash
npm run build
```

---

## ☁️ 部署至 Cloudflare Pages

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/) ➡️ **Workers & Pages** ➡️ **Create application** ➡️ **Pages** ➡️ **Connect to Git**。
2. 選擇 GitHub 儲存庫 `tofu1201/tofu1201.me`。
3. **Build settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. 於 **Custom Domains** 綁定自訂網域 `tofu1201.me`。
5. (可選) 於 **Environment variables** 新增 `DISCORD_WEBHOOK_URL` 或 `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` 接收網站留言實時通知！

---

## 📄 授權條款 (License)

Copyright &copy; 2026 Tofu ([tofu1201.me](https://tofu1201.me)). All Rights Reserved.
