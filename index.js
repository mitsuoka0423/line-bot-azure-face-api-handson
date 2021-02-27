'use strict';

// ########################################
//               初期設定など
// ########################################
const express = require('express');
const line = require('@line/bot-sdk');
const { FaceClient, FaceModels } = require("@azure/cognitiveservices-face");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

const PORT = process.env.PORT || 3000;
const config = {
  channelSecret: 'チャネルシークレットを記入する',
  channelAccessToken: 'チャネルアクセストークンを記入する',
};
const client = new line.Client(config);

// ########################################
//  LINEサーバーからのWebhookデータを処理する部分
// ########################################
async function handleEvent(event) {
  // 画像を受信した場合は、Face APIを使って分類する
  if (event.message.type === 'image') {

      // 画像を保存
      const downloadPath = './01.png'; //フォルダに入れたいときは予めフォルダを作っておくとよい
      const getContent = await downloadContent(event.message.id, downloadPath);

      // 画像を取得し終わったら、AIメーカーAPIに送信する
      const result = await predict(getContent);

      // エラーが発生した場合は、エラーメッセージを表示する
      if (result.state === 0) {
          return client.replyMessage(event.replyToken, {
              type: 'text',
              text: result.messages.join('\n'),
          });
      }

      // AIメーカーAPIの結果から、返信するメッセージを組み立てる
      let text = '';
      for (const { label, score } of Object.values(result.labels)) {
          text += `${label}の確率は${score}%\n`;
      }
      text += 'です。';

      return client.replyMessage(event.replyToken, {
          type: 'text',
          text: text
      });
      // });
  }

  // 「テキストメッセージ」であれば、受信したテキストをそのまま返事します
  if (event.message.type === 'text') {
      return client.replyMessage(event.replyToken, {
          type: 'text',
          text: event.message.text // ← ここに入れた言葉が実際に返信されます
      });
  }
}

// ########################################
//     LINEで送られた画像を保存する部分
// ########################################
function downloadContent(messageId, downloadPath) {
  const data = [];
  return client.getMessageContent(messageId)
      .then((stream) => new Promise((resolve, reject) => {
          const writable = fs.createWriteStream(downloadPath);
          stream.on('data', (chunk) => data.push(Buffer.from(chunk)));
          stream.pipe(writable);
          stream.on('end', () => resolve(Buffer.concat(data)));
          stream.on('error', reject);
      }));
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

    // 空っぽの場合、検証ボタンをクリックしたときに飛んできた"接続確認"用
    // 削除しても問題ありません
    if (req.body.events.length == 0) {
        res.send('Hello LINE BOT! (HTTP POST)'); // LINEサーバーに返答します
        console.log('検証イベントを受信しました！'); // ターミナルに表示します
        return; // これより下は実行されません
    }

    // あらかじめ宣言しておいた "handleEvent" 関数にWebhookの中身を渡して処理してもらい、
    // 関数から戻ってきたデータをそのままLINEサーバーに「レスポンス」として返します
    Promise.all(req.body.events.map(handleEvent)).then((result) => res.json(result));
});

// 最初に決めたポート番号でサーバーをPC内だけに公開します
// （環境によってはローカルネットワーク内にも公開されます）
app.listen(PORT);
console.log(`ポート${PORT}番でExpressサーバーを実行中です…`);

// async function main() {
//   const faceKey = 'FaceKeyを記入する';
//   const faceEndPoint = 'FaceEndpointを記入する';
//   console.log({faceKey, faceEndPoint});
//   const cognitiveServiceCredentials = new CognitiveServicesCredentials(faceKey);
//   const client = new FaceClient(cognitiveServiceCredentials, faceEndPoint);
//   const url =
//     "https://pbs.twimg.com/profile_images/3354326900/3a5168f2b45c07d0965098be1a4e3007.jpeg";
//   const options = {
//     returnFaceLandmarks: true
//   };
//   client.face
//     .detectWithUrl(url, options)
//     .then(result => {
//       console.log("The result is: ");
//       console.log(JSON.stringify(result));
//     })
//     .catch(err => {
//       console.log("An error occurred:");
//       console.error(err);
//     });
// }
 
// main();
