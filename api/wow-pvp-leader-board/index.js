const {
  getToken,
  getUrl,
  getLeaderBoards,
  convertBracket,
} = require("../shared/blizzard");

module.exports = async function (context, req) {;
  const { region, season, bracket } = req.params;
  let {limit, page} = req.query;
  try {
    const token = await getToken(region);
    const leaderboard = await getLeaderBoards(region, season, "2v2", token);
    limit = parseInt(limit)
    const begin = (page -1) * limit;
    const end = begin + limit;
    console.log('startstart', begin);
    console.log('endend', end);
    const leaderboardConverted = await convertBracket(
      leaderboard.entries.sort((a,b) => a.rank - b.rank).slice(begin, end),
      "ARENA_2v2",
      region,
      token
    );
    context.res.status(200).send(leaderboardConverted);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
