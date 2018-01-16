'use strict';
module.exports = {
    server: { // dev server 配置
        port: 3000,
        host: '0.0.0.0',
        proxy: {
            "/api": {
                "target": {
                    "host": "localhost",
                    "protocol": 'http:',
                    "port": 80
                },
                // ignorePath: true,
                changeOrigin: true,
                secure: false
            }
        }
    },
    apiUrl: "/api" // api Base 地址配置
};