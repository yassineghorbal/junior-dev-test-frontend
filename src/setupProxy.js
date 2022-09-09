const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware("/create", {
            target: "https://junior-dev-test-api.000webhostapp.com/api",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/read", {
            target: "https://junior-dev-test-api.000webhostapp.com/api",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/delete", {
            target: "https://junior-dev-test-api.000webhostapp.com/api",
            changeOrigin: true
        })
    )
}