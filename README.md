# KOCSKIN 社群圖片生成工具

## 使用方式

直接用瀏覽器開啟 `index.html` 即可使用。

## Cloudflare Workers 設定（Notion 串接用）

1. 前往 [Cloudflare Workers](https://workers.cloudflare.com/)
2. 建立新 Worker
3. 把 `notion-proxy-worker.js` 的內容貼入
4. 部署，取得 Worker URL（格式：`xxx.workers.dev`）
5. 把 Worker URL 填入工具的「Notion Proxy URL」欄位

## GitHub Pages 部署

1. 把所有檔案上傳到 GitHub repo
2. Settings → Pages → Branch: main → Save
3. 網址：`https://welsonchen.github.io/kocskin-tool`
