# AIと組み合わせよう

## この章のゴール

- LINE BotとAzure Face APIを組み合わせて、感情分析Botを作成する


### 完成イメージ

<iframe width="414" height="736" src="https://www.youtube.com/embed/5tFfPfBr-HU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h2>ここからは話を聞くタイムです</h2>

<a href="https://gyazo.com/6529781dd996c64228080c383aa4a325"><img src="https://i.gyazo.com/6529781dd996c64228080c383aa4a325.png" alt="Image from Gyazo" width="500"/></a>

## Microsoft Azure とは？

> 公式サイトはこちら：https://azure.microsoft.com/ja-jp/

ざっくり説明します。

- Microsoftが提供しているクラウドサービスのこと
- 200以上のサービスが提供されている
- AI・機械学習系のサービスも充実している

今日はAzureのサービスの内、AIを提供しているサービスである`Cognitive Service - Face`を利用します。

## Cognitive Service - Faceの紹介

> 公式ドキュメントはこちら：https://azure.microsoft.com/ja-jp/services/cognitive-services/face/

`Cognitive Service - Face`を利用すると、3つの機能を使うことができます。

- 顔検出
- 顔認証
- 感情認識

それぞれについて簡単に説明します。

### 顔検出

<a href="https://gyazo.com/96883a0d6cec3835d1dd226f2787122f"><img src="https://i.gyazo.com/96883a0d6cec3835d1dd226f2787122f.png" alt="Image from Gyazo" width="1308"/></a>

> 1人以上の人間の顔と各種の属性(年齢、感情、ポーズ、笑顔、顔ひげなど)を検出できます。  
> また、画像内の顔ごとに27個の特徴点が抽出されます。

### 顔認証

<a href="https://gyazo.com/b95cfdb0061bed0eb926aa9340247015"><img src="https://i.gyazo.com/b95cfdb0061bed0eb926aa9340247015.png" alt="Image from Gyazo" width="1081"/></a>

> 2つの顔が同一人物のものである可能性を検証し、信頼度スコアを取得します。

### 感情認識

<a href="https://gyazo.com/94e6036245e1a74871c1720903da2455"><img src="https://i.gyazo.com/94e6036245e1a74871c1720903da2455.png" alt="Image from Gyazo" width="1286"/></a>

> 怒り、軽蔑、嫌悪感、恐怖、喜び、中立、悲しみ、驚きなど、認識された表情を検出します。

`Cognitive Service - Face`は、複雑なプログラミングをせずに利用できる**API**として提供されています。

## APIとは？

APIとは、`Application Programming Interface`の略です。

APIが提供されているサービスでは、複雑なプログラミングを行うことなく機能を利用できるため、簡単に自身が開発しているプロダクトに組み込むことができます。

// TODO イメージ

現在、色々なサービスがAPIを提供しています。  
例えば、

- Yahoo!天気 (https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/weather.html)
- YouTube (https://developers.google.cn/youtube/iframe_api_reference?hl=ja)
- Twitter (https://developer.twitter.com/ja/docs)
- Facebook (https://developers.facebook.com/docs/apis-and-sdks?locale=ja_JP)

などなど。

> すぐに使えるAPIまとめ：https://protoout.studio/posts/public-apis-api-get

では、無料で利用できるAPIが100個以上紹介されています。

## ここまでのまとめ

- Azureとは、Microsoftが提供しているクラウドサービスのこと。
- AzureのAI・機械学習系のサービスの1つとして、**感情分析AI**が提供されている。
- 感情分析AIは**API**として提供されているので、簡単にプロダクトに組み込める。

<h2>ここからは手を動かすタイムです</h2>

<a href="https://gyazo.com/3600fb35b96dcd212cc0d4b6f3240e74"><img src="https://i.gyazo.com/3600fb35b96dcd212cc0d4b6f3240e74.png" alt="Image from Gyazo" width="500"/></a>

## Face APIを使ってみよう

> このセクションの全体の流れ  
> TODO

Azureポータルを開きます。  
https://portal.azure.com/

### Azureポータルにログインする

ログインし、以下のようなページが表示されればOKです。

<a href="https://gyazo.com/9c41bc6e713573818c8a2086a6e204be"><img src="https://i.gyazo.com/9c41bc6e713573818c8a2086a6e204be.png" alt="Image from Gyazo" width="1024"/></a>

Face APIのリソースを作成します。

<a href="https://gyazo.com/506f1466fe43354518e43cc5a3bd24fa"><img src="https://i.gyazo.com/506f1466fe43354518e43cc5a3bd24fa.png" alt="Image from Gyazo" width="1024"/></a>

<a href="https://gyazo.com/5201c4d4037788c001d79f1cdfef8725"><img src="https://i.gyazo.com/5201c4d4037788c001d79f1cdfef8725.png" alt="Image from Gyazo" width="1024"/></a>

### リソースグループを作成する

> 既にリソースグループを作成している方は作成不要です

リソースグループの`新規作成`をクリックし、リソースグループ名`handson-20210306`を入力します。

<a href="https://gyazo.com/cd8c999ccca54a34eba230c44e926a48"><img src="https://i.gyazo.com/cd8c999ccca54a34eba230c44e926a48.png" alt="Image from Gyazo" width="1024"/></a>

<a href="https://gyazo.com/199465814a832fa28eb3c97955c9eb48"><img src="https://i.gyazo.com/199465814a832fa28eb3c97955c9eb48.png" alt="Image from Gyazo" width="1024"/></a>

リソースグループが作成されました。

<a href="https://gyazo.com/c9cb77de2d96a1974c24eaed0b967e9c"><img src="https://i.gyazo.com/c9cb77de2d96a1974c24eaed0b967e9c.png" alt="Image from Gyazo" width="1024"/></a>

### Face APIのリソースを作成する

残りの項目を埋めて、`確認および作成`をクリックします。

| 項目 | 値 | 備考 |
| -- | -- | -- |
| リージョン | 東日本 | 一番近い`東日本`を選択します。 |
| 名前 | `handson-{名前}-20210306` | ユニークな名前をつける必要があります。今日は名字を入れましょう。 |
| 価格レベル | `Free F0` | 無料のものを選択します |

> 同じサブスクリプションでは、無料のFace APIは一つしか作成できません。  
> 既に作成済みの場合はそちらを利用しましょう。  
> サブスクリプションを新しく作成してもOKです。

<a href="https://gyazo.com/f574fe4dc34f2111a5993def294400e5"><img src="https://i.gyazo.com/f574fe4dc34f2111a5993def294400e5.png" alt="Image from Gyazo" width="1024"/></a>

<a href="https://gyazo.com/0a4485f141306087f5bc4f6273f04eb8"><img src="https://i.gyazo.com/0a4485f141306087f5bc4f6273f04eb8.png" alt="Image from Gyazo" width="1024"/></a>

デプロイが完了したら、`リソースに移動`をクリックします。

<a href="https://gyazo.com/bd110a382065d4c69ea82a7b41a9dc0c"><img src="https://i.gyazo.com/bd110a382065d4c69ea82a7b41a9dc0c.png" alt="Image from Gyazo" width="1024"/></a>

`キー1`と`エンドポイント`をコピーします。

<a href="https://gyazo.com/199c26da328160a466584e4f420b3f69"><img src="https://i.gyazo.com/199c26da328160a466584e4f420b3f69.png" alt="Image from Gyazo" width="1034"/></a>

## Face APIとLINE Botを組み合わせよう



[←TOPに戻る](../)
