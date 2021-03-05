# オウム返しBotを作ろう

## この章のゴール

- 送信した文字をそのまま返す`オウム返しBot`を作成する

### 完成イメージ

<iframe width="414" height="736" src="https://www.youtube.com/embed/BIkEuLy2tAs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ここからは話を聞くタイム

<a href="https://gyazo.com/6529781dd996c64228080c383aa4a325"><img src="https://i.gyazo.com/6529781dd996c64228080c383aa4a325.png" alt="Image from Gyazo" width="500"/></a>

### LINE Botとは？

そもそもBotとは、ロボット(Robot)が語源の言葉で、インターネット上で反復タスクを実行するプログラムのことです。  

> ボットとは？：https://www.cloudflare.com/ja-jp/learning/bots/what-is-a-bot/

最近では、チャットボットやツイートボット、SEOの分野ではGooglebotなどが有名です。

LINE Botとは、LINEアプリ上で動くプログラムのことです。  
LINEアプリとプログラムの連携には、LINEが提供している`Messaging API`を利用します。

### システムの全体イメージ

本ハンズオンでの登場人物は以下の3つです。  
主に、サーバーの部分のプログラムを編集していきます。

<a href="https://gyazo.com/1ceade2f10b784b68f3bed71efcf83e3"><img src="https://i.gyazo.com/1ceade2f10b784b68f3bed71efcf83e3.png" alt="Image from Gyazo" width="933"/></a>

`1. オウム返しBotを作ろう`では、LINEアプリから送信した文字列をサーバーで受け取り、LINEアプリにそのまま返すオウム返しBotを作成します。

<a href="https://gyazo.com/ef380d63c53fba3e41b79216fb7f0070"><img src="https://i.gyazo.com/ef380d63c53fba3e41b79216fb7f0070.png" alt="Image from Gyazo" width="822"/></a>

`2. 感情分析AIと組み合わせよう`では、LINEアプリから送信した画像を、Azure Face APIに送信し感情分析します。  
その結果をサーバーで変換して、LINEアプリに結果を表示します。

<a href="https://gyazo.com/33774c2087d89d3b6bb3e6a5079c44f7"><img src="https://i.gyazo.com/33774c2087d89d3b6bb3e6a5079c44f7.png" alt="Image from Gyazo" width="823"/></a>

## ここからは手を動かすタイム

<a href="https://gyazo.com/3600fb35b96dcd212cc0d4b6f3240e74"><img src="https://i.gyazo.com/3600fb35b96dcd212cc0d4b6f3240e74.png" alt="Image from Gyazo" width="500"/></a>

### LINE Botを登録しよう

LINE Botは、LINE Developersから登録する必要があります。

