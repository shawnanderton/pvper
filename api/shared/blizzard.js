
let region = 'us';
const host = 'api.blizzard.com';


let blizzardOauth = null

const getToken =  async () => {
  console.log("blizzardOauth", blizzardOauth);
    if(blizzardOauth !== null &&  !blizzardOauth.expired()) {
      return Promise.resolve(blizzardOauth.token.access_token);
    }

    const credentials = {
        client: {
          id: process.env['BLIZZARD-CLIENT-ID'],
          secret: process.env['BLIZZARD-CLIENT-SECRET']
        },
        auth: {
          tokenHost: "https://us.battle.net"
        }
      };

      try {
      const oauth2 = require("simple-oauth2").create(credentials);    
      blizzardOauth =  await oauth2.clientCredentials
            .getToken()
            .then(oauth2.accessToken.create);
      } catch (err) { console.log(err)}
     
      return blizzardOauth.token.access_token;

    };

    const getUrl = () =>{
      return `https://${region}.${host}`;
    }

  module.exports = {getToken, getUrl}