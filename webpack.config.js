// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");

module.exports = {
    // development or production
    mode: "development",

    resolve: {
        extensions: [".ts", ".js"],
    },

    // エントリーポイントの設定
    entry: "./src/main.ts",

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "ts-loader"
            }]
        }]
    },

    // 出力の設定
    output: {
        // 出力するファイル名
        filename: "bundle.js",

        // 出力先のパス
        path: path.join(__dirname, "./public")
    }
};