import *  as Cache  from './cache.service';
import axios from 'axios';
import { isExpired } from '../helpers/utils';


  const BNET_ID = process.env.BLIZZARDCLIENTID;
  const BNET_SECRET = process.env.BLIZZARDCLIENTSECRET;
  let auth = null;

  async function get() {
    if(auth  && !isExpired(auth.expires_in)) return auth.access_token;
   
    auth = await Cache.get('blizzard_oauth');
   
   if (auth) return auth.access_token;

   throw new Error('Please set OAuth Token');
}

  async function set() {
  try {
   const response = await axios({
    method: 'post',
    url: 'https://us.battle.net/oauth/token',
    data: `grant_type=client_credentials&client_id=${BNET_ID}&client_secret=${BNET_SECRET}`
  });
   auth = response.data;
  await Cache.set<any>('blizzard_oauth', response.data, response.data.expires_in);

  } catch (error) {
    console.log(error);
    throw new Error(`Problem getting the OAuth token from the Blizzard API.  
                        Please check that your Client ID and Secret are correct.`);
  }
 }

export {set, get}