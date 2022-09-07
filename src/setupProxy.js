const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware("/api/create.php", {
            target: "https://junior-dev-test-api.000webhostapp.com",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/api/read.php", {
            target: "https://junior-dev-test-api.000webhostapp.com",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/api/delete.php", {
            target: "https://junior-dev-test-api.000webhostapp.com",
            changeOrigin: true
        })
    )
}