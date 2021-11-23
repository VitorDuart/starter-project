import { gapi } from 'gapi-script';

var API_KEY = 'AIzaSyBTFtrCP1dHYcgmdPtwiPvZkixyR5iCgMQ';
var CLIENT_ID = '936273387991-hd91h53adrnbao85gd71a7u62merl734.apps.googleusercontent.com';
var DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
var SCOPES = 'profile';


// function start() {
var GoogleAuth;
function initClient() {
    gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPES,
        'discoveryDocs': DISCOVERY_DOCS
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        // GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
}
// };


gapi.load('client', initClient);

function listFiles() {
    gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': "nextPageToken, files(id, name)"
    }).then(function(response) {
    //   appendPre('Files:');
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file.name)
        }
      } else {
          console.log('No files found.');
        }
    });
}

// export default listFiles

// const { google } = require('googleapis');
//path module
// const path = require('path');

// //file system module
// const fs = require('fs');


// const CLIENT_ID = '936273387991-hd91h53adrnbao85gd71a7u62merl734.apps.googleusercontent.com'

// //client secret
// const CLIENT_SECRET = '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';

// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

// const REFRESH_TOKEN = '1//04swXOtlMQvFVCgYIARAAGAQSNwF-L9Ir7zb6fkgoebnlv1-kYZnNJYRWC4H9eG6H_CNOv3vzhqJnh0D5yznSA4Jq4jHfEVQ3zvQ'

// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// // //initialize google drive
// const drive = google.drive({
//   version: 'v3',
//   auth: oauth2Client,
// });

// const filePath = path.join(__dirname, 'hero.png');

// async function uploadFile() {
//   try{
//     const response = await drive.files.create({
//           requestBody: {
//               name: 'hero.png', //file name
//               mimeType: 'image/png',
//           },
//           media: {
//               mimeType: 'image/png',
//               body: fs.createReadStream(filePath),
//           },
//       });  
//       // report the response from the request
//       console.log(response.data);
//   }catch (error) {
//       //report the error message
//       console.log(error.message);
//   }
// }
