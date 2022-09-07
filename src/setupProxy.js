const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware("/delete.php", {
            target: "https://junior-dev-test-api.000webhostapp.com/api",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/create.php", {
            target: "https://junior-dev-test-api.000webhostapp.com/api",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/read.php", {
            target: "https://junior-dev-test-api.000webhostapp.com/api",
            changeOrigin: true
        })
    )
}