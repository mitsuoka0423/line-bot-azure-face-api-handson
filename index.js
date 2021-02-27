require('dotenv').config();

const { FaceClient, FaceModels } = require("@azure/cognitiveservices-face");
const { CognitiveServicesCredentials } = require("@azure/ms-rest-azure-js");

async function main() {
  const faceKey = process.env["faceKey"] || "<faceKey>";
  const faceEndPoint = process.env["faceEndPoint"] || "<faceEndPoint>";
  console.log({faceKey, faceEndPoint});
  const cognitiveServiceCredentials = new CognitiveServicesCredentials(faceKey);
  const client = new FaceClient(cognitiveServiceCredentials, faceEndPoint);
  const url =
    "https://pbs.twimg.com/profile_images/3354326900/3a5168f2b45c07d0965098be1a4e3007.jpeg";
  const options = {
    returnFaceLandmarks: true
  };
  client.face
    .detectWithUrl(url, options)
    .then(result => {
      console.log("The result is: ");
      console.log(JSON.stringify(result));
    })
    .catch(err => {
      console.log("An error occurred:");
      console.error(err);
    });
}
 
main();
