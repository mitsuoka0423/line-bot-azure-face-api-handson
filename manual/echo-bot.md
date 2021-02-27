# オウム返しBotを作ろう

// TODO 動くイメージを載せる

## チャンネルを作ろう

// TODO  LINE Developersでチャンネルを作るまでの手順を書く

## Gitpodを開こう

Gitpodは、オンライン利用できるエディタです。

以下のURLを開きましょう。  
https://gitpod.io/#https://github.com/tmitsuoka0423/line-bot-azure-face-api-handson

`表示された方のみ`  
GitHubアカウントでログインしましょう。

<a href="https://gyazo.com/14aca92f43ed9cfa88f3484178124d0d"><img src="https://i.gyazo.com/14aca92f43ed9cfa88f3484178124d0d.png" alt="Image from Gyazo" width="1117"/></a>

<a href="https://gyazo.com/21ef753c6e49040badfcc0442fcc1298"><img src="https://i.gyazo.com/21ef753c6e49040badfcc0442fcc1298.png" alt="Image from Gyazo" width="1117"/></a>

このような画面が表示されます。

<a href="https://gyazo.com/d8ef262a41e320c525d51762be79a8b6"><img src="https://i.gyazo.com/d8ef262a41e320c525d51762be79a8b6.png" alt="Image from Gyazo" width="1117"/></a>

忘れずに`Auto Save`の設定を`ON`にしておきましょう。  
チェックマークがついていればOKです。

<a href="https://gyazo.com/9af96e0cbe2a20877e029615a6495f07"><img src="https://i.gyazo.com/9af96e0cbe2a20877e029615a6495f07.png" alt="Image from Gyazo" width="1117"/></a>

Gitpodの準備はこれでOKです。  
オウム返しBotを動かす準備を進めていきましょう！

## オウム返しBotを動かしてみよう

必要なコードはこちらで用意しました。

LINE Botの設定を追記する必要があるので編集していきます。

サイドバーから`index.js`を開き、`チャネルシークレット`・`チャネルアクセストークン`の設定箇所までスクロールします。

<a href="https://gyazo.com/54036709b6af66f45ac166a2862b4345"><img src="https://i.gyazo.com/54036709b6af66f45ac166a2862b4345.png" alt="Image from Gyazo" width="1134.872"/></a>

`チャネルシークレット`・`チャネルアクセストークン`は[LINE Developers](https://developers.line.biz/ja/)のサイトから取得することができます。

先程作成したチャネルを開き、`Basic settings`タブ・`Messaging API`タブからそれぞれ、`チャネルシークレット`・`チャネルアクセストークン`をコピーしてきます。

<a href="https://gyazo.com/f1660c511e41f7ec87132b5d30e70f8e"><img src="https://i.gyazo.com/f1660c511e41f7ec87132b5d30e70f8e.png" alt="Image from Gyazo" width="1117"/></a>

<a href="https://gyazo.com/16624ba230246f77b31fccb6ae650061"><img src="https://i.gyazo.com/16624ba230246f77b31fccb6ae650061.png" alt="Image from Gyazo" width="1117"/></a>



ターミナルに`node index.js`と入力して、`Enter`を押します。

<a href="https://gyazo.com/0cd665b2856038452f724002cad15e24"><img src="https://i.gyazo.com/0cd665b2856038452f724002cad15e24.png" alt="Image from Gyazo" width="1134.872"/></a>

