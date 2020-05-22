const { getToken, getUrl} = require('../shared/blizzard');
const axios = require("axios");


module.exports = async function (context, req) {
  const baseUrl = getUrl();
  console.log(baseUrl);
  try {
    token =  await getToken();
    console.log('token', token);
    const url = `${baseUrl}/data/wow/pvp-season/27/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=${token}`;
    const response = await axios.get(url);
    context.res.status(200).send( response.data);
  } catch (error) {
    context.res.status(500).send(error);
  }
};