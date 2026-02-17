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
## ブランチ運用について
* developブランチから任意のブランチを作成し、開発を行う  
  ``` git checkout -b 各開発に沿ったブランチ名(※1) ```
  
  ※1: ブランチ名命名規則に関しては以下  
  　　 新規：N 修正：M 削除：D  
      画面：scr 機能：func その他：etc  
  　　 _画面名 or 機能名 or 対応作業名  
  　　 例）ダッシュボード画面の新規開発の場合：　``` N_scr_dashboard ```  
* また、作業中等によりまだマージしたくない時は ``` [WIP]ブランチ名 ``` とする  
  ※ WIPとは・・・Work In Progress(開発途中)という意味
## アプリ（バックエンド、フロントエンド、DBコンテナ)起動方法
* .env.exampleをコピーし、.envにリネーム
* **【MacOSの場合】** ``` colima start --memory 2 --cpu 2 --disk 10 ``` コマンドを実行し、colima経由でdockerを起動(起動リソースを最小限にして起動)
* frontendフォルダに移動し、npm run dev コマンドを実行
  以上。
## PgAdmin起動方法
上記の npm run dev でPgAdminコンテナも起動済みのため、URL: ``` http://localhost:8081 ``` へアクセス  
``` dockerーcompose.yml ``` に記載している ``` PGADMIN_DEFAULT_EMAIL ``` と ``` PGADMIN_DEFAULT_PASSWORD ``` に記載されている内容を入力してログイン


