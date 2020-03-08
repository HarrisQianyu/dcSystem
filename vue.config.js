module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        port: 8082, // 端口号
        host: 'localhost'
        // proxy: {
        //     '/api':{
        //         target:'http://localhost:8082',
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '/api':'http://localhost:8082'
        //         }
        //     }
        // }
    }
}