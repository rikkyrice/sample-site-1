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

### Router

SPAでは、一つのHTMLをJavascriptを使って動的に変化させてページのレイアウトを変えていくわけだが、そのレイアウトを反映させる識別として `router` がある。

例えば、`/home` 識別子を与えることで、 `HOME` レイアウトを反映させるなど。

`router` ディレクトリに `router.ts` を作り、その定義を書いていく。  
`router.ts` のコードは `sample/router.ts` を参考。
また、 `router` ディレクトリに `pages.ts` を作り、そこに識別子のenumを定義していく。  
こうすることで、コードの可読性が上がったり、メンテナンスしやすくなる。  
`pages.ts` のコードは `sample/pages.ts` を参考。

すでに `index.ts` が定義されているが、必要ないコードなども含まれているので、 `sample/index.ts` を参考にコードを書き換える。

`router.ts` には `@/components/pages/PlaygroundView.vue` が定義されているので、これを作る。(@は `src` ディレクトリを表す)  
`PlaygroundView.vue` のコードは `sample/PlaygroundView.vue` を参考。

### Atomic Design

[Atomic Design](https://atomicdesign.bradfrost.com/) とは、パーツ・コンポーネント単位で定義していくUIデザイン手法のこと。

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

参考URL:

* [Atomic Design はなぜ難しいか？どうやって難しさを解消するか](https://zenn.dev/sterashima78/articles/0cf4bb52112c7b)
* [Atomic Design を分かったつもりになる - DeNA Design](https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B)

#### atoms

まずは、`@/components` 配下に `atoms` ディレクトリを作成する。  
その下に `BlockButton.vue` を作成する。  
コードは `sample/BlockButton.vue` を参考に。

早速このBlockButtonをPlaygroundに配置してみましょう。

まずは、 `PlaygroundView.vue` を開き、 `BlockButton.vue` の `import文` を書く。

```vue
import BlockButton from "@/components/atoms/BlockButton.vue";
```

それから、componentsにインポートしたBlockButtonを追加。

```vue
@Component({
  components: {
    BlockButton,
  },
})
```

これでBlockButtonが使えるようになる。  
次に、このBlockButtonを配置する。  
`templateタグ` の `div` タグの中に以下を書いていく。

```vue
<block-button
  label="ボタン"
  style="width: 100px;"
/>
```

これで、 [http://localhost:8080/pg] にアクセスるすると、ボタンが表示されているはず。

基本的にvueのコンポーネント配置はこれの繰り返し。

##### コードの説明

Vueで使われるコンポーネントは以下の3要素から成り立つ。

* template: htmlライクで書かれるコンポーネントの形を定義する部分
* script: typescript(javascript)で書かれるコンポーネントのデータと振る舞いを定義する部分
* style: cssで書かれるコンポーネントの見た目を定義する部分

コードの順番はtemplate -> script -> styleだが、scriptから解説する。

###### script

scriptは、主にコンポーネントの `データと振る舞い` を定義する。  
データとは、コンポーネント内で表示する文字であったり、状態であったり、情報で合ったりである。  
例えば、ボタンコンポーネントがあったとして、そのボタンは「送信ボタン」だったり、「検索ボタン」だったり、場合によって変わる。
そこでラベルというデータをボタンコンポーネントに定義してあげて、ラベルによって表示する名前を替えられるようにすれば、そのボタンコンポーネントは「送信ボタン」にも「検索ボタン」にもなれるのである。

ボタンはボタンだけど、与えるデータによって、そのコンポーネントの属性を替えられるようにできるわけだ。

振る舞いとは、コンポーネントの動きの部分で、イベントや、操作、データの更新などによって自身の状態を変化させたり、行動を起こしたりする。  
例えば、ボタンコンポーネントが「送信ボタン」だったら、フォームが完璧に埋められていない状態で送信ボタンが押されるのは避けたいから、自身を物理的に押せない状態に変化させたり、押された時に入力されたフォームをなんらかの外部システムへ送信したりする。

そういった、そのコンポーネントがあらゆる外的要因や内部データによって、どう自分を表現するかを定義するのが、`script`  の責務である。

###### template

templateは比較的イメージしやすいと思うが、まさにHTMLを担う部分である。  
少しだけ違うのが、そこにデータ挿入が伴ってくる点である。  

基本的にそのコンポーネントがどういう形と配置がされているかを定義する部分であるが、そこに必要になってくるのが、データ挿入である。  
データは `script` 内で定義されており、その定義されたデータを自身のどの部分で表示するか、どの部分で反映されるかを記述する必要がある。

###### style

styleもcssなのでイメージしやすい。  
ここはそのままそのコンポーネントがどんな色をしていて、見る人にどう見えるようにするか、みたいなのを書いていく。  
基本的に `template` と `script` で大体のコンポーネントの形が決まるので、`style` の部分はごちゃごちゃ書かないことが一般的。

###### 各種説明

script内部では、主に以下を定義する。

* プロパティ
* 変数
* メソッド

プロパティは、コンポーネントを配置する際に、親コンポーネントから受け取るデータを定義する。  
例えば、ボタンコンポーネントを送信フォームのページに配置したいとなった時に、そのボタンは「送信ボタン」として機能させたいので、`label` というプロパティを定義し、送信フォームコンポーネントにそのボタンを配置する際に、「送信」というデータを与えてあげたりする。  
定義の仕方は以下。

```typescript
// もっとも簡単な定義の仕方。
// stringは文字列を受け取るプロパティ。他にboolean(真偽値)、number(数値)等がある。
@Prop() label!: string;

// default値を決定する定義の仕方。
// 親コンポーネントからデータを与えられなかった場合、heightには36pxが入る。
// default値が明示的に指定されない場合、stringは空文字、booleanはfalse、numberは0が初期値として入る。
@Prop({ default: '36px' }) height!: string;
```

変数は、そのコンポーネント内でのみ定義され使用されるものである。
定義の仕方は以下。

```typescript
// 型を指定せずとも勝手に型推論してくれる。
// 以下は初期化してる例
baseColor = '#666666';

// 以下は定義だけしてる例
baseColor!: string;
```

メソッドは、そのコンポーネントでのみ定義され使用される処理を伴う宣言のことである。
メソッドには幾つか種類がある。

* get: getメソッド。中で参照している値が変わると毎回実行されて値をhtmlに返す。
* created: インスタンス初期化時、DOMが生成される前に呼ばれるメソッド
* mounted: インスタンス初期化時、DOMが生成された後に呼ばれるメソッド
* 普通のメソッド: 普通に定義する。class内部で不定期に呼ばれるメソッド

例えば、`BlockButton.vue` では以下のようなメソッドが定義されている。

```typescript
get _color() {
  return this.outlined && !this.textOnly
    ? 'white'
    : this.primary
    ? this.primaryColor
    : this.secondary
    ? this.secondaryColor
    : this.baseColor;
}
```

これは、コンポーネントのデータの一つである、`outlined` がtrueでかつ、`textOnly` がfalseの場合、`white` という文字列を返すし、そうじゃなかったら、`primary` というbooleanのプロパティを見て、`primaryColor` を返す...という意味。  
実際にこのメソッドが使われているのは、`template` の方で、`v-btnタグ` の `color` プロパティである。  
`color` プロパティは、`outlined がtrueでtextOnlyがfalse`、つまり `ボタンの外枠があって文字だけじゃない` 時に、`white` を受け取る。  
`v-btnタグ` の `color` プロパティは[このサイト](https://vuetifyjs.com/ja/api/v-btn/#props)によると、ボタンの背景色を決められる用である。  
すなわち、`white` を受け取るということは、ボタンの背景色が白になるということだ。  
逆に `outlined` にfalse、`textOnly` にtrueをセットするとどうなるか、試してみると面白いかも。

template内部では、上記で説明したように、scriptで定義したデータやメソッドを挿入して具体的に形を作っていく。  
また、[Vuetify](https://vuetifyjs.com/ja/) というフレームワークを利用すると、既におしゃれで拡張性の高いコンポーネントが自由に使える。  
例えば、`v-btn` は、それ自体に色んなプロパティが定義されていて、そこに値をセットしていくだけでモダンなボタンを作ることができる。  
`BlockButton` はこの `v-btn` を、自分が作りたいWebサイトに見合ったボタンに拡張している。

`v-btn` や `v-icon` がどういう振る舞いをするかは、Vuetifyのサイトを見てみるとよい。

また、templateでは、`v-if` や `v-for` などの処理も書ける。  
`v-if` は、対象の値がtrueなら、表示するし、falseなら表示しない。
`v-for` は対象のコンポーネントを、繰り返し表示することができる。
