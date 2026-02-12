# Sik7 Mode - 我的打鼓學習旅程

這是一個用 Next.js 建立的靜態網站，用來記錄我的打鼓學習歷程，包括 cover 影片和喜歡的音樂。

## 網站結構

- **首頁** - 展示最新的影片和音樂推薦
- **About** - 自我介紹和學習歷程
- **Video** - YouTube 打鼓 cover 影片列表和詳細頁面
- **Music** - 喜歡的歌曲和播放清單

## 技術棧

- Next.js 16 with TypeScript
- Tailwind CSS
- 靜態站點生成 (SSG)
- 響應式設計

## 開始使用

### 安裝依賴
```bash
npm install
```

### 運行開發服務器
```bash
npm run dev
```
打開 [http://localhost:3000](http://localhost:3000) 查看網站。

### 構建靜態站點
```bash
npm run build
```

### 導出靜態文件
```bash
npm run export
```
生成的靜態文件會在 `out` 目錄中，可以部署到任何靜態主機服務。

## 內容管理

### 添加新影片
1. 在 `src/app/video/page.tsx` 中添加影片數據
2. 在 `src/app/video/[id]/page.tsx` 中添加對應的詳細信息
3. 添加縮圖到 `public/images/` 目錄

### 添加新歌曲
1. 在 `src/app/music/page.tsx` 中添加歌曲數據
2. 添加專輯封面到 `public/images/` 目錄
3. 更新 Spotify/Apple Music 連結

### 更新 About 頁面
編輯 `src/app/about/page.tsx` 文件來更新個人介紹內容。

## 部署

這個網站可以部署到：
- Vercel (推薦)
- Netlify
- GitHub Pages
- 任何支援靜態文件的主機

## 自定義

### 修改主題色彩
在 Tailwind CSS 配置中修改色彩方案。

### 添加新頁面
在 `src/app/` 目錄下創建新的文件夾和 `page.tsx` 文件。

### 更新導航
編輯 `src/components/Navigation.tsx` 來添加或修改導航連結。

## 學習資源

- [Next.js 文檔](https://nextjs.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [TypeScript 文檔](https://www.typescriptlang.org/docs/)
