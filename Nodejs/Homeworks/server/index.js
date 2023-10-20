const http = require("http");



const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h2>Index Sayfasına Hoşgeldiniz.</h2>");
    } else if (url === "/about") {7
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h2>about Sayfasına Hoşgeldiniz.</h2>");
    } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h2>contact Sayfasına Hoşgeldiniz.</h2>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h2>404 Sayfa Bulunamadı.</h2>");
    }

    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});