module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/', //  ./表示相对目录 /表示绝对目录
    // 基本路径
    outputDir: 'dist',
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: true,
        // css预设器配置项
        loaderOptions: {
            css: {
                // local是本地路径，相对src；name是组件名；hash根据base64生成，取前八位；
                localIdentName: '[local]_[name]_[hash:base64:8]',
                camelCase: 'only'
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: true
    },


    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 8080,
        https: false,
    },
    // 配置多入口
    pages: {
        index: {
            // page 的入口
            entry: 'src/conf/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        other: {
            // page 的入口
            entry: 'src/conf/other.js',
            // 模板来源
            template: 'public/other.html',
            // 在 dist/index.html 的输出
            filename: 'other.html',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'other']
        }
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/conf/main.js'
    }
};
