'use strict';

// ########################################
//               初期設定など
// ########################################
const fs = require('fs');
const express = require('express');
const line = require('@line/bot-sdk');
const { FaceClient } = require('@azure/cognitiveservices-face');
const { CognitiveServicesCredentials } = require('@azure/ms-rest-azure-js');

const PORT = process.env.PORT || 3000;

// LINE Botパラメータ
// 1. オウム返しBotを作ろう で設定します
const config = {
  channelSecret: 'チャネルシークレットを記入する',
  channelAccessToken: 'チャネルアクセストークンを記入する',
};
const lineClient = new line.Client(config);

// Face APIパラメータ
// 2. AIと組み合わせよう で設定します。
const faceKey = 'キー1を記入する';
const faceEndPoint = 'エンドポイントを記入する';
const cognitiveServiceCredentials = new CognitiveServicesCredentials(faceKey);
const faceClient = new FaceClient(cognitiveServiceCredentials, faceEndPoint);

// ########################################
//  LINEサーバーからのWebhookデータを処理する部分
// ########################################
async function handleEvent(event) {
  // 画像を受信した場合は、Face APIを使って感情分析する
  if (event.message.type === 'image') {
    try {
      // 画像を取得する
      const image = await downloadContent(event.message.id);

      // 画像を取得し終わったら、Face APIに送信する
      const result = await faceClient.face.detectWithStream(image, {
        returnFaceAttributes: ['emotion'],
      });

      // Face APIの結果から、返信するメッセージを組み立てる
      let text = '';
      if (result.length === 0) {
        // 結果が0件の場合
        text += '送信された画像から顔が検出できませんでした。';
      } else {
        // 結果がある場合、最初の結果を表示する
        text += '感情を分析しました！\n';
        text += '\n';
        text += '怒り　：' + result[0].faceAttributes.emotion.anger + '\n';
        text += '軽蔑　：' + result[0].faceAttributes.emotion.contempt + '\n';
        text += '嫌悪　：' + result[0].faceAttributes.emotion.disgust + '\n';
        text += '喜び　：' + result[0].faceAttributes.emotion.happiness + '\n';
        text += '中立　：' + result[0].faceAttributes.emotion.neutral + '\n';
        text += '悲しみ：' + result[0].faceAttributes.emotion.sadness + '\n';
        text += '驚き　：' + result[0].faceAttributes.emotion.surprise + '\n';
        text += '恐れ　：' + result[0].faceAttributes.emotion.fear;
        // memo: 返す文字を編集する場合はここを編集しましょう
      }

      return lineClient.replyMessage(event.replyToken, {
        type: 'text',
        text: text, // ← ここに入れた言葉が実際に返信されます
      });
    } catch (e) {
      console.error(e);

      return lineClient.replyMessage(event.replyToken, {
        type: 'text',
        text: '画像取得or画像分析中にエラーが発生しました。',
      });
    }
  }

  // 「テキストメッセージ」であれば、受信したテキストをそのまま返事します
  if (event.message.type === 'text') {
    let text = event.message.text;  // event.message.textには、LINEアプリで入力した文字が入っています
    // text += event.message.text; // memo: オウム2倍返しする場合はここのコメントを外しましょう

    return lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: text,
    });
  }
}

// ########################################
//     LINEで送られた画像を保存する部分
// ########################################
async function downloadContent(messageId, downloadPath = './image.png') {
  const data = [];
  return lineClient.getMessageContent(messageId).then(
    (stream) =>
      new Promise((resolve, reject) => {
        const writable = fs.createWriteStream(downloadPath);
        stream.on('data', (chunk) => data.push(Buffer.from(chunk)));
        stream.pipe(writable);
        stream.on('end', () => resolve(Buffer.concat(data)));
        stream.on('error', reject);
      })
  );
}

// ########################################
//        Expressによるサーバー部分
// ########################################

// expressを初期化します
const app = express();

// HTTP GETによって '/' のパスにアクセスがあったときに 'Hello LINE BOT! (HTTP GET)' と返事します
// これはMessaging APIとは関係のない確認用のものです
app.get('/', (req, res) => res.send('Hello LINE BOT! (HTTP GET)'));

// HTTP POSTによって '/webhook' のパスにアクセスがあったら、POSTされた内容に応じて様々な処理をします
app.post('/', line.middleware(config), (req, res) => {
  // Webhookの中身を確認用にターミナルに表示します
  console.log(req.body.events);

  // 空っぽの場合、検証ボタンをクリックしたときに飛んできた'接続確認'用
  // 削除しても問題ありません
  if (req.body.events.length == 0) {
    res.send('Hello LINE BOT! (HTTP POST)'); // LINEサーバーに返答します
    console.log('検証イベントを受信しました！'); // ターミナルに表示します
    return; // これより下は実行されません
  }

  // あらかじめ宣言しておいた 'handleEvent' 関数にWebhookの中身を渡して処理してもらい、
  // 関数から戻ってきたデータをそのままLINEサーバーに「レスポンス」として返します
  Promise.all(req.body.events.map(handleEvent)).then((result) => {
    res.json(result);
  });
});

// 最初に決めたポート番号でサーバーをPC内だけに公開します
// （環境によってはローカルネットワーク内にも公開されます）
app.listen(PORT);
console.log(`ポート${PORT}番でExpressサーバーを実行中です…`);
