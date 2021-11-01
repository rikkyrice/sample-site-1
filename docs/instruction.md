# instruction

## vue

### create project

プロジェクトの作成

```bash
# vue-cliのインストール
npm install -g @vue/cli

# プロジェクト作成
vue create ${project-name}
# 1. Please pick a preset -> Manually select features
# 2. Check the features needed for your project -> Babel, TypeScript, Router, Vuex, Linter/Formatter
# 3. Choose a version of Vue.js -> 2.x
# 4. Use class-style component syntax? -> y
# 5. Use Babel alongside Typescript -> n
# 6. Use History mode for router? -> y
# 7. Pick a linter /formatter config -> ESLint + Prettier
# 8. Pick additional lint features -> Lint on save
# 9: Where do you prefer placing config for Babel... -> In dedicated config files
# 10: Save? -> n
```

* Babel: ES6等の新しい文法をES5に変換してくれるコンパイラ。基本的に付けるとよい。
* progressive web app (pwa) support: モバイル向けWebサイトをGooglePlayストアなどで見かけるスマートフォン向けアプリのように使える仕組み。モバイル化する必要が無ければいらない。
* Router: SPA構築時にルーティング制御するためのプラグイン
* Vuex: データの管理を一元化するためのライブラリ。状態管理ライブラリ。
* CSS Pre-Processor: Vueで共通のSCSSを読み込むためのもの
* Linter/Formatter: vueのスタイルガイドを定義するもの。
* Unit Testing: unit test
* E2E Testing: E2E test
* Use Babel alongside TypeScript: モダンブラウザ以外の対応も考えている場合はyを入力
* historyモード: urlが綺麗になる(FYI: <https://qiita.com/kozzzz/items/af9ad63fa70d4724cc2a>)
* ESLint: 間違った書き方や、文法エラーを知らせてくれる
* Prettier: インデントなどを正して見やすいコードにフォーマットしてくれる。
* SPA: 最初のリクエストで受け取ったHTML(index.html)を使いまわし、URLに対応したページをJavascriptで動的に作成する方法。
* MPA: SPAに対してURLに対応したHTMLをサーバーが返してくれる従来の方式

プロジェクトの実行

```bash
cd ${project-name}
yarn serve
```

#### style.scss

src直下に `style.scss` を作成する。  
サイト全体のスタイルシートになる。

#### vuetify

[Vuetify](https://vuetifyjs.com/ja/)とは、Vue.jsのUIライブラリーのこと。Googleが提唱した[マテリアルデザイン](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%86%E3%83%AA%E3%82%A2%E3%83%AB%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3)にの取っており、直感的で使いやすいコンポーネントを利用できる。

デザインの知識が全くなくても、簡単にUIがつくれちゃう。  
Vue2.xにしか対応していない。

以下を実行して、プロジェクトにVuetifyを読み込ませる

```bash
vue add vuetify
# 1. Defaultを選択
```

勝手にApp.vueが書き換わるので、\<template>タグ内を以下に修正

```vue
<template>
  <div id="app">
    <v-app>
      <v-main id="main">
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>
```

また、\<script>タグ内のコードを以下に修正。

```vue
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
```

また、以下を一番下に挿入して、`style.scss` を読み込ませる。

```vue
<style lang="scss">
@import "@/style.scss";
#app {
  font-family: Lato, "Noto Sans Japanese", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666;
  min-height: 100vh;
}
#main {
  max-height: 100vh;
}
</style>
```

#### Mixin

次にミックスインを定義。  
これは、Vueコンポーネントに再利用可能で柔軟性のある機能を持たせるためのもの。  
ユーティリティクラスみたいなもので、例えばフォントサイズを画面によって替えるための最適な関数を定義したりする。

`src` ディレクトリの配下に、`mixins` ディレクトリを作って、そこに `utilMixin.ts` を定義する。  
`utilMixin.ts` は `sample/utilMixin.ts` をコピペ。

また、今ブラウザでページを表示しているデバイスが何かを把握するための処理を追加する。  
`src` ディレクトリの配下に、`models/types` ディレクトリを作って、そこに `deviceType.ts` を追加する。
`deviceType.ts` は `sample/deviceType.ts` をコピペ。

### Atomic Design

[Atomic Design](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B) とは、パーツ・コンポーネント単位で定義していくUIデザイン手法のこと。

パーツを最小単位「Atoms(原子)」から定義していき、「molecules(分子)」、「organisms(生体)」、「templates(テンプレート)」、「pages(ページ)」の順にデザインしていく手法。

サイトのレイアウトを決めたら、それをまずはパーツごとに分解していく。  
これ以上パーツにできないってところまでできたら、それが `原子` になる。(例えばボタンなど)  

`原子` を組み合わせて、少し大きな `分子` レベルのパーツを作る。(例えばカードなど)

`生体` は `原子`、`分子` を組み合わせてできたパーツに動きを与える。(例えば応募フォームなど)  
ちょっとイメージつかないかもだけど、API連携して、データを取ってきたりするのもこの生体が担う。

`テンプレート` は `原子`、`分子`、`生体` を組み合わせてワイヤーフレームを作る。  
ここではまだデータを伴うデザインをしないことがポイント。

`ページ` は、テンプレートにデータを挿入していき、具体的なWebサイトのページを作る。  
ここで `原子` や、`分子`、場合によっては `生体` に必要なデータをAPIから取ってきたりもする。

#### atoms

まずは、`src/components` 配下に `atoms` ディレクトリを作成する。  
その下に `NormalButton.vue` を作成する。  
コードは `sample/NormalButton.vue` を参考に。
