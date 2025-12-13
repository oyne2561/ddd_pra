## ハンズオン記事
https://zenn.dev/yamachan0625/books/ddd-hands-on/viewer/chapter7_tactical_design

--------

`npx` は、Node.js に同梱されているコマンドラインツールです。

## `npx` とは

**`npx` = Node Package eXecute**

主な機能：

1. **ローカルの `node_modules` からコマンドを実行**
   - プロジェクトの `node_modules/.bin/` にインストールされたコマンドを自動的に探して実行します
   - `ts-node` のようにローカルにインストールされたツールを、フルパスを書かずに実行できます

2. **一時的にパッケージを実行**
   - パッケージをインストールせずに、一時的にダウンロードして実行できます
   - 例: `npx create-react-app my-app` のように、グローバルインストール不要で実行できます

## 具体例

```bash
# ❌ これだとエラー（ローカルにインストールされているため）
ts-node src/sayHello.ts

# ✅ npx を使うと、node_modules/.bin/ から自動的に探して実行
npx ts-node src/sayHello.ts

# これと同じ意味
./node_modules/.bin/ts-node src/sayHello.ts
```

## なぜ便利か

- グローバルインストール不要
- プロジェクトごとに異なるバージョンを使える
- パスを覚える必要がない

Node.js をインストールしていれば、通常 `npx` も使えます（Node.js 5.2.0以降に同梱）。

----

## testコマンド

```bash
# 特定のテストファイルを実行
npx jest src/sayHello.test.ts

# または、すべてのテストを実行
npx jest

# または、package.json にスクリプトを追加して
npm test
```