LINE Developers([https://developers.line.biz/ja/](https://developers.line.biz/ja/))を開き、ログインします。

<a href="https://gyazo.com/55926be4e43791a4d30a2c4fa35b77c1"><img src="https://i.gyazo.com/55926be4e43791a4d30a2c4fa35b77c1.png" alt="Image from Gyazo" width="912"/></a>

<a href="https://gyazo.com/6921026259dc0cacb200097e82340289"><img src="https://i.gyazo.com/6921026259dc0cacb200097e82340289.png" alt="Image from Gyazo" width="912"/></a>

ログインできたら、プロバイダーの`作成`をクリックします。

<a href="https://gyazo.com/ef306d3ca442a7a8df95cce418778b57"><img src="https://i.gyazo.com/ef306d3ca442a7a8df95cce418778b57.png" alt="Image from Gyazo" width="1249"/></a>

プロバイダー名を入力し、`作成`をクリックします。（名前は好きなものでOKです。）

<a href="https://gyazo.com/718446885e86eb2f547379fb63fbbd59"><img src="https://i.gyazo.com/718446885e86eb2f547379fb63fbbd59.png" alt="Image from Gyazo" width="1249"/></a>

Messaging APIを作成します。

<a href="https://gyazo.com/ca20e71a634a089a5ce80aeda3dd065a"><img src="https://i.gyazo.com/ca20e71a634a089a5ce80aeda3dd065a.png" alt="Image from Gyazo" width="1249"/></a>

必要な項目を入力し、`作成`をクリックします。

| 項目 | 内容 | 備考 |
| -- | -- | -- |
| プロバイダー | 先程作成したものを選択 | -- |
| チャネル名 | 好きな名前 | Bot名になります。`LINE`という文字は入れられないので注意。 |
| チャネル説明 | チャネルの説明 | -- |
| 大業種 | 適当に選択 | -- |
| 小業種 | 適当に選択 | -- |

<a href="https://gyazo.com/6a8e7227b84a5433e3d1f5a5c673c5ed"><img src="https://i.gyazo.com/6a8e7227b84a5433e3d1f5a5c673c5ed.png" alt="Image from Gyazo" width="1249"/></a>

<a href="https://gyazo.com/378b1d61ba94943527c9af268b1ec0d6"><img src="https://i.gyazo.com/378b1d61ba94943527c9af268b1ec0d6.png" alt="Image from Gyazo" width="1249"/></a>

<a href="https://gyazo.com/7b46e4c918db445c98c876a175c975d4"><img src="https://i.gyazo.com/7b46e4c918db445c98c876a175c975d4.png" alt="Image from Gyazo" width="1249"/></a>

<a href="https://gyazo.com/ce7837928b7b873d9ec2d48e4a5fa9cc"><img src="https://i.gyazo.com/ce7837928b7b873d9ec2d48e4a5fa9cc.png" alt="Image from Gyazo" width="1249"/></a>

こんな画面が表示されれば登録完了です。

<a href="https://gyazo.com/331c4e70599ed34ffb735ea0c9b5a772"><img src="https://i.gyazo.com/331c4e70599ed34ffb735ea0c9b5a772.png" alt="Image from Gyazo" width="1134"/></a>

QRコードをLINEアプリで読み取り、友達登録しましょう。

<a href="https://gyazo.com/a59294c0b4135a4bfb2a3f40fc5d6f9b"><img src="https://i.gyazo.com/a59294c0b4135a4bfb2a3f40fc5d6f9b.png" alt="Image from Gyazo" width="1134"/></a>

<a href="https://gyazo.com/1e6049acab5fcc1a83f73000949701f6"><img src="https://i.gyazo.com/1e6049acab5fcc1a83f73000949701f6.png" alt="Image from Gyazo" width="400"/></a>

### Gitpodを開こう

Gitpodは、オンライン利用できるエディタです。

以下のURLを開きましょう。  
https://gitpod.io/#https://github.com/tmitsuoka0423/line-bot-azure-face-api-handson

GitHubアカウントでログインします。

<a href="https://gyazo.com/14aca92f43ed9cfa88f3484178124d0d"><img src="https://i.gyazo.com/14aca92f43ed9cfa88f3484178124d0d.png" alt="Image from Gyazo" width="1000"/></a>

<a href="https://gyazo.com/21ef753c6e49040badfcc0442fcc1298"><img src="https://i.gyazo.com/21ef753c6e49040badfcc0442fcc1298.png" alt="Image from Gyazo" width="1000"/></a>

このような画面が表示されます。

<a href="https://gyazo.com/d8ef262a41e320c525d51762be79a8b6"><img src="https://i.gyazo.com/d8ef262a41e320c525d51762be79a8b6.png" alt="Image from Gyazo" width="1000"/></a>

Gitpodの準備はこれでOKです。  
オウム返しBotを動かす準備を進めていきましょう！

### オウム返しBotを動かしてみよう

Gitpod上でコードを編集しましょう。  
LINE Botの設定を追記する必要があるので編集していきます。

サイドバーから`index.js`を開き、`チャネルシークレット`・`チャネルアクセストークン`の設定箇所までスクロールします。

<a href="https://gyazo.com/54036709b6af66f45ac166a2862b4345"><img src="https://i.gyazo.com/54036709b6af66f45ac166a2862b4345.png" alt="Image from Gyazo" width="1000"/></a>

`チャネルシークレット`・`チャネルアクセストークン`は[LINE Developers](https://developers.line.biz/ja/)のサイトから取得することができます。

先程作成したチャネルを開き、`Basic settings`タブ・`Messaging API`タブからそれぞれ、`チャネルシークレット`・`チャネルアクセストークン`をコピーしてきます。

<a href="https://gyazo.com/f1660c511e41f7ec87132b5d30e70f8e"><img src="https://i.gyazo.com/f1660c511e41f7ec87132b5d30e70f8e.png" alt="Image from Gyazo" width="1000"/></a>

<a href="https://gyazo.com/16624ba230246f77b31fccb6ae650061"><img src="https://i.gyazo.com/16624ba230246f77b31fccb6ae650061.png" alt="Image from Gyazo" width="1000"/></a>

入力するとこのようになります。  
(シークレットキーとアクセストークンの値は人によって異なります)

> `注意！`  
> シークレットキーとアクセストークンは公開しないようにしましょう。  
> Botを悪用されるリスクがあります。

<a href="https://gyazo.com/1ad95b14a073bb15cb2e3b687cf9bb8a"><img src="https://i.gyazo.com/1ad95b14a073bb15cb2e3b687cf9bb8a.png" alt="Image from Gyazo" width="1122.68"/></a>

ターミナルに`node index.js`と入力して、`Enter`を押します。

<a href="https://gyazo.com/0cd665b2856038452f724002cad15e24"><img src="https://i.gyazo.com/0cd665b2856038452f724002cad15e24.png" alt="Image from Gyazo" width="1000"/></a>

`Make Public`をクリックします。

<a href="https://gyazo.com/c4ef4785b2d3f857aa1bce0fe523b640"><img src="https://i.gyazo.com/c4ef4785b2d3f857aa1bce0fe523b640.png" alt="Image from Gyazo" width="1000"/></a>

`Open Ports`タブの`Open Browwer`をクリックします。

<a href="https://gyazo.com/4fc6b6d4917879ba10e28f129e7d2cd4"><img src="https://i.gyazo.com/4fc6b6d4917879ba10e28f129e7d2cd4.png" alt="Image from Gyazo" width="1000"/></a>

新しいタブが開くので、そのページのURLをコピーし、Botチャネルの`Webhook URL`にペーストします。

<a href="https://gyazo.com/afa573e55291365780c8ee43b88682b6"><img src="https://i.gyazo.com/afa573e55291365780c8ee43b88682b6.png" alt="Image from Gyazo" width="1000"/></a>

接続確認をします。  
`Verify`をクリックして、`Success`と表示されればOKです。

<a href="https://gyazo.com/a8a87743e1d9b02fdd7b1936070d13c0"><img src="https://i.gyazo.com/a8a87743e1d9b02fdd7b1936070d13c0.png" alt="Image from Gyazo" width="974"/></a>

<a href="https://gyazo.com/084611d55d08bb89b44ba163097932bf"><img src="https://i.gyazo.com/084611d55d08bb89b44ba163097932bf.png" alt="Image from Gyazo" width="974"/></a>

実際にLINEで動作確認してみましょう。  
Botページに表示されているQRコードを読み取り、Botと友達になってから、適当に文字を送ってみましょう。

<iframe width="414" height="736" src="https://www.youtube.com/embed/BIkEuLy2tAs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

オウム返しBotの作成は以上で完了です！  
次はAIのサービスの一つである`Face API`と組み合わせていきます。

> ！！注意！！  
> 後で使うので、Gitpodのタブは**閉じない**ようにしましょう！

[←TOPに戻る](../)
