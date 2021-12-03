# Netflix Clone App

React×TypeScript, TMDB API を用いた Netflix のクローンアプリ。\

参考記事\
<https://zenn.dev/gunners6518/books/4c4672f32dd100>

---

- [Netflix Clone App](#netflix-clone-app)
  - [環境構築](#環境構築)

## 環境構築

- Docker で Node.js 環境を作成し、コンテナ内で create-react-app する。

```sh
# cra
npx create-react-app front --template typescript

# axios install
npm i axios

# dotenv install
npm i dotenv
```

- TMDB のアカウント登録、API キーの発行を行う。\
  <https://www.themoviedb.org/>
