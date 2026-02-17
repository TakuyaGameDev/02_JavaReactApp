# Java+TypeScript アプリ(勉強用)
## 環境
* フロント
  * TypeScript(React.js)
* バック
  * Java(Spring Boot 4.0.2)
  * Flyway(DB Migration)
* DB
  * PostgreSQL
  * PgAdmin4
* その他
  * Docker Engine(Macの場合、colimaを使用しての起動)
## アプリ（バックエンド、フロントエンド、DBコンテナ)起動方法
* .env.exampleをコピーし、.envにリネーム
* **【MacOSの場合】** ``` colima start --memory 2 --cpu 2 --disk 10 ``` コマンドを実行し、colima経由でdockerを起動(起動リソースを最小限にして起動)
* frontendフォルダに移動し、npm run dev コマンドを実行
  以上。
## PgAdmin起動方法
上記の npm run dev でPgAdminコンテナも起動済みのため、URL: ``` http://localhost:8081 ``` へアクセス  
``` dockerーcompose.yml ``` に記載している ``` PGADMIN_DEFAULT_EMAIL ``` と ``` PGADMIN_DEFAULT_PASSWORD ``` に記載されている内容を入力してログイン


