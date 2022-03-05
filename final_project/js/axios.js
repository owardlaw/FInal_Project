function buildJson() {
    var y = document.getElementById("messageArea").value;
    var x = document.getElementById("recepientAddress").value;
    var f = '{"address" :"'+x +'", "message" :"' +y +' "}'
    console.log(f)
    //const myJSON= '{"address":"0x123456", "message":"I want to buy your NFT"}';
    //const myObj = JSON.parse(myJSON);

    const myObj = JSON.parse(f);
    document.getElementById("demo").innerHTML = myObj.address;

    document.getElementById("demo1").innerHTML = myObj.message;
    alert(myObj)

  }
  
  var JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyOTdhOGY1Zi1jMzE3LTQ0YmQtYjNiZC0zZTE4MTc1YjQ1MTgiLCJlbWFpbCI6Im93YXJkbGF3QG1lLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2V9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI1OWViZGJhNTYwM2NmM2VmMzNjMyIsInNjb3BlZEtleVNlY3JldCI6IjNmMThlNjQzYWYwYWFiZTQ5N2YwZTIwYjhmNGQyYTU3MDI5Zjc1OThiMjBkYmE2YWZhNmUyNWRlMDIwNTM1ZGUiLCJpYXQiOjE2NDY1MTg2NzN9.aSnjXEH8fQ1MJnQH30MVAwky1YSHPPSs6tWVjOu2SgY"

  var pinataApiKey = "59ebdba5603cf3ef33c3";
  var pinataSecretApiKey = "3f18e643af0aabe497f0e20b8f4d2a57029f7598b20dba6afa6e25de020535de";
  var JSONBody = myObj


  const axios = require('axios').default;



    export const pinJSONToIPFS = (pinataApiKey, pinataSecretApiKey, JSONBody) => {
      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
        return axios
        .post(url, JSONBody, {
                  headers: {
                  pinata_api_key: pinataApiKey,
                  pinata_secret_api_key: pinataSecretApiKey
                }
                })
                .then(function (response) {
                    //handle response here
                })
                .catch(function (error) {
                    //handle error here
                });
        };
