# AI-TEST GitHub Pages Preview

这个目录是纯静态预览包，适合直接上传到 GitHub Pages、Netlify、Vercel Static 或任意静态托管服务。

## 上传内容

上传本目录内的所有文件：

- `index.html`
- `styles.css`
- `script.js`
- `static-api.js`
- `.nojekyll`
- `vendor/xlsx.full.min.js`

不需要上传根目录的 `server.js`、`node_modules`、`data`、`package-lock.json`。

## 交互能力

页面中的新增、编辑、删除、传感器录入、工程细胞导入、系统管理等交互会写入浏览器 `localStorage`。刷新页面后仍会保留；清空浏览器站点数据后会恢复默认演示数据。

## 本地预览

可以直接打开 `index.html`，也可以用任意静态服务预览：

```powershell
npx http-server . -p 3002
```
