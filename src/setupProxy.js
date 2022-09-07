const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware("/create.php", {
            target: "http://ec2-3-89-196-32.compute-1.amazonaws.com/dashboard/api",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/read.php", {
            target: "http://ec2-3-89-196-32.compute-1.amazonaws.com/dashboard/api",
            changeOrigin: true
        })
    )
    app.use(
        createProxyMiddleware("/delete.php", {
            target: "http://ec2-3-89-196-32.compute-1.amazonaws.com/dashboard/api",
            changeOrigin: true
        })
    )
}