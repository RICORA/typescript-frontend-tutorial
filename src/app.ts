// "http"という名前のライブラリを使えるようにしている
import * as http from "http";

// サーバーが通信を待つポート
const port = 8000;

// httpサーバーを作成する
const server = http.createServer(
    (request, response) => {
        // 応答する関数
        response.setHeader("Content-Type", "text/plain; charset=utf8");
        response.end("こんにちは！");
    }
);

// サーバーを起動してリクエストを待ち受け状態にする
server.listen(port);

// コンソールにメッセージを表示する
console.log(`http://localhost:${port}`);