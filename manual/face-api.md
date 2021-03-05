# AIと組み合わせよう

## この章のゴール

- LINE BotとAzure Face APIを組み合わせて、感情分析Botを作成する


### 完成イメージ

// TODO

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


## Face APIとLINE Botを組み合わせよう

[←TOPに戻る](../)
