var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
    server: {
        middleware: {
            1: proxyMiddleware('/example-api', {
                target: 'http://api.example.com',
                changeOrigin: true,
                pathRewrite: {
                '^/news-at-api': '/api'
                }
            })
        }
    }
};
