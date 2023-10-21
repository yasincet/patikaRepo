const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.path === '/') {
        ctx.status = 200;
        ctx.type = 'html';
        ctx.body = '<h1>Index sayfasına hosgeldiniz.</h1>';
    } else if (ctx.path === '/about') {
        ctx.status = 200;
        ctx.type = 'html';
        ctx.body = '<h1>Hakkımda sayfasına hosgeldiniz.</h1>';
    } else if (ctx.path === '/contact') {
        ctx.status = 200;
        ctx.type = 'html';
        ctx.body = '<h1>İletişim sayfasına hosgeldiniz.</h1>';
    } else {
        ctx.status = 404;
        ctx.type = 'html';
        ctx.body = '<h1>404 sayfa bulunamadı.</h1>';
    }
});



const port = 3000;


app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});