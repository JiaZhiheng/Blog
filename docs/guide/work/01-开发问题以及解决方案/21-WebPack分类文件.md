# WebPac分类文件

## 项目结构

以下是推荐的项目结构：

```sh
webpack-classify-outputs/
├── src/
│   ├── index.js
│   ├── style.css
│   └── image.png
├── dist/
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

- src: 存放源代码的目录
  - index.js: 主入口文件
  - style.css: CSS 样式文件
- image.png: 示例图片文件
- dist: 存放打包输出文件的目录
- webpack.common.js: 公共配置
- webpack.dev.js: 开发环境配置
- webpack.prod.js: 生产环境配置

## 配置 Webpack

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // 入口文件
  module: {
    rules: [
      {
        test: /\.css$/, // 处理 CSS 文件
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // 处理图片文件
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', // 输出目录
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // 将 CSS 文件输出到 css 目录
    }),
  ],
  output: {
    filename: 'js/[name].bundle.js', // 将 JS 文件输出到 js 目录
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清理旧的打包文件
  },
};
```