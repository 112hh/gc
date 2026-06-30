const http = require("http");
const fs = require("fs");
const path = require("path");
const root = process.cwd();
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};
const server = http.createServer((req, res) => {
  const reqPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const rel = reqPath === "/" ? "index.html" : reqPath.replace(/^\//, "");
  const file = path.normalize(path.join(root, rel));
  if (!file.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": mime[path.extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
});
server.listen(4173, "127.0.0.1", () => console.log("http://127.0.0.1:4173"));
setInterval(() => {}, 1 << 30);
