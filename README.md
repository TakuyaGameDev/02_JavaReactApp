# Java+TypeScript アプリ(勉強用)
## 環境
* フロント
  * TypeScript(React.js)
  * vitest(自動テストランナー)
* バック
  * Java(Spring Boot 4.0.2)
  * Flyway(DB Migration)
  * JUnit(自動テストフレームワーク)
  * jacoco(コードカバレッジツール)
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
* frontendフォルダに移動し、
* **【※初回のみ 】** npm installコマンドで必要なパッケージをインストール
* npm run dev コマンドを実行
  以上。
## PgAdmin起動方法
上記の npm run dev でPgAdminコンテナも起動済みのため、URL: ``` http://localhost:8081 ``` へアクセス  
``` dockerーcompose.yml ``` に記載している ``` PGADMIN_DEFAULT_EMAIL ``` と ``` PGADMIN_DEFAULT_PASSWORD ``` に記載されている内容を入力してログイン
## 自動テスト実施方法
※ フロントエンドとバックエンドに分けて記載

### フロントエンド
* テストコードを ``` frontend/test ``` 配下に ``` frontend/src ``` に作成したコンポーネントと同様の配置で ``` *.test.tsx ``` というファイル名で作成
  例) ``` frontend/src/components/Header.tsx ``` を作成してその自動テストコードを作成したい場合  
   　 ``` frontend/test/components/Header.test.tsx ``` を作成して、そのファイルに自動テストコードを記載していく
* テストコード作成後、ターミナルにて ``` npm run test:coverage ``` を実行し自動テスト起動
* 自動テスト終了後、``` 1, ターミナルでの確認 ```と``` 2, カバレッジファイルでの確認 ``` を行う
  ``` 1, ターミナルでの確認 ```
  以下のような表示になればOK↓
  <img width="790" height="315" alt="スクリーンショット 2026-02-20 10 50 48" src="https://github.com/user-attachments/assets/9faf1b22-4254-484b-9da7-a89d54595ad9" />
  ※ もしテストコードに何かしらエラーがあり、テストが正常終了しなかった場合はエラーが発生した該当箇所がターミナルに表示される

  ``` 2, カバレッジファイルでの確認 ```
  カバレッジファイルは以下に作成される(2度目以降は既存のカバレッジファイルに対しての上書きとなる)
  ``` frontend/coverage/index.html ```
  イメージはこんな感じ↓
  <img width="1120" height="183" alt="スクリーンショット 2026-02-20 10 56 18" src="https://github.com/user-attachments/assets/fb70caba-bb6f-4505-b898-3de626e8f233" />
  上記にて、確認を行いたいファイルの場所まで辿っていく
  <img width="816" height="452" alt="スクリーンショット 2026-02-20 10 57 37" src="https://github.com/user-attachments/assets/ba72a679-0771-48e5-9e3c-013eb8441f4e" />
   * 緑　：実行された
   * 赤　：未実行
   * 黄色：一部実行された(if文の未網羅等)

### バックエンド
* フロントエンドでの作業同様、テストコードを``` backend/src/test ```配下に各クラス毎のテストファイルを新規で作成する
  例) ``` backend/src/main/java/com/example/app/controller/TestController.java ``` を作成してその自動テストコードを作成したい場合
  　  ``` backend/src/test/java/com/example/app/controller/TestControllerTest.java ``` を作成して、そのファイルに自動テストコードを記載していく
* テストコード作成後、ターミナルにて ``` ./grdlew test ``` を実行し自動テスト起動
* 自動テスト終了後、``` カバレッジファイルでの確認 ``` を行う
  ``` カバレッジファイルでの確認 ```
  以下のような表示になればOK↓
  <img width="1088" height="168" alt="スクリーンショット 2026-02-20 11 26 37" src="https://github.com/user-attachments/assets/6000f4ed-20b9-4e5b-a1d7-615da1ee0164" />
   * 緑　：実行された
   * 赤　：未実行
   * 黄色：一部実行された(if文の未網羅等)



