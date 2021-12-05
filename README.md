# Netflix Clone App

React×TypeScript, TMDB API を用いた Netflix のクローンアプリ。

参考記事\
<https://zenn.dev/gunners6518/books/4c4672f32dd100>

---

- [Netflix Clone App](#netflix-clone-app)
  - [環境構築](#環境構築)
    - [環境変数の読み込みに関して](#環境変数の読み込みに関して)
    - [トラブルシューティング](#トラブルシューティング)

## 環境構築

- Docker で Node.js 環境を作成し、コンテナ内で create-react-app する。

```sh
# cra
npx create-react-app front --template typescript

# axios install
npm i axios

npm i movie-trailer

npm i react-youtube
```

- TMDB のアカウント登録、API キーの発行を行う。\
  <https://www.themoviedb.org/>

### 環境変数の読み込みに関して

下記記事を参考。\
<https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e>

### トラブルシューティング

- scss ファイル をインポートしたら、Cannot find module 'sass'で怒られた

  > ```sh
  > npm install sass
  > ```

  これで解決した。
