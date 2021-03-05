# オウム返しBotを作ろう

## この章のゴール

- 送信した文字をそのまま返す`オウム返しBot`を作成する

### 完成イメージ

<iframe width="414" height="736" src="https://www.youtube.com/embed/BIkEuLy2tAs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ここからは話を聞くタイム

<a href="https://gyazo.com/6529781dd996c64228080c383aa4a325"><img src="https://i.gyazo.com/6529781dd996c64228080c383aa4a325.png" alt="Image from Gyazo" width="500"/></a>

### LINE Botとは？

// TODO

## ここからは手を動かすタイム

<a href="https://gyazo.com/3600fb35b96dcd212cc0d4b6f3240e74"><img src="https://i.gyazo.com/3600fb35b96dcd212cc0d4b6f3240e74.png" alt="Image from Gyazo" width="500"/></a>

### チャンネルを作ろう

// TODO  LINE Developersでチャンネルを作るまでの手順を書く

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
