const {
  getToken,
  getUrl,
  convertBracket,
  testData,
} = require("../shared/blizzard");
const axios = require("axios");

module.exports = async function (context, req) {
  const { region, season, bracket } = req.params;

  const baseUrl = getUrl(region);
  try {
    // token = await getToken();

    // const url = `${baseUrl}/data/wow/pvp-season/${season}/pvp-leaderboard/2v2?namespace=dynamic-us&locale=en_US&access_token=${token}`;
    // const response = await axios.get(url);
    // console.log(response.data);
    // const bracket2 = await convertBracket(
    //   response.data.entries.splice(0, 10),
    //   response.data.bracket.type,
    //   region,
    //   token
    // );
    context.res.status(200).send(testData);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
