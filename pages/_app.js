// _app.jsの中身...共通で使う動的な部分
// https://tyotto-good.com/nextjs/document-app

// // typescriptの書き方
// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// globals.cssを読み込むだけで全ページに適用される
import '../styles/globals.css';
// ↓typescriptの型指定の記法
// import { AppProps } from 'next/app';

//pagePropsは、getInitialPropsメゾット(pagesのレンダリング前にサーバサイドで実行)で色んなとこ(外部APIとか)から取得したデータを含むオブジェクト
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